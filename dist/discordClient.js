var _a, _b, _c, _d;
import discord from "discord.js";
const CHAT = (_a = process.env.CHAT) !== null && _a !== void 0 ? _a : "";
const OFFICIAL = (_b = process.env.OFFICIAL) !== null && _b !== void 0 ? _b : "";
const BILLING = (_c = process.env.BILLING) !== null && _c !== void 0 ? _c : "";
const DISCORD_BOT_TOKEN = (_d = process.env.DISCORD_BOT_TOKEN) !== null && _d !== void 0 ? _d : "";
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
export const chatChannel = (await client.channels.fetch(CHAT));
export const officialChannel = (await client.channels.fetch(OFFICIAL));
export const billingCampaignChannel = (await client.channels.fetch(BILLING));
