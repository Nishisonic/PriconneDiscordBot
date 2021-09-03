import { ActionParameter, ActionValue } from "./actionParameter.js";
class Condition {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
Condition.unknown = -1;
Condition.damage = 1;
Condition.target = 2;
Condition.hit = 3;
Condition.criticalHit = 4;
class Target {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
Target.unknown = -1;
Target.target = 0;
Target.owner = 1;
export class AttackSealAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.condition = Condition.parse(this.actionDetail1);
        this.target = Target.parse(this.actionDetail3);
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail() {
        if (this.condition.value === Condition.hit) {
            return `自分がHitするたび、${this.targetParameter.buildTargetClause()}にマーク [ID: ${this.actionValue2.value}] を1スタック増やせる、効果時間 [${this.buildExpression(this.durationValues)}] 秒。この効果は最大 [${this.actionValue1.value}] までスタックする。`;
        }
        if (this.condition.value === Condition.damage &&
            this.target.value === Target.owner) {
            return `${this.targetParameter.buildTargetClause()}がダメージを与えるたび、マーク [ID: ${this.actionValue2.value}] を1スタック増やせる、効果時間 [${this.buildExpression(this.durationValues)}] 秒、この効果は最大 [${this.actionValue1.value}] までスタックする。`;
        }
        if (this.condition.value === Condition.criticalHit &&
            this.target.value === Target.owner) {
            return `${this.targetParameter.buildTargetClause()}がクリティカルダメージを与えるたび、マーク [ID: ${this.actionValue2.value}] を1スタック増やせる、効果時間 [${this.buildExpression(this.durationValues)}] 秒。この効果は最大 [${this.actionValue1.value}] までスタックする。`;
        }
        return super.localizedDetail();
    }
}
