import { ActionParameter, ActionValue, RoundingMode, } from "./actionParameter.js";
class SpeedChangeType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
SpeedChangeType.slow = 1;
SpeedChangeType.haste = 2;
export class ChangeSpeedOverlapAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.actionValues = [];
        this.durationValues = [];
        this.speedChangeType = SpeedChangeType.parse(this.actionDetail1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail(expressionMode, property) {
        try {
            if (this.speedChangeType.value === SpeedChangeType.slow) {
                return `${this.targetParameter.buildTargetClause()}の行動速度を [${Number(this.buildExpression(expressionMode, RoundingMode.UNNECESSARY, property)) * 100}%] ダウンさせる、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。この効果は他の行動速度変化スキルと重ね掛け可能。`;
            }
            if (this.speedChangeType.value === SpeedChangeType.haste) {
                return `${this.targetParameter.buildTargetClause()}の行動速度を [${Number(this.buildExpression(expressionMode, RoundingMode.UNNECESSARY, property)) * 100}%] アップさせる、効果時間 [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒。この効果は他の行動速度変化スキルと重ね掛け可能。`;
            }
            return super.localizedDetail(expressionMode, property);
        }
        catch (e) {
            return super.localizedDetail(expressionMode, property);
        }
    }
}
