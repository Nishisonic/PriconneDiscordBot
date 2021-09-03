import { master } from "../../../db.js";
import { findSkillActionAsync } from "../../../skill.js";
import { PassiveAction } from "../../passiveAction.js";
export async function getPassiveSkillPropertyAsync(unitId, rarity, level) {
    const { ex_skill_1, ex_skill_evolution_1 } = (await master.getAsync(`
    SELECT *
    FROM unit_skill_data
    WHERE unit_id = '${unitId}'
  `));
    const { action_1 } = (await master.getAsync(`
    SELECT *
    FROM skill_data
    WHERE skill_id = '${rarity >= 5 ? ex_skill_evolution_1 : ex_skill_1}'
  `));
    const skillAction = await findSkillActionAsync(action_1);
    return new PassiveAction(skillAction).propertyItem(level);
}
