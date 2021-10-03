import { master } from "../../../db.js";
import { Property } from "../property.js";
export async function getCharaStoryStatusPropertyAsync(unitId) {
    const charaId = Math.floor(unitId / 100);
    const charaStoryStatuses = (await master.allAsync(`
    SELECT *
    FROM chara_story_status
    WHERE chara_id_1 = '${charaId}'
    OR chara_id_2 = '${charaId}'
    OR chara_id_3 = '${charaId}'
    OR chara_id_4 = '${charaId}'
    OR chara_id_5 = '${charaId}'
    OR chara_id_6 = '${charaId}'
    OR chara_id_7 = '${charaId}'
    OR chara_id_8 = '${charaId}'
    OR chara_id_9 = '${charaId}'
    OR chara_id_10 = '${charaId}'
  `));
    return charaStoryStatuses
        .map(({ status_type_1, status_rate_1, status_type_2, status_rate_2, status_type_3, status_rate_3, status_type_4, status_rate_4, status_type_5, status_rate_5, }) => [
        { type: status_type_1, rate: status_rate_1 },
        { type: status_type_2, rate: status_rate_2 },
        { type: status_type_3, rate: status_rate_3 },
        { type: status_type_4, rate: status_rate_4 },
        { type: status_type_5, rate: status_rate_5 },
    ]
        .map(({ type, rate }) => {
        return new Property(type === 1 ? rate : 0, type === 2 ? rate : 0, type === 3 ? rate : 0, type === 4 ? rate : 0, type === 5 ? rate : 0, type === 6 ? rate : 0, type === 7 ? rate : 0, type === 8 ? rate : 0, type === 9 ? rate : 0, type === 10 ? rate : 0, type === 11 ? rate : 0, type === 12 ? rate : 0, type === 13 ? rate : 0, type === 14 ? rate : 0, type === 15 ? rate : 0, type === 16 ? rate : 0, type === 17 ? rate : 0);
    })
        .reduce((p, v) => p.plusEqual(v), new Property()))
        .reduce((p, v) => p.plusEqual(v), new Property());
}
