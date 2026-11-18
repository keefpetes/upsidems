// Tell Bing (and other IndexNow engines: Yandex, Seznam, Naver) about the site's pages.
// Run after a deploy goes live:  npm run indexnow
// Reads every URL from the live sitemap and submits them in one request.
import { readdirSync } from "node:fs";

const HOST = "www.upsidems.org";
const keyFile = readdirSync(new URL("../public", import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("IndexNow key file missing from public/");
const key = keyFile.replace(".txt", "");

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status} ${res.statusText}`);
if (res.status >= 400) process.exit(1);
