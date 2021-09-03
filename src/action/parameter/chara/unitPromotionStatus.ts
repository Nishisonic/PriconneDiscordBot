import { master } from "../../../db.js";
import { UnitPromotionStatus } from "../../../master";
import { Property, RawProperty } from "../property.js";

export async function getUnitPromotionStatusPropertyAsync(
  unitId: number,
  rank: number
) {
  const unitPromotionStatus = (await master.getAsync(`
    SELECT *
    FROM unit_promotion_status
    WHERE unit_id = '${unitId}'
    AND promotion_level = '${rank}'
  `)) as Readonly<UnitPromotionStatus & RawProperty>;

  return new Property(unitPromotionStatus);
}
