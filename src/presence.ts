import client from "./discordClient.js";
import cron from "node-cron";
import format from "date-fns/format/index.js";

const presenceProcess = async () => {
  const date = Date.now();

  return client.user?.setPresence({
    activity: {
      name: `${format(date, "HH:mm")} JST`,
      type: "LISTENING",
    },
  });
};

cron.schedule("* * * * *", async () => await presenceProcess());
