import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
class ConditionType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
ConditionType.unknown = 0;
ConditionType.damage = 1;
ConditionType.target = 2;
ConditionType.hit = 3;
ConditionType.critical = 4;
export class ActionByHitCountAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.conditionType = ConditionType.parse(this.actionDetail1);
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail(expressionMode, property) {
        const limitation = this.actionValue5.value > 0
            ? `（上限は ${this.actionValue5.value} 回）`
            : "";
        switch (this.conditionType.value) {
            case ConditionType.hit:
                return `[${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒内、[${this.actionValue1.value}] Hitするたびに [アクション${this.actionDetail2 % 10}] ${limitation}を使う。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
