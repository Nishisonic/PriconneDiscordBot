import http from "http";
const server = http.createServer();
import { schedule } from "./schedule.js";
import { skill } from "./skill.js";
import client from "./discordClient.js";
import { birthday, birthdayProcess } from "./birthday.js";
import { arenaRemind } from "./arena.js";
import { presenceProcess } from "./presence.js";
import { nishikumaBroadcastTweetProcess, priconneTweetProcess, } from "./twitter.js";
import cron from "node-cron";
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
    await birthday(message);
    await schedule(message);
    await skill(message);
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
    presenceProcess()
]).then(() => {
    lastUpdateTime = Date.now();
}));
