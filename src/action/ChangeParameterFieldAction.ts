import { SkillAction } from "../master.js";
import {
  ActionValue,
  Expression,
  PercentModifier,
  RoundingMode,
} from "./actionParameter.js";
import { AuraAction } from "./auraAction.js";
import { Property } from "./parameter/property.js";
import { TargetType } from "./parameter/targetType.js";

export class ChangeParameterFieldAction extends AuraAction {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.length = 0;
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.durationValues.length = 0;
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
    super.percentModifier = PercentModifier.parse(this.actionDetail2);
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    if (this.targetParameter.targetType.value === TargetType.absolute) {
      return `半径 [${
        this.actionValue5.value
      }] のフィールドを展開し、${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${this.buildExpression(
        expressionMode,
        RoundingMode.UP,
        property
      )}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、効果時間 [${this.buildExpression(
        expressionMode,
        this.durationValues,
        RoundingMode.UNNECESSARY,
        property
      )}] 秒。`;
    }
    return `${this.targetParameter.buildTargetClause()}の位置で半径 [${
      this.actionValue5.value
    }] のフィールドを展開し、${this.auraType.description()}を [${this.buildExpression(
      expressionMode,
      RoundingMode.UP,
      property
    )}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、効果時間 [${this.buildExpression(
      expressionMode,
      this.durationValues,
      RoundingMode.UNNECESSARY,
      property
    )}] 秒。`;
  }
}
