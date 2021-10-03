import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
class ePassiveTiming {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case ePassiveTiming.Buff:
                return "バフ";
            case ePassiveTiming.Damage:
                return "ダメージ";
            default:
                return "不明";
        }
    }
}
ePassiveTiming.Unknown = -1;
ePassiveTiming.Buff = 1;
ePassiveTiming.Damage = 2;
class eSealTarget {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case eSealTarget.Self:
                return "自分";
            default:
                return "不明";
        }
    }
}
eSealTarget.Unknown = -1;
eSealTarget.Self = 0;
export class PassiveSealAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.sealDuration = [];
        this.lifeTime = [];
        this.sealNumLimit = this.actionValue1.value;
        this.sealDuration.push(new ActionValue(this.actionValue3, this.actionValue4, null));
        this.lifeTime.push(new ActionValue(this.actionValue5, this.actionValue6, null));
        this.passiveTiming = ePassiveTiming.parse(this.actionDetail1);
        this.sealTarget = eSealTarget.parse(this.actionDetail3);
    }
    localizedDetail(expressionMode, property) {
        return `パッシブ：${this.targetParameter.buildTargetClause()}が${this.passiveTiming.description()}を受けるたび、${this.sealTarget.description()}にマーク [ID: ${this.actionValue2.value}] を [${this.actionDetail2}] 追加する、マークの継続時間 [${this.buildExpression(expressionMode, this.sealDuration, RoundingMode.UNNECESSARY, property)}] 秒、最大 [${this.actionValue1.value}] までスタックする。このパッシブ効果は [${this.buildExpression(expressionMode, this.lifeTime, RoundingMode.UNNECESSARY, property)}] 秒継続する。`;
    }
}
