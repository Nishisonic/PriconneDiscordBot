var _a;
import discord from "discord.js";
const DISCORD_BOT_TOKEN = (_a = process.env.DISCORD_BOT_TOKEN) !== null && _a !== void 0 ? _a : "";
const client = new discord.Client();
if (DISCORD_BOT_TOKEN === undefined) {
    console.log("DISCORD_BOT_TOKENが設定されていません。");
    process.exit(0);
}
client.on("ready", async () => {
    var _a;
    await ((_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: "online",
    }));
});
await client.login(DISCORD_BOT_TOKEN);
export default client;
