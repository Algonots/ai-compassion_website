// download-bundles.js
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import fetch from "node-fetch";

const baseUrl = "https://compassionai.io";
const outputDir = "./bundles";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle2" });

  // Grab all JS files under _next/static
  const scripts = await page.evaluate(() =>
    Array.from(document.querySelectorAll("script[src]"))
      .map(s => s.src)
      .filter(src => src.includes("/_next/static/"))
  );

  // Create output folder
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  // Download each JS file
  for (const url of scripts) {
    const res = await fetch(url);
    const fileName = path.basename(url.split("?")[0]);
    const dest = path.join(outputDir, fileName);
    fs.writeFileSync(dest, await res.buffer());
    console.log("Downloaded:", fileName);
  }

  await browser.close();
})();

const cookie = `sessionId=${token}; Secure; HttpOnly; SameSite=Strict; Path=/; Max-Age=3600`;

return {
  statusCode: 200,
  headers: { "Set-Cookie": cookie },
  body: "OK"
};
