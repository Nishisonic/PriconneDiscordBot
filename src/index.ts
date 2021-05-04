import http from "http";
const server = http.createServer();

import { schedule } from "./schedule.js";
import { skill } from "./skill.js";
import { birthday } from "./birthday.js";
import client from "./discordClient.js";
import {} from "./arena.js";
import {} from "./birthday.js";
import {} from "./presence.js";
import {} from "./twitter.js";

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
