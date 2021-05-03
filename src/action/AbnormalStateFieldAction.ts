import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

export class AbnormalStateFieldAction extends ActionParameter {
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.durationValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}の位置で半径 [${
      this.actionValue3.value
    }] のフィールドを展開し、[アクション${
      this.actionDetail1 % 10
    }] を継続的に放る、効果時間 [${this.buildExpression(
      this.durationValues
    )}] 秒。`;
  }
}
