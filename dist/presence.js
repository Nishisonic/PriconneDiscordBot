import client from "./discordClient.js";
import cron from "node-cron";
import format from "date-fns/format/index.js";
const presenceProcess = async () => {
    var _a;
    const date = Date.now();
    return (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        activity: {
            name: `${format(date, "HH:mm")} JST`,
            type: "LISTENING",
        },
    });
};
cron.schedule("* * * * *", async () => await presenceProcess());
