import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

export class ToadAction extends ActionParameter {
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.durationValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}を [${this.buildExpression(
      this.durationValues
    )}] 秒変身させる。`;
  }
}
