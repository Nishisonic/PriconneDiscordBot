import { ActionParameter, ActionValue, eActionValue, RoundingMode, } from "./actionParameter.js";
class CharmType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
CharmType.unknown = -1;
CharmType.charm = 0;
CharmType.confusion = 1;
export class CharmAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.chanceValues = [];
        this.durationValues = [];
        this.charmType = CharmType.parse(this.actionDetail1);
        this.durationValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        switch (this.charmType.value) {
            case CharmType.charm:
                this.chanceValues.push(new ActionValue(this.actionValue3.value, this.actionValue4.value * 100, new eActionValue(eActionValue.VALUE3), new eActionValue(eActionValue.VALUE4), null));
                break;
            default:
                this.chanceValues.push(new ActionValue(this.actionValue3.value * 100, this.actionValue4.value * 100, new eActionValue(eActionValue.VALUE3), new eActionValue(eActionValue.VALUE4), null));
                break;
        }
    }
    localizedDetail(expressionMode, property) {
        switch (this.charmType.value) {
            case CharmType.charm:
                return `[${this.buildExpression(expressionMode, this.chanceValues, RoundingMode.UNNECESSARY, property)}%] の確率で${this.targetParameter.buildTargetClause()}を魅了状態にする、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。`;
            case CharmType.confusion:
                return `[${this.buildExpression(expressionMode, this.chanceValues, RoundingMode.UNNECESSARY, property)}%] の確率で${this.targetParameter.buildTargetClause()}を混乱状態にする、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
