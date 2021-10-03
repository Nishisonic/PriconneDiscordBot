import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
import { PropertyKey } from "./propertyKey.js";
export class EnchantLifeStealAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.stackValues = [];
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.stackValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}の次の [${this.buildExpression(expressionMode, this.stackValues, RoundingMode.FLOOR, property)}] 回攻撃に [${this.buildExpression(expressionMode, property)}] %${PropertyKey.parse(PropertyKey.lifeSteal).description()}効果を付与する。`;
    }
}
