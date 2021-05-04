import client from "./discordClient.js";
import format from "date-fns/format/index.js";
export async function presenceProcess() {
    var _a;
    const date = Date.now();
    return (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        activity: {
            name: `.help - ${format(date, "HH:mm")} JST`,
            type: "LISTENING",
        },
    });
}
