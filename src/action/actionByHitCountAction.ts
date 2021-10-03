import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class ConditionType {
  static readonly unknown = 0;
  static readonly damage = 1;
  static readonly target = 2;
  static readonly hit = 3;
  static readonly critical = 4;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class ActionByHitCountAction extends ActionParameter {
  conditionType: ConditionType;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.conditionType = ConditionType.parse(this.actionDetail1);
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }
  localizedDetail(expressionMode: Expression, property: Property) {
    const limitation =
      this.actionValue5.value > 0
        ? `（上限は ${this.actionValue5.value} 回）`
        : "";

    switch (this.conditionType.value) {
      case ConditionType.hit:
        return `[${this.buildExpression(
          expressionMode,
          this.durationValues,
          RoundingMode.UNNECESSARY,
          property
        )}] 秒内、[${this.actionValue1.value}] Hitするたびに [アクション${
          this.actionDetail2 % 10
        }] ${limitation}を使う。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
