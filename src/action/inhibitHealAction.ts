import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class InhibitHealAction extends ActionParameter {
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.durationValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    return `${this.targetParameter.buildTargetClause()}が回復を受けた時、それを無効にし、[${
      this.actionValue1.value
    } \* 回復量] 分のダメージを与える、効果時間 [${this.buildExpression(
      expressionMode,
      this.durationValues,
      RoundingMode.UNNECESSARY,
      property
    )}] 秒。この効果はフィールド効果の場合、効果時間は無限大。`;
  }
}
