import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
export class DamageChargeAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail(expressionMode, property) {
        return `[${this.actionValue3.value}] 秒チャージし、次のアクションの効果を [${this.buildExpression(expressionMode, RoundingMode.UNNECESSARY, property)} \* チャージ中受けたダメージ] アップさせる。`;
    }
}
