import sharp from "sharp";
import fs from "fs";

async function makeIcon(size, out) {
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#050505"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.28}" fill="none" stroke="#38BDF8" stroke-width="${Math.max(4, size * 0.04)}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="${Math.round(size * 0.34)}" font-weight="700">N</text>
</svg>`);
  await sharp(svg).png({ compressionLevel: 9 }).toFile(out);
}

const ogSvg = "public/og-image.svg";
const ogPng = "public/og-image.png";

if (fs.existsSync(ogSvg)) {
  await sharp(ogSvg)
    .resize(1200, 630, { fit: "cover" })
    .png({ compressionLevel: 9, palette: true })
    .toFile("public/og-image.tmp.png");
} else {
  await sharp(ogPng)
    .resize(1200, 630, { fit: "cover" })
    .png({ compressionLevel: 9, palette: true })
    .toFile("public/og-image.tmp.png");
}
fs.renameSync("public/og-image.tmp.png", ogPng);

await makeIcon(192, "public/icons/icon-192.png");
await makeIcon(512, "public/icons/icon-512.png");
await makeIcon(32, "public/icons/icon-32.png");

for (const f of [
  "public/og-image.png",
  "public/icons/icon-192.png",
  "public/icons/icon-512.png",
  "public/icons/icon-32.png",
]) {
  const s = fs.statSync(f).size;
  console.log(f, (s / 1024).toFixed(1) + "KB");
}
