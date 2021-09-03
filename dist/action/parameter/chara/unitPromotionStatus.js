import { master } from "../../../db.js";
import { Property } from "../property.js";
export async function getUnitPromotionStatusPropertyAsync(unitId, rank) {
    const unitPromotionStatus = (await master.getAsync(`
    SELECT *
    FROM unit_promotion_status
    WHERE unit_id = '${unitId}'
    AND promotion_level = '${rank}'
  `));
    return new Property(unitPromotionStatus);
}
