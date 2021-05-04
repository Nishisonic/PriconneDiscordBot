var _a;
import client from "./discordClient.js";
const CHAT = (_a = process.env.CHAT) !== null && _a !== void 0 ? _a : "";
export async function arenaRemind(minutes = 0) {
    const channel = (await client.channels.fetch(CHAT));
    return await channel.send(minutes > 0
        ? `アリーナ締切まで【${minutes}】分前`
        : "-----アリーナ締切-----");
}
;
