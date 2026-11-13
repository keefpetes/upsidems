import { baseUrl, stories, type Story } from "@/lib/site";

// Built once at deploy time; the feed only changes when a story is added.
export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Same block format as the story page: "## " heading, "- " bullet, else paragraph. */
function bodyHtml(story: Story): string {
  const blocks = story.body ?? [story.excerpt];
  let html = `<p><img src="${baseUrl}${story.image.src}" alt="${esc(story.image.alt)}" /></p>`;
  if (story.contentWarning) html += `<p><em>Content warning: ${esc(story.contentWarning)}</em></p>`;
  let inList = false;
  for (const b of blocks) {
    const isItem = b.startsWith("- ");
    if (isItem && !inList) { html += "<ul>"; inList = true; }
    if (!isItem && inList) { html += "</ul>"; inList = false; }
    if (isItem) html += `<li>${esc(b.slice(2))}</li>`;
    else if (b.startsWith("## ")) html += `<h2>${esc(b.slice(3))}</h2>`;
    else html += `<p>${esc(b)}</p>`;
  }
  if (inList) html += "</ul>";
  html += `<p>— ${esc(story.author)}</p>`;
  if (story.footnote) html += `<p><em>${esc(story.footnote)}</em></p>`;
  return html;
}

export function GET() {
  // No <pubDate>: dates are intentionally not published on the site.
  const items = stories
    .map((s) => {
      const url = `${baseUrl}/stories/${s.slug}`;
      return `    <item>
      <title>${esc(s.title.replace(/[“”"]/g, ""))}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <dc:creator>Keith Peterson</dc:creator>
      <description>${esc(s.excerpt)}</description>
      <content:encoded><![CDATA[${bodyHtml(s).replace(/]]>/g, "]]]]><![CDATA[>")}]]></content:encoded>
      <enclosure url="${baseUrl}${s.image.src}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Upside MS · Stories</title>
    <link>${baseUrl}/stories</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Writing from life with MS: where lived constraints meet the built environment, and what it takes to keep moving.</description>
    <language>en-ca</language>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Upside MS · Stories</title>
      <link>${baseUrl}/stories</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
