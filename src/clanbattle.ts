import { chatChannel } from "./discordClient.js";
import getMonth from "date-fns/getMonth/index.js";
import endOfMonth from "date-fns/endOfMonth/index.js";
import { differenceInDays, isLastDayOfMonth, isWithinInterval, subDays } from "date-fns";

export async function clanBattleRemind() {
  const now = new Date();
  const month = getMonth(now) + 1;
  const last = endOfMonth(now);
  const isClanBattlePeriod = isWithinInterval(now, {
    start: subDays(last, 6),
    end: subDays(last, 1),
  });
  if (isClanBattlePeriod) {
    return await chatChannel.send(
      `${month}月クランバトル【${(6 + differenceInDays(now, last))}】日目が始まりました`
    );
  }
  return null;
}

export async function endClanBattleRemind() {
  const now = new Date();
  const month = getMonth(now) + 1;
  if (isLastDayOfMonth(now)) {
    return await chatChannel.send(
      `${month}月クランバトルが終了しました\n今月もお疲れ様でした`
    );
  }
  return null;
}
