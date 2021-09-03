import { master } from "../../../db.js";
import { PromotionBonus } from "../../../master";
import { Property, RawProperty } from '../property.js';

export async function getPromotionBonusPropertyAsync(
  unitId: number,
  rank: number
) {
  const promotionBonus = (await master.getAsync(`
    SELECT *
    FROM promotion_bonus
    WHERE unit_id = '${unitId}'
    AND promotion_level = '${rank}'
  `)) as Readonly<PromotionBonus & RawProperty> | null;

  if (!promotionBonus) {
    return new Property();
  }

  return new Property(promotionBonus);
}
