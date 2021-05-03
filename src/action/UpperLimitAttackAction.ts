import { ActionParameter } from "./ActionParameter.js";

export class UpperLimitAttackAction extends ActionParameter {
  localizedDetail() {
    return `${super.localizedDetail()}ダメージはレベルの低いプレイヤーに対して軽減する。`;
  }
}
