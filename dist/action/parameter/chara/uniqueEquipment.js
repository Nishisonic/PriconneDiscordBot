import { master } from "../../../db.js";
import { Property } from "../property.js";
export async function getUniqueEquipmentPropertyAsync(unitId, uniqueEquipmentEnhanceLevel) {
    const unitUniqueEquip = (await master.getAsync(`
    SELECT *
    FROM unit_unique_equip
    WHERE unit_id = '${unitId}'
  `));
    if (!unitUniqueEquip) {
        return new Property();
    }
    const { equip_id } = unitUniqueEquip;
    return (await getUniqueEquipmentDataProperty(equip_id))
        .plusEqual((await getUniqueEquipmentEnhanceRateProperty(equip_id)).multiplyEqual(uniqueEquipmentEnhanceLevel - 1))
        .getCeiled();
}
async function getUniqueEquipmentDataProperty(equipmentId) {
    const { hp, atk, magic_str, def, magic_def, physical_critical, magic_critical, wave_hp_recovery, wave_energy_recovery, dodge, physical_penetrate, magic_penetrate, life_steal, hp_recovery_rate, energy_recovery_rate, energy_reduce_rate, accuracy, } = (await master.getAsync(`
    SELECT *
    FROM unique_equipment_data
    WHERE equipment_id = '${equipmentId}'
  `));
    return new Property(hp, atk, magic_str, def, magic_def, physical_critical, magic_critical, wave_hp_recovery, wave_energy_recovery, dodge, physical_penetrate, magic_penetrate, life_steal, hp_recovery_rate, energy_recovery_rate, energy_reduce_rate, accuracy);
}
async function getUniqueEquipmentEnhanceRateProperty(equipmentId) {
    const { hp, atk, magic_str, def, magic_def, physical_critical, magic_critical, wave_hp_recovery, wave_energy_recovery, dodge, physical_penetrate, magic_penetrate, life_steal, hp_recovery_rate, energy_recovery_rate, energy_reduce_rate, accuracy, } = (await master.getAsync(`
    SELECT *
    FROM unique_equipment_enhance_rate
    WHERE equipment_id = '${equipmentId}'
  `));
    return new Property(hp, atk, magic_str, def, magic_def, physical_critical, magic_critical, wave_hp_recovery, wave_energy_recovery, dodge, physical_penetrate, magic_penetrate, life_steal, hp_recovery_rate, energy_recovery_rate, energy_reduce_rate, accuracy);
}
