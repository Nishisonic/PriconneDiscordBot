import { master } from "../../../db.js";
import { Property } from '../property.js';
export async function getPromotionBonusPropertyAsync(unitId, rank) {
    const promotionBonus = (await master.getAsync(`
    SELECT *
    FROM promotion_bonus
    WHERE unit_id = '${unitId}'
    AND promotion_level = '${rank}'
  `));
    if (!promotionBonus) {
        return new Property();
    }
    return new Property(promotionBonus);
}
