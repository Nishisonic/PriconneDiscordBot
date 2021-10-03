import { chatChannel } from "./discordClient.js";

export async function arenaRemind(minutes: number = 0) {
  return await chatChannel.send(
    minutes > 0
      ? `アリーナ締切まで【${minutes}】分前`
      : "-----アリーナ締切-----"
  );
}
