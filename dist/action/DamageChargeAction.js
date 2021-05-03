import { ActionParameter, ActionValue } from "./ActionParameter.js";
export class DamageChargeAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail() {
        return `[${this.actionValue3}] 秒チャージし、次のアクションの効果を [${this.buildExpression()} * チャージ中受けたダメージ] アップさせる。`;
    }
}
