import { Ailment } from "../data/Ailment.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";
export class DamageByBehaviourAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.ailment = new Ailment(this.rawActionType, this.actionDetail1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}が行動する度、[${this.buildExpression()}] の${this.ailment.description()}ダメージを与える、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
    }
}
