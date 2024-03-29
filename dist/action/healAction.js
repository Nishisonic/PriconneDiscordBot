import { ActionParameter, ActionValue, ClassModifier, PercentModifier, } from "./actionParameter.js";
import { PropertyKey } from "./propertyKey.js";
export class HealAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.healClass = ClassModifier.parse(skillAction.action_detail_1);
        this.percentModifier = PercentModifier.parse(Math.floor(skillAction.action_value_1));
        switch (this.healClass.value) {
            case ClassModifier.magical:
                this.actionValues.push(new ActionValue(this.actionValue4, this.actionValue5, PropertyKey.parse(PropertyKey.magicStr)));
                this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
                break;
            case ClassModifier.physical:
                this.actionValues.push(new ActionValue(this.actionValue4, this.actionValue5, PropertyKey.parse(PropertyKey.atk)));
                this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
                break;
        }
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}のHPを [${this.buildExpression(expressionMode, property)}${this.percentModifier.description()}] 回復させる。（この値はキャラの回復量上昇値に影響される）`;
    }
}
