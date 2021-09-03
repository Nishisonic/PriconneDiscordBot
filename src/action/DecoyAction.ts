import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

export class DecoyAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}に挑発状態、効果時間 [${this.buildExpression()}] 秒。`;
  }
}
