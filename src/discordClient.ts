import discord from "discord.js";

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
