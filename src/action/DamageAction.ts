import {
  ActionParameter,
  ActionValue,
  ClassModifier,
  CriticalModifier,
} from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";
import { SkillAction } from "../master.js";

export class DamageAction extends ActionParameter {
  damageClass: ClassModifier;
  criticalModifier: CriticalModifier;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.damageClass = ClassModifier.parse(skillAction.action_detail_1);
    this.criticalModifier = CriticalModifier.parse(skillAction.action_value_5);

    switch (skillAction.action_detail_1) {
      case ClassModifier.magical:
        this.actionValues.push(
          new ActionValue(this.actionValue1, this.actionValue2, null)
        );
        this.actionValues.push(
          new ActionValue(
            this.actionValue3,
            this.actionValue4,
            PropertyKey.parse(PropertyKey.magicStr)
          )
        );
        break;
      case ClassModifier.physical:
      case ClassModifier.inevitablePhysical:
        this.actionValues.push(
          new ActionValue(this.actionValue1, this.actionValue2, null)
        );
        this.actionValues.push(
          new ActionValue(
            this.actionValue3,
            this.actionValue4,
            PropertyKey.parse(PropertyKey.atk)
          )
        );
        break;
      default:
    }
  }

  localizedDetail() {
    let sentence = "";

    switch (this.criticalModifier.value) {
      case CriticalModifier.normal:
        sentence += `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] の${this.damageClass.description()}ダメージを与える。`;
        break;
      case CriticalModifier.critical:
        sentence += `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] の${this.damageClass.description()}ダメージを与える。このアクションの ${
          this.actionValue5.value
        }hitは必ずクリティカルする。`;
        break;
    }
    if (this.actionValue6.value !== 0) {
      sentence += `クリティカルした場合、ダメージ倍率が [${
        2 * this.actionValue6.value
      }] 倍になる。`;
    }
    return sentence;
  }
}
