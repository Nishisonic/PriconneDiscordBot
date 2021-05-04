import { Message } from "discord.js";
import fetch from "node-fetch";
import { URL } from "url";
import cheerio from "cheerio";

export async function tl(message: Message) {
  if (message.content.match(/^\.tl .+$/)) {
    const url = message.content.replace(/^\.tl (.+)$/, "$1");
    const v = new URL(url).searchParams.get("v");
    const html = await (await fetch(`https://prilog.jp/?v=${v}`)).text();
    const $ = cheerio.load(html);

    if ($("#copyTargetTl").text().length > 0) {
      await message.channel.send(
        $("#copyTargetTl")
          .text()
          .split("\n")
          .map((str) => str.replace(/^\s+/, ""))
          .filter((str) => str.length > 0)
          .filter((_, index) => index > 0)
          .map((str, index, array) => {
            if (index === 1 && index === array.length - 1) {
              return `\`\`\`${str}\`\`\``;
            }
            if (index === 1) {
              return `\`\`\`${str}`;
            }
            if (index === array.length - 1) {
              return `${str}\`\`\``;
            }
            return str;
          })
          .join("\n")
      );
    } else {
      await message.channel.send("動画取得に失敗しました");
    }
  }
}
