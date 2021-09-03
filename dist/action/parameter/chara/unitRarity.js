import { master } from "../../../db.js";
import { Property } from "../property.js";
export async function getUnitRarityPropertyAsync(unitId, rarity, rank, level) {
    const unitRarityBonus = (await master.getAsync(`
    SELECT *
    FROM unit_rarity
    WHERE unit_id = '${unitId}'
    AND rarity = '${rarity}'
  `));
    const { hp_growth, atk_growth, magic_str_growth, def_growth, magic_def_growth, physical_critical_growth, magic_critical_growth, wave_hp_recovery_growth, wave_energy_recovery_growth, dodge, physical_penetrate_growth, magic_penetrate_growth, life_steal_growth, hp_recovery_rate_growth, energy_recovery_rate_growth, energy_reduce_rate_growth, accuracy_growth, } = unitRarityBonus;
    return new Property(hp_growth, atk_growth, magic_str_growth, def_growth, magic_def_growth, physical_critical_growth, magic_critical_growth, wave_hp_recovery_growth, wave_energy_recovery_growth, dodge, physical_penetrate_growth, magic_penetrate_growth, life_steal_growth, hp_recovery_rate_growth, energy_recovery_rate_growth, energy_reduce_rate_growth, accuracy_growth)
        .multiplyEqual(level + rank)
        .plusEqual(new Property(unitRarityBonus));
}
