import { master } from "../../../db.js";
import { Property } from "../property.js";
export async function getUnlockRarity6PropertyAsync(unitId) {
    const unlockRarity6List = (await master.allAsync(`
    SELECT *
    FROM unlock_rarity_6
    WHERE unit_id = '${unitId}'
  `));
    if (!unlockRarity6List) {
        return new Property();
    }
    return unlockRarity6List
        .map((property) => new Property(property))
        .reduce((previous, value) => previous.plusEqual(value), new Property());
}
