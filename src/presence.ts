import client from "./discordClient.js";
import format from "date-fns/format/index.js";

export async function presenceProcess() {
  const date = Date.now();

  return client.user?.setPresence({
    activity: {
      name: `${format(date, "HH:mm")} JST`,
      type: "LISTENING",
    },
  });
}
