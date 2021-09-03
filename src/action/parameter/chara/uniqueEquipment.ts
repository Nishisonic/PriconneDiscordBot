import { master } from "../../../db.js";
import {
  UnitUniqueEquip,
  UniqueEquipmentData,
  UniqueEquipmentEnhanceRate,
} from "../../../master";
import { Property } from "../property.js";

export async function getUniqueEquipmentPropertyAsync(
  unitId: number,
  uniqueEquipmentEnhanceLevel: number
) {
  const unitUniqueEquip = (await master.getAsync(`
    SELECT *
    FROM unit_unique_equip
    WHERE unit_id = '${unitId}'
  `)) as Readonly<UnitUniqueEquip | null>;

  if (!unitUniqueEquip) {
    return new Property();
  }

  const { equip_id } = unitUniqueEquip;

  return (await getUniqueEquipmentDataProperty(equip_id))
    .plusEqual(
      (await getUniqueEquipmentEnhanceRateProperty(equip_id)).multiplyEqual(
        uniqueEquipmentEnhanceLevel - 1
      )
    )
    .getCeiled();
}

async function getUniqueEquipmentDataProperty(equipmentId: number) {
  const {
    hp,
    atk,
    magic_str,
    def,
    magic_def,
    physical_critical,
    magic_critical,
    wave_hp_recovery,
    wave_energy_recovery,
    dodge,
    physical_penetrate,
    magic_penetrate,
    life_steal,
    hp_recovery_rate,
    energy_recovery_rate,
    energy_reduce_rate,
    accuracy,
  } = (await master.getAsync(`
    SELECT *
    FROM unique_equipment_data
    WHERE equipment_id = '${equipmentId}'
  `)) as Readonly<UniqueEquipmentData>;

  return new Property(
    hp,
    atk,
    magic_str,
    def,
    magic_def,
    physical_critical,
    magic_critical,
    wave_hp_recovery,
    wave_energy_recovery,
    dodge,
    physical_penetrate,
    magic_penetrate,
    life_steal,
    hp_recovery_rate,
    energy_recovery_rate,
    energy_reduce_rate,
    accuracy
  );
}

async function getUniqueEquipmentEnhanceRateProperty(equipmentId: number) {
  const {
    hp,
    atk,
    magic_str,
    def,
    magic_def,
    physical_critical,
    magic_critical,
    wave_hp_recovery,
    wave_energy_recovery,
    dodge,
    physical_penetrate,
    magic_penetrate,
    life_steal,
    hp_recovery_rate,
    energy_recovery_rate,
    energy_reduce_rate,
    accuracy,
  } = (await master.getAsync(`
    SELECT *
    FROM unique_equipment_enhance_rate
    WHERE equipment_id = '${equipmentId}'
  `)) as Readonly<UniqueEquipmentEnhanceRate>;

  return new Property(
    hp,
    atk,
    magic_str,
    def,
    magic_def,
    physical_critical,
    magic_critical,
    wave_hp_recovery,
    wave_energy_recovery,
    dodge,
    physical_penetrate,
    magic_penetrate,
    life_steal,
    hp_recovery_rate,
    energy_recovery_rate,
    energy_reduce_rate,
    accuracy
  );
}
