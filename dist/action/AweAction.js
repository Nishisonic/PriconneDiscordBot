import { ActionParameter, ActionValue } from "./ActionParameter.js";
class AweType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
AweType.unknown = -1;
AweType.ubOnly = 0;
AweType.ubAndSkill = 1;
export class AweAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.percentValues = [];
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
        this.percentValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.aweType = AweType.parse(this.actionDetail1);
    }
    localizedDetail() {
        switch (this.aweType.value) {
            case AweType.ubAndSkill:
                return `${this.targetParameter.buildTargetClause()}のユニオンバーストかスキルが任意のターゲットにダメージか直接回復を与えるたび、その値を [${this.buildExpression(this.percentValues)}%] ダウンさせる、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
            case AweType.ubOnly:
                return `${this.targetParameter.buildTargetClause()}のユニオンバーストが任意のターゲットにダメージか直接回復を与えるたび、その値を [${this.buildExpression(this.percentValues)}%] ダウンさせる、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
            default:
                return super.localizedDetail();
        }
    }
}
