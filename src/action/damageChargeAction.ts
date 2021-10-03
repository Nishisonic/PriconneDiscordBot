import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class DamageChargeAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    return `[${
      this.actionValue3.value
    }] 秒チャージし、次のアクションの効果を [${this.buildExpression(
      expressionMode,
      RoundingMode.UNNECESSARY,
      property
    )} \* チャージ中受けたダメージ] アップさせる。`;
  }
}
