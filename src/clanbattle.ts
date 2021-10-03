import { chatChannel } from "./discordClient.js";
import getMonth from "date-fns/getMonth/index.js";
import endOfMonth from "date-fns/endOfMonth/index.js";
import getDate from "date-fns/getDate/index.js";
import { isLastDayOfMonth } from "date-fns";

export async function clanBattleRemind() {
  const now = new Date();
  const month = getMonth(now);
  const day = getDate(now);
  const last = getDate(endOfMonth(now));
  const isClanBattlePeriod = last - 6 <= day && day <= last - 1;

  if (isClanBattlePeriod) {
    return await chatChannel.send(
      `${month}月クランバトル【${day}】日目が始まりました`
    );
  }
  return null;
}

export async function endClanBattleRemind() {
  const now = new Date();
  const month = getMonth(now);

  if (isLastDayOfMonth(now)) {
    return await chatChannel.send(
      `${month}月クランバトルが終了しました\n今月もお疲れ様でした`
    );
  }
  return null;
}
