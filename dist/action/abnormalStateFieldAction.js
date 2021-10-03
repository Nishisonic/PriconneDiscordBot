import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
export class AbnormalStateFieldAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}の位置で半径 [${this.actionValue3.value}] のフィールドを展開し、[アクション${this.actionDetail1 % 10}] を継続的に放る、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。`;
    }
}
