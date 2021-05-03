import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

export class AccumulativeDamageAction extends ActionParameter {
  stackValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
    this.stackValues.push(
      new ActionValue(this.actionValue4, this.actionValue5, null)
    );
  }

  localizedDetail() {
    return `現在のターゲットに攻撃するたび、ダメージ量が [${this.buildExpression()}] 追加する、この効果は [${this.buildExpression(
      this.stackValues
    )}] 回まで累計する。`;
  }
}
