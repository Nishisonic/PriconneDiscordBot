import { ActionParameter, Expression } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class UpperLimitAttackAction extends ActionParameter {
  localizedDetail(expressionMode: Expression, property: Property) {
    return `${super.localizedDetail(
      expressionMode,
      property
    )}ダメージはレベルの低いプレイヤーに対して軽減する。`;
  }
}
