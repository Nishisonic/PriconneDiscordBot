var _a;
import getMonth from "date-fns/getMonth/index.js";
import getDate from "date-fns/getDate/index.js";
import { master } from "./db.js";
import client from "./discordClient.js";
const CHAT = (_a = process.env.CHAT) !== null && _a !== void 0 ? _a : "";
export async function birthday(message) {
    if (message.content.match(/^\.birthday .+$/)) {
        const name = message.content.replace(/^\.birthday (.+)$/, "$1");
        const unit = (await master.getAsync(`
        SELECT *
        FROM unit_profile
        WHERE unit_name = '${name}'
      `));
        if (unit) {
            await message.channel.send(`「${unit.unit_name}」の誕生日は${unit.birth_month}月${unit.birth_day}日です。`);
        }
        else {
            await message.channel.send(`「${name}」のキャラ情報が見つかりませんでした。`);
        }
    }
}
export async function birthdayProcess() {
    const date = Date.now();
    const unitNames = (await master.allAsync(`
      SELECT unit_name
      FROM (SELECT MIN(unit_id) AS unit_id FROM chara_identity GROUP BY chara_type) AS C
      LEFT JOIN unit_profile AS P
      ON C.unit_id = P.unit_id
      WHERE birth_month = '${getMonth(date) + 1}'
      AND birth_day = '${getDate(date)}'
    `));
    if (unitNames.length > 0) {
        const channel = (await client.channels.fetch(CHAT));
        return await channel.send(`【Happy Birthday♪】**${unitNames
            .map(({ unit_name }) => unit_name)
            .join(", ")}**`);
    }
    return null;
}
