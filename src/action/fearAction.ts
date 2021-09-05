import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

export class FearAction extends ActionParameter {
  durationValues: ActionValue[] = [];
  chanceValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.durationValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.chanceValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail() {
    return `[${this.buildExpression(
      this.chanceValues
    )}%] の確率で${this.targetParameter.buildTargetClause()}を恐慌状態にする、効果時間 [${this.buildExpression(
      this.durationValues
    )}] 秒。`;
  }
}
