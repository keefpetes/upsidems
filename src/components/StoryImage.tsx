import Image from "next/image";
import type { Story } from "@/lib/site";

export default function StoryImage({
  story,
  sizes = "(min-width: 768px) 50vw, 100vw",
  preload = false,
}: {
  story: Story;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div className="card-lift relative overflow-hidden aspect-[16/9] rounded-2xl border border-forest/15 bg-cream-dark">
      <Image
        src={story.image.src}
        alt={story.image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}
