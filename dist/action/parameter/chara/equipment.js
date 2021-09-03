import { master } from "../../../db.js";
import { Property } from "../property.js";
export async function getAllEquipmentPropertyAsync(unitId, rank) {
    const equipmentDataList = (await Promise.all((await getEquipmentSlots(unitId, rank)).map(async (equipSlotId) => await getEquipmentData(equipSlotId)))).filter((equip) => !!equip);
    const enhanceProperties = await Promise.all(equipmentDataList.map(async ({ equipment_id, promotion_level }) => new Property(await getEquipmentEnhanceRate(equipment_id))
        .multiplyEqual(await getMaxEquipmentEnhanceLevelAsync(promotion_level))
        .getCeiled()));
    return [...equipmentDataList, ...enhanceProperties]
        .map((property) => property instanceof Property ? property : new Property(property))
        .reduce((previous, property) => previous.plusEqual(property), new Property());
}
async function getEquipmentData(equipmentId) {
    return (await master.getAsync(`
    SELECT *
    FROM equipment_data
    WHERE equipment_id = '${equipmentId}'
  `));
}
async function getEquipmentEnhanceRate(equipmentId) {
    return (await master.getAsync(`
    SELECT *
    FROM equipment_enhance_rate
    WHERE equipment_id = '${equipmentId}'
  `));
}
async function getEquipmentSlots(unitId, rank) {
    const { equip_slot_1, equip_slot_2, equip_slot_3, equip_slot_4, equip_slot_5, equip_slot_6, } = (await master.getAsync(`
    SELECT *
    FROM unit_promotion
    WHERE unit_id = '${unitId}'
    AND promotion_level = '${rank}'
  `));
    return [
        equip_slot_1,
        equip_slot_2,
        equip_slot_3,
        equip_slot_4,
        equip_slot_5,
        equip_slot_6,
    ].filter((id) => id > 0);
}
async function getMaxEquipmentEnhanceLevelAsync(promotionLevel) {
    const equipmentEnhanceData = (await master.getAsync(`
    SELECT *
    FROM equipment_enhance_data
    WHERE promotion_level = ${promotionLevel}
    ORDER BY equipment_enhance_level DESC
  `));
    return equipmentEnhanceData.equipment_enhance_level;
}
