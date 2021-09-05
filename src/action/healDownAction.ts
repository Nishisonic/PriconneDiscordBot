import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  PercentModifier,
} from "./actionParameter.js";

export class HealDownAction extends ActionParameter {
  percentModifier: PercentModifier;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.percentModifier = PercentModifier.parse(this.actionValue1.value);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}の回復量は本来の [${this.buildExpression()}] 倍にする、効果時間 [${this.buildExpression(
      this.durationValues
    )}] 秒。`;
  }
}