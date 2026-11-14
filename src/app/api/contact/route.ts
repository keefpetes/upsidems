import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail, paths } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Length caps (mirrored as maxLength on the form fields).
const LIMITS = { name: 100, email: 254, message: 5000 } as const;

// Best-effort per-IP throttle: 5 messages per 10 minutes per server instance.
// Instances are short-lived, so this only stops bursts; a Vercel Firewall
// rate-limit rule is the durable layer.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

// Strip line breaks so nothing user-supplied can break out of the subject line.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ");

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages in a short time. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);

  // Honeypot: a hidden field real visitors never see. Bots that fill it get a
  // fake success so they don't retry.
  if (typeof body?.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body?.name === "string" ? oneLine(body.name.trim()) : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  // Only known Get Involved paths are accepted; anything else is "General".
  const topic =
    paths.find((p) => p.slug === body?.topic)?.title ?? "General enquiry";

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json(
      { error: `Please keep your message under ${LIMITS.message} characters.` },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: `Upside MS Website <contact@${process.env.RESEND_EMAIL_DOMAIN}>`,
    to: [contactEmail],
    replyTo: email,
    subject: `[${topic}] New message from ${name}`,
    text: `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
