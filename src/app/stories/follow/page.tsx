import Link from "next/link";
import CopyField from "@/components/CopyField";
import { baseUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Follow the stories",
  description: "Get new Upside MS stories as they're published, in any RSS feed reader.",
  path: "/stories/follow",
});

const feedUrl = `${baseUrl}/feed.xml`;

export default function FollowStories() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/stories" className="text-sm text-ink/60 hover:text-forest transition-colors">
        ← Back to stories
      </Link>
      <h1 className="font-display text-4xl md:text-5xl mt-6 mb-6 text-ink">
        Follow the stories
      </h1>
      <p className="text-ink/80 leading-relaxed mb-10">
        New stories can come straight to you, with no account or email needed.
        Add this address to a feed reader app and each new post will show up
        there as it&apos;s published.
      </p>

      <CopyField value={feedUrl} />

      <p className="text-sm text-ink/70 leading-relaxed mt-6">
        In your feed reader (Feedly, Inoreader, NetNewsWire, Reeder or any
        other), choose <span className="font-medium text-ink/80">Add feed</span>{" "}
        or <span className="font-medium text-ink/80">Follow</span> and paste
        the address in.
      </p>
    </div>
  );
}
