import http from "http";
import cron from "node-cron";
const server = http.createServer();
import { schedule } from "./schedule.js";
import { skill } from "./skill.js";
import client from "./discordClient.js";
import { birthday, birthdayProcess } from "./birthday.js";
import { arenaRemind } from "./arena.js";
import { presenceProcess } from "./presence.js";
import { nishikumaBroadcastTweetProcess, priconneTweetProcess, } from "./twitter.js";
import { tl } from "./tl.js";
import { status } from "./status.js";
server.on("request", function (_, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
});
server.listen(process.env.PORT || 5000);
client.on("message", async (message) => {
    if (message.author.bot) {
        return;
    }
    if (message.content.match(/・。・ｖ/)) {
        await message.channel.send("・。・ｖ");
        return;
    }
    if (message.content === ".help") {
        await message.channel.send("```" +
            ".birthday `キャラ名` キャラの誕生日を教えてくれます\n" +
            ".schedule  　　　　  キャンペーンスケジュールを教えてくれます\n" +
            ".skill `キャラ名`    キャラのスキルを式で教えてくれます\n" +
            ".skill-p `キャラ名`  キャラのスキルを数値で教えてくれます\n" +
            ".status `キャラ名`   キャラのステータスを教えてくれます\n" +
            ".tl `Youtube URL`   PriLogを用いてTLを教えてくれます" +
            "```");
        return;
    }
    await birthday(message);
    await schedule(message);
    await skill(message);
    await tl(message);
    await status(message);
});
// 1日毎
cron.schedule("0 0 * * *", async () => await birthdayProcess());
// 14:30
cron.schedule("30 14 * * *", async () => await arenaRemind(30));
// 14:55
cron.schedule("55 14 * * *", async () => await arenaRemind(5));
// 15:00
cron.schedule("0 15 * * *", async () => await arenaRemind());
// 1分毎
let lastUpdateTime = Date.now();
cron.schedule("* * * * *", async () => await Promise.allSettled([
    nishikumaBroadcastTweetProcess(lastUpdateTime),
    priconneTweetProcess(lastUpdateTime),
    presenceProcess(),
]).then(() => {
    lastUpdateTime = Date.now();
}));
