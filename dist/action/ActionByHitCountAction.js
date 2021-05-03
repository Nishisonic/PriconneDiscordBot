import { ActionParameter, ActionValue } from "./ActionParameter.js";
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
    localizedDetail() {
        const limitation = this.actionValue5 > 0 ? `（上限は ${this.actionValue5} 回）` : "";
        switch (this.conditionType.value) {
            case ConditionType.hit:
                return `[${this.buildExpression(this.durationValues)}] 秒内、[${this.actionValue1}] Hitするたびに [アクション${this.actionDetail2 % 10}] ${limitation}を使う。`;
            default:
                return super.localizedDetail();
        }
    }
}
