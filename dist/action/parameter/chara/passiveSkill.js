import { master } from "../../../db.js";
import { findSkillActionAsync } from "../../../skill.js";
import { PropertyKey } from "../../propertyKey.js";
import { Property } from "../property.js";
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
    return toProperty(skillAction, level);
}
function toProperty(skillAction, level) {
    const propertyKey = (() => {
        switch (skillAction.action_detail_1) {
            case 1:
                return PropertyKey.parse(PropertyKey.hp);
            case 2:
                return PropertyKey.parse(PropertyKey.atk);
            case 3:
                return PropertyKey.parse(PropertyKey.def);
            case 4:
                return PropertyKey.parse(PropertyKey.magicStr);
            case 5:
                return PropertyKey.parse(PropertyKey.magicDef);
            default:
                return PropertyKey.parse(PropertyKey.unknown);
        }
    })();
    return Property.getPropertyWithKeyAndValue(undefined, propertyKey, skillAction.action_value_2 + skillAction.action_value_3 * level);
}
