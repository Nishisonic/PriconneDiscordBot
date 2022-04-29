import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue, Expression } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class CancelType {
  static readonly None = 0;
  static readonly Damaged = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class SpyAction extends ActionParameter {
  cancelType: CancelType;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.cancelType = CancelType.parse(this.actionDetail2);
    this.durationValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.cancelType.value) {
      case CancelType.Damaged:
        return `${this.targetParameter.buildTargetClause()}を隠密状態にする、効果時間 [${this.buildExpression(
          expressionMode,
          this.actionValues,
          null,
          property
        )}] 秒。この効果はダメージを受けた時に解除される。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
