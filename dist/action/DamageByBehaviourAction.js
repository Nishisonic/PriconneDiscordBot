import { Ailment } from "../data/ailment.js";
import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
export class DamageByBehaviourAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.ailment = new Ailment(this.rawActionType, this.actionDetail1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}が行動する度、[${this.buildExpression(expressionMode, property)}] の${this.ailment.description()}ダメージを与える、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.HALF_UP, property)}] 秒。`;
    }
}
