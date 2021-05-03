import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

class NoDamageType {
  static readonly unknown = 0;
  static readonly noDamage = 1;
  static readonly dodgePhysics = 2;
  static readonly dodgeAll = 3;
  static readonly abnormal = 4;
  static readonly debuff = 5;
  static readonly Break = 6;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class NoDamageAction extends ActionParameter {
  noDamageType: NoDamageType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.noDamageType = NoDamageType.parse(this.actionDetail1);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    switch (this.noDamageType.value) {
      case NoDamageType.noDamage:
        return `${this.targetParameter.buildTargetClause()}に無敵状態、効果時間 [${this.buildExpression()}] 秒。`;
      case NoDamageType.dodgePhysics:
        return `${this.targetParameter.buildTargetClause()}に物理攻撃無効状態、効果時間 [${this.buildExpression()}] 秒。`;
      case NoDamageType.Break:
        return `${this.targetParameter.buildTargetClause()}にBreak免疫状態、効果時間 [${this.buildExpression()}] 秒。`;
      default:
        return super.localizedDetail();
    }
  }
}
