import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
export class ToadAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}を [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒変身させる。`;
    }
}
