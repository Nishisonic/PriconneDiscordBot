import discord, { DMChannel, NewsChannel, TextChannel } from "discord.js";

const CHAT = process.env.CHAT ?? "";
const OFFICIAL = process.env.OFFICIAL ?? "";
const BILLING = process.env.BILLING ?? "";
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN ?? "";
const client = new discord.Client();

if (DISCORD_BOT_TOKEN === undefined) {
  console.log("DISCORD_BOT_TOKENが設定されていません。");
  process.exit(0);
}

client.on("ready", async () => {
  await client.user?.setPresence({
    status: "online",
  });
});

await client.login(DISCORD_BOT_TOKEN);

export default client;

export const chatChannel = (await client.channels.fetch(CHAT)) as
  | TextChannel
  | DMChannel
  | NewsChannel;

export const officialChannel = (await client.channels.fetch(OFFICIAL)) as
  | TextChannel
  | DMChannel
  | NewsChannel;

export const billingCampaignChannel = (await client.channels.fetch(BILLING)) as
  | TextChannel
  | DMChannel
  | NewsChannel;
