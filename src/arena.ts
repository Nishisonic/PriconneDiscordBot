import { TextChannel, DMChannel, NewsChannel } from "discord.js";
import client from "./discordClient.js";

const CHAT = process.env.CHAT ?? "";

export async function arenaRemind(minutes: number = 0) {
  const channel = (await client.channels.fetch(CHAT)) as
    | TextChannel
    | DMChannel
    | NewsChannel;
  return await channel.send(
    minutes > 0
      ? `アリーナ締切まで【${minutes}】分前`
      : "-----アリーナ締切-----"
  );
}
