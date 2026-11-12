import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail, paths } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
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
