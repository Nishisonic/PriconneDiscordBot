import { ActionParameter, ActionValue } from "./actionParameter.js";
class DamageType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
DamageType.Physical = 1;
DamageType.Magical = 2;
DamageType.All = 3;
export class DamageCutAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.damageType = DamageType.parse(this.actionDetail1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail(expressionMode, property) {
        switch (this.damageType.value) {
            case DamageType.Physical:
                return `${this.targetParameter.buildTargetClause()}が受ける物理ダメージを [${this.buildExpression(expressionMode, this.actionValues, null, property)}%] カットする、効果時間 [${this.buildExpression(expressionMode, this.durationValues, null, property)}] 秒。`;
            case DamageType.Magical:
                return `${this.targetParameter.buildTargetClause()}が受ける魔法ダメージを [${this.buildExpression(expressionMode, this.actionValues, null, property)}%] カットする、効果時間 [${this.buildExpression(expressionMode, this.durationValues, null, property)}] 秒。`;
            case DamageType.All:
                return `${this.targetParameter.buildTargetClause()}が受ける全てのダメージを [${this.buildExpression(expressionMode, this.actionValues, null, property)}%] カットする、効果時間 [${this.buildExpression(expressionMode, this.durationValues, null, property)}] 秒。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
