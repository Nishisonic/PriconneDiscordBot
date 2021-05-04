import { TextChannel, DMChannel, NewsChannel } from "discord.js";
import client from "./discordClient.js";
import cron from "node-cron";

const CHAT = process.env.CHAT ?? "";

const arenaRemind = async (minutes: number = 0) => {
  const channel = (await client.channels.fetch(CHAT)) as
    | TextChannel
    | DMChannel
    | NewsChannel;
  return await channel.send(
    minutes > 0
      ? `アリーナ締切まで【${minutes}】分前`
      : "-----アリーナ締切-----"
  );
};

// 14:30
cron.schedule("30 14 * * *", async () => await arenaRemind(30));
// 14:55
cron.schedule("55 14 * * *", async () => await arenaRemind(5));
// 15:00
cron.schedule("0 15 * * *", async () => await arenaRemind());
