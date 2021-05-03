import { ActionParameter, ActionValue } from "./ActionParameter.js";
export class ToadAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}を [${this.buildExpression(this.durationValues)}] 秒変身させる。`;
    }
}
