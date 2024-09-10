import { Buffer } from "node:buffer";
import fs from "node:fs";

export async function downloadFile(url, dest) {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(dest);
  await new Promise((resolve, reject) => {
    res.arrayBuffer().then((buffer) => {
      fileStream.write(Buffer.from(buffer));
      fileStream.on("finish", resolve);
      fileStream.on("error", reject);
    });
  });
}

downloadFile("{your-trpc-static-serve-url}", "./trpc/trpc-remote.d.ts");
