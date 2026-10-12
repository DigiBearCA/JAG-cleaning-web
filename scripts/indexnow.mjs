// Tells IndexNow (Bing, Yandex, and others) that the site's pages changed.
// Run after a production deploy:  npm run indexnow -- https://your-live-domain
// It reads the live sitemap, so the URL list always matches what is deployed.
import { readdirSync } from "node:fs";

const site = process.argv[2]?.replace(/\/$/, "");
if (!site) {
  console.error("Usage: npm run indexnow -- https://your-live-domain");
  process.exit(1);
}

// The key is the name (and content) of the 32-character .txt file in public/.
const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) {
  console.error("No IndexNow key file found in public/.");
  process.exit(1);
}
const key = keyFile.replace(".txt", "");

const sitemap = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(site).host,
    key,
    keyLocation: `${site}/${keyFile}`,
    urlList,
  }),
});
console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
process.exit(res.ok ? 0 : 1);

