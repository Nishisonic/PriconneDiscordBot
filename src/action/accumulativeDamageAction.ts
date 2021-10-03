import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue, Expression, RoundingMode } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class AccumulativeDamageAction extends ActionParameter {
  stackValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
    this.stackValues.push(
      new ActionValue(this.actionValue4, this.actionValue5, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    return `現在の目標に攻撃するたび、ダメージ量が [${this.buildExpression(
      expressionMode,
      property
    )}] 追加する、この効果は [${this.buildExpression(
      expressionMode,
      this.stackValues,
      RoundingMode.FLOOR,
      property
    )}] 回まで累計する。`;
  }
}
