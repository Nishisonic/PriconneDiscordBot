import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  ClassModifier,
  PercentModifier,
} from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";

export class HealAction extends ActionParameter {
  healClass: ClassModifier;
  percentModifier: PercentModifier;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.healClass = ClassModifier.parse(skillAction.action_detail_1);
    this.percentModifier = PercentModifier.parse(
      Math.floor(skillAction.action_value_1)
    );
    switch (this.healClass.value) {
      case ClassModifier.magical:
        this.actionValues.push(
          new ActionValue(
            this.actionValue4,
            this.actionValue5,
            PropertyKey.parse(PropertyKey.magicStr)
          )
        );
        this.actionValues.push(
          new ActionValue(this.actionValue2, this.actionValue3, null)
        );
        break;
      case ClassModifier.physical:
        this.actionValues.push(
          new ActionValue(
            this.actionValue4,
            this.actionValue5,
            PropertyKey.parse(PropertyKey.atk)
          )
        );
        this.actionValues.push(
          new ActionValue(this.actionValue2, this.actionValue3, null)
        );
        break;
    }
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}のHPを [${this.buildExpression()}${this.percentModifier.description()}] 回復させる。（この値はキャラの回復量上昇値に影響される）`;
  }
}
