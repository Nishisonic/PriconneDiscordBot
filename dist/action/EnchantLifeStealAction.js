import { ActionParameter, ActionValue } from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";
export class EnchantLifeStealAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.stackValues = [];
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.stackValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}の次の [${this.buildExpression(this.stackValues)}] 回攻撃に [${this.buildExpression()}] %${PropertyKey.parse(PropertyKey.lifeSteal).description()}効果を付与する。`;
    }
}
