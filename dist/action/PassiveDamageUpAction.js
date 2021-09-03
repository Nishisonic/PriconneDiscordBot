import { ActionParameter, ActionValue } from "./actionParameter.js";
class eCountType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case eCountType.Debuff:
                return "デバフ効果";
            default:
                return "不明";
        }
    }
}
eCountType.Unknown = -1;
eCountType.Debuff = 1;
class eEffectType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case eEffectType.Add:
                return "+";
            case eEffectType.Subtract:
                return "-";
            default:
                return "不明";
        }
    }
}
eEffectType.Unknown = -1;
eEffectType.Add = 1;
eEffectType.Subtract = 2;
export class PassiveDamageUpAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.debuffDamageUpLimitValue = this.actionValue2.value;
        this.debuffDamageUpValue = this.actionValue1.value;
        this.debuffDamageUpTimer = this.actionValue3.value;
        this.countType = eCountType.parse(this.actionDetail1);
        this.effectType = eEffectType.parse(this.actionDetail2);
        this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail() {
        switch (this.countType.value) {
            case eCountType.Debuff:
                return `パッシブ：${this.targetParameter.buildTargetClause()}が与えられるダメージを [1 ${this.effectType.description()} ${this.debuffDamageUpValue} \* ${this.targetParameter.buildTargetClause()}の${this.countType.description()}数] 倍にする（最大${this.debuffDamageUpLimitValue}倍）、効果時間 [${this.buildExpression()}] 秒。`;
            default:
                return super.localizedDetail();
        }
    }
}
