import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

class AweType {
  static readonly unknown = -1;
  static readonly ubOnly = 0;
  static readonly ubAndSkill = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class AweAction extends ActionParameter {
  aweType: AweType;
  durationValues: ActionValue[] = [];
  percentValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
    this.percentValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.aweType = AweType.parse(this.actionDetail1);
  }

  localizedDetail() {
    switch (this.aweType.value) {
      case AweType.ubAndSkill:
        return `${this.targetParameter.buildTargetClause()}のユニオンバーストかスキルが任意のターゲットにダメージか直接回復を与えるたび、その値を [${this.buildExpression(
          this.percentValues
        )}%] ダウンさせる、効果時間 [${this.buildExpression(
          this.durationValues
        )}] 秒。`;
      case AweType.ubOnly:
        return `${this.targetParameter.buildTargetClause()}のユニオンバーストが任意のターゲットにダメージか直接回復を与えるたび、その値を [${this.buildExpression(
          this.percentValues
        )}%] ダウンさせる、効果時間 [${this.buildExpression(
          this.durationValues
        )}] 秒。`;
      default:
        return super.localizedDetail();
    }
  }
}
