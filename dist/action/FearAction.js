import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
export class FearAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.chanceValues = [];
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.chanceValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail(expressionMode, property) {
        return `[${this.buildExpression(expressionMode, this.chanceValues, RoundingMode.UNNECESSARY, property)}%] の確率で${this.targetParameter.buildTargetClause()}を恐慌状態にする、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。`;
    }
}
