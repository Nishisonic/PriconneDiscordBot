import { Ailment } from "../data/ailment.js";
import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class DamageByBehaviourAction extends ActionParameter {
  ailment: Ailment;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.ailment = new Ailment(this.rawActionType, this.actionDetail1);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    return `${this.targetParameter.buildTargetClause()}が行動する度、[${this.buildExpression(
      expressionMode,
      property
    )}] の${this.ailment.description()}ダメージを与える、効果時間 [${this.buildExpression(
      expressionMode,
      this.durationValues,
      RoundingMode.HALF_UP,
      property
    )}] 秒。`;
  }
}
