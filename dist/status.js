import { master } from "./db.js";
import { getCharaStatus } from "./action/parameter/chara.js";
const SUPPLEMENT = "*上記のステータスは☆max、装備&専用装備フル強化、ストーリーステータス&Exスキル&Rank Bonusを含めての値になります。";
export async function status(message) {
    if (message.content.match(/^\.status .+$/)) {
        const name = message.content
            .replace(/^\.status (.+)$/, "$1")
            .replace(/\(/g, "（")
            .replace(/\)/g, "）");
        const units = (await master.allAsync(`
        SELECT *
        FROM unit_data
        WHERE unit_name = '${name}'
        AND unit_id < 400000
      `));
        if (units.length > 0) {
            const unit = units[units.length - 1];
            const property = await getCharaStatus(unit.unit_id);
            await message.channel.send(`${name}\n\n**立ち位置**\n${await toSearchAreaWidthString(unit)}\n\n**ステータス**\n${property.toString()}\n\`${SUPPLEMENT}\``);
        }
        else {
            await message.channel.send(`「${name}」のキャラ情報が見つかりませんでした。`);
        }
    }
}
async function toSearchAreaWidthString(unit) {
    const searchAreaWidth = unit.search_area_width;
    const backUnit = (await master.getAsync(`
    SELECT *
    FROM unit_data
    WHERE search_area_width > ${searchAreaWidth}
    AND unit_id < 400000
    ORDER BY search_area_width;
  `));
    const frontUnit = (await master.getAsync(`
    SELECT *
    FROM unit_data
    WHERE search_area_width < ${searchAreaWidth}
    AND unit_id < 400000
    ORDER BY search_area_width DESC;
  `));
    return `\`(後)\` ${backUnit === null || backUnit === void 0 ? void 0 : backUnit.unit_name}\`(${backUnit === null || backUnit === void 0 ? void 0 : backUnit.search_area_width})\` → ${unit.unit_name}\`(${searchAreaWidth})\` → ${frontUnit === null || frontUnit === void 0 ? void 0 : frontUnit.unit_name}\`(${frontUnit === null || frontUnit === void 0 ? void 0 : frontUnit.search_area_width})\` \`(前)\``;
}
