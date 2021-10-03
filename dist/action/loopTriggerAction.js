import { ActionParameter, ActionValue } from "./actionParameter.js";
class TriggerType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
TriggerType.unknown = 0;
TriggerType.dodge = 1;
TriggerType.damaged = 2;
TriggerType.hp = 3;
TriggerType.dead = 4;
TriggerType.criticalDamaged = 5;
TriggerType.getCriticalDamagedWithSummon = 6;
export class LoopTriggerAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.triggerType = TriggerType.parse(this.actionDetail1);
    }
    localizedDetail(expressionMode, property) {
        switch (this.triggerType.value) {
            case TriggerType.damaged:
                return `条件分岐：[${this.actionValue4.value}] 秒内ダメージを受けた場合、[${this.buildExpression(expressionMode, property)}%] の確率で [アクション${this.actionDetail2 % 10}] を使う。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
