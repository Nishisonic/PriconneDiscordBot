import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  PercentModifier,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class HealDownAction extends ActionParameter {
  percentModifier: PercentModifier;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.percentModifier = PercentModifier.parse(this.actionValue1.value);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    return `${this.targetParameter.buildTargetClause()}の回復量は本来の [${this.buildExpression(
      expressionMode,
      RoundingMode.UNNECESSARY,
      property
    )}] 倍にする、効果時間 [${this.buildExpression(
      expressionMode,
      this.durationValues,
      RoundingMode.UNNECESSARY,
      property
    )}] 秒。`;
  }
}
