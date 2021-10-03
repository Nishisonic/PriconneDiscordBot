import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";
import { PropertyKey } from "./propertyKey.js";

export class EnchantLifeStealAction extends ActionParameter {
  stackValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.stackValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    return `${this.targetParameter.buildTargetClause()}の次の [${this.buildExpression(
      expressionMode,
      this.stackValues,
      RoundingMode.FLOOR,
      property
    )}] 回攻撃に [${this.buildExpression(
      expressionMode,
      property
    )}] %${PropertyKey.parse(
      PropertyKey.lifeSteal
    ).description()}効果を付与する。`;
  }
}
