import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";
import { TargetType } from "./parameter/targetType.js";

export class ChangeEnergyAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    switch (this.actionDetail1) {
      case 1:
        if (this.targetParameter.targetType.value === TargetType.self) {
          return `${this.targetParameter.buildTargetClause()}のTPを [${this.buildExpression()}] 回復させる。（この値は回復を受けるキャラのTP上昇に影響される）`;
        }
        return `${this.targetParameter.buildTargetClause()}のTPを [${this.buildExpression()}] 回復させる。（この値は回復を受けるキャラのTP上昇に影響される）`;
      default:
        return `${this.targetParameter.buildTargetClause()}のTPを [${this.buildExpression()}] 失わせる。`;
    }
  }
}
