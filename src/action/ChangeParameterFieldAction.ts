import { SkillAction } from "../master.js";
import { ActionValue, PercentModifier } from "./ActionParameter.js";
import { AuraAction } from "./AuraAction.js";
import { TargetType } from "./parameter/TargetType.js";

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

  localizedDetail() {
    if (this.targetParameter.targetType.value === TargetType.absolute) {
      return `半径 [${
        this.actionValue5.value
      }] のフィールドを展開し、${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${this.buildExpression()}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、効果時間 [${this.buildExpression(
        this.durationValues
      )}] 秒。`;
    }
    return `${this.targetParameter.buildTargetClause()}の位置で半径 [${
      this.actionValue5.value
    }] のフィールドを展開し、${this.auraType.description()}を [${this.buildExpression()}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、効果時間 [${this.buildExpression(
      this.durationValues
    )}] 秒。`;
  }
}
