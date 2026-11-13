import type { ReactNode } from "react";

/**
 * Renders a story body. Each string is one block:
 *   "## Heading"  -> section heading
 *   "- item"      -> bullet (consecutive bullets are grouped into one list)
 *   anything else -> paragraph
 */
export default function StoryBody({ blocks }: { blocks: string[] }) {
  const out: ReactNode[] = [];
  let list: string[] = [];

  const flush = () => {
    if (!list.length) return;
    out.push(
      <ul key={`ul-${out.length}`} data-scroll-reveal className="mt-6 space-y-3 pl-6 list-disc marker:text-rust text-lg leading-relaxed text-ink/85 font-display">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  blocks.forEach((block, i) => {
    if (block.startsWith("- ")) {
      list.push(block.slice(2));
      return;
    }
    flush();
    if (block.startsWith("## ")) {
      out.push(
        <h2 key={i} data-scroll-reveal className="font-display text-2xl md:text-3xl text-forest mt-14 mb-2">
          {block.slice(3)}
        </h2>,
      );
    } else {
      out.push(
        <p key={i} data-scroll-reveal className="text-lg leading-relaxed text-ink/85 font-display mt-6 first:mt-0">
          {block}
        </p>,
      );
    }
  });
  flush();
  return <>{out}</>;
}
