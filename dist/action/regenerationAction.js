import { ActionParameter, ActionValue, ClassModifier, RoundingMode, } from "./actionParameter.js";
import { PropertyKey } from "./propertyKey.js";
class RegenerationType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case RegenerationType.hp:
                return "HP";
            case RegenerationType.tp:
                return "TP";
            default:
                return "不明";
        }
    }
}
RegenerationType.unknown = -1;
RegenerationType.hp = 1;
RegenerationType.tp = 2;
export class RegenerationAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.healClass = ClassModifier.parse(this.actionDetail1);
        this.regenerationType = RegenerationType.parse(this.actionDetail2);
        this.durationValues.push(new ActionValue(this.actionValue5, this.actionValue6, null));
        switch (this.healClass.value) {
            case ClassModifier.magical:
                this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
                this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, PropertyKey.parse(PropertyKey.magicStr)));
                break;
            case ClassModifier.physical:
                this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
                this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, PropertyKey.parse(PropertyKey.atk)));
                break;
        }
    }
    localizedDetail(expressionMode, property) {
        return `${this.targetParameter.buildTargetClause()}の${this.regenerationType.description()}を毎秒 [${this.buildExpression(expressionMode, property)}] 回復させる、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。`;
    }
}
