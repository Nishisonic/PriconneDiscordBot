import { ActionParameter, ActionValue } from "./ActionParameter.js";
export class FearAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.chanceValues = [];
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.chanceValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail() {
        return `[${this.buildExpression(this.chanceValues)}%] の確率で${this.targetParameter.buildTargetClause()}を恐慌状態にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
    }
}
