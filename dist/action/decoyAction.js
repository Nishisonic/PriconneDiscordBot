import { ActionParameter, ActionValue } from "./actionParameter.js";
export class DecoyAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}に挑発状態、効果時間 [${this.buildExpression(expressionMode, property)}] 秒。`;
    }
}
