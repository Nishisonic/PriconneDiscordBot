import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue, Expression } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class eCountType {
  static readonly Unknown = -1;
  static readonly Debuff = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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

class eEffectType {
  static readonly Unknown = -1;
  static readonly Add = 1;
  static readonly Subtract = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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

export class PassiveDamageUpAction extends ActionParameter {
  debuffDamageUpValue: number;
  debuffDamageUpLimitValue: number;
  debuffDamageUpTimer: number;
  countType: eCountType;
  effectType: eEffectType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.debuffDamageUpLimitValue = this.actionValue2.value;
    this.debuffDamageUpValue = this.actionValue1.value;
    this.debuffDamageUpTimer = this.actionValue3.value;
    this.countType = eCountType.parse(this.actionDetail1);
    this.effectType = eEffectType.parse(this.actionDetail2);
    this.actionValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.countType.value) {
      case eCountType.Debuff:
        return `パッシブ：${this.targetParameter.buildTargetClause()}が与えられるダメージを [1 ${this.effectType.description()} ${
          this.debuffDamageUpValue
        } \* ${this.targetParameter.buildTargetClause()}の${this.countType.description()}数] 倍にする（最大${
          this.debuffDamageUpLimitValue
        }倍）、効果時間 [${this.buildExpression(
          expressionMode,
          property
        )}] 秒。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
