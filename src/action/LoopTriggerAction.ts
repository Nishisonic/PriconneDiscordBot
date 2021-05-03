import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

class TriggerType {
  static readonly unknown = 0;
  static readonly dodge = 1;
  static readonly damaged = 2;
  static readonly hp = 3;
  static readonly dead = 4;
  static readonly criticalDamaged = 5;
  static readonly getCriticalDamagedWithSummon = 6;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class LoopTriggerAction extends ActionParameter {
  triggerType: TriggerType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.triggerType = TriggerType.parse(this.actionDetail1);
  }

  localizedDetail() {
    switch (this.triggerType.value) {
      case TriggerType.damaged:
        return `条件分岐：[${
          this.actionValue4
        }] 秒内ダメージを受けた場合、[${this.buildExpression()}%] の確率で [アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      default:
        return super.localizedDetail();
    }
  }
}
