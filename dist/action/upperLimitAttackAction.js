import { ActionParameter } from "./actionParameter.js";
export class UpperLimitAttackAction extends ActionParameter {
    localizedDetail(expressionMode, property) {
        return `${super.localizedDetail(expressionMode, property)}ダメージはレベルの低いプレイヤーに対して軽減する。`;
    }
}
