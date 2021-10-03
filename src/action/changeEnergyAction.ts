import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";
import { TargetType } from "./parameter/targetType.js";

export class ChangeEnergyAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.actionDetail1) {
      case 1:
        if (this.targetParameter.targetType.value === TargetType.self) {
          return `${this.targetParameter.buildTargetClause()}のTPを [${this.buildExpression(
            expressionMode,
            null,
            RoundingMode.CEILING,
            property,
            false
          )}] 回復させる。（この値は回復を受けるキャラのTP上昇に影響される）`;
        }
        return `${this.targetParameter.buildTargetClause()}のTPを [${this.buildExpression(
          expressionMode,
          RoundingMode.CEILING,
          property
        )}] 回復させる。（この値は回復を受けるキャラのTP上昇に影響される）`;
      default:
        return `${this.targetParameter.buildTargetClause()}のTPを [${this.buildExpression(
          expressionMode,
          RoundingMode.CEILING,
          property
        )}] 失わせる。`;
    }
  }
}
