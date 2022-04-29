import { ActionParameter, ActionValue } from "./actionParameter.js";
class CancelType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
CancelType.None = 0;
CancelType.Damaged = 1;
export class SpyAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.cancelType = CancelType.parse(this.actionDetail2);
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail(expressionMode, property) {
        switch (this.cancelType.value) {
            case CancelType.Damaged:
                return `${this.targetParameter.buildTargetClause()}を隠密状態にする、効果時間 [${this.buildExpression(expressionMode, this.actionValues, null, property)}] 秒。この効果はダメージを受けた時に解除される。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
