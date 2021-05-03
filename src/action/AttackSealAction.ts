import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

class Condition {
  static readonly unknown = -1;
  static readonly damage = 1;
  static readonly target = 2;
  static readonly hit = 3;
  static readonly criticalHit = 4;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

class Target {
  static readonly unknown = -1;
  static readonly target = 0;
  static readonly owner = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class AttackSealAction extends ActionParameter {
  condition: Condition;
  target: Target;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.condition = Condition.parse(this.actionDetail1);
    this.target = Target.parse(this.actionDetail3);
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail() {
    if (this.condition.value === Condition.hit) {
      return `自分がHitするたび、${this.targetParameter.buildTargetClause()}にマーク [ID: ${
        this.actionValue2
      }] を1スタック増やせる、効果時間 [${this.buildExpression(
        this.durationValues
      )}] 秒。この効果は最大 [${this.actionValue1}] までスタックする。`;
    }
    if (
      this.condition.value === Condition.damage &&
      this.target.value === Target.owner
    ) {
      return `${this.targetParameter.buildTargetClause()}がダメージを与えるたび、マーク [ID: ${
        this.actionValue2
      }] を1スタック増やせる、効果時間 [${this.buildExpression(
        this.durationValues
      )}] 秒、この効果は最大 [${this.actionValue1}] までスタックする。`;
    }
    if (
      this.condition.value == Condition.criticalHit &&
      this.target.value == Target.owner
    ) {
      return `${this.targetParameter.buildTargetClause()}がクリティカルダメージを与えるたび、マーク [ID: ${
        this.actionValue2
      }] を1スタック増やせる、効果時間 [${this.buildExpression(
        this.durationValues
      )}] 秒。この効果は最大 [${this.actionValue1}] までスタックする。`;
    }
    return super.localizedDetail();
  }
}
