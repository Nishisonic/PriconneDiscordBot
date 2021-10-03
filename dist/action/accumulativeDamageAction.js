import { ActionParameter, ActionValue, RoundingMode } from "./actionParameter.js";
export class AccumulativeDamageAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.stackValues = [];
        this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
        this.stackValues.push(new ActionValue(this.actionValue4, this.actionValue5, null));
    }
    localizedDetail(expressionMode, property) {
        return `現在の目標に攻撃するたび、ダメージ量が [${this.buildExpression(expressionMode, property)}] 追加する、この効果は [${this.buildExpression(expressionMode, this.stackValues, RoundingMode.FLOOR, property)}] 回まで累計する。`;
    }
}
