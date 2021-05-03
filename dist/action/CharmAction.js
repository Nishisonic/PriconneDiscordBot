import { ActionParameter, ActionValue } from "./ActionParameter.js";
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
                this.chanceValues.push(new ActionValue(this.actionValue3, this.actionValue4 * 100, null));
                break;
            default:
                this.chanceValues.push(new ActionValue(this.actionValue3 * 100, this.actionValue4 * 100, null));
                break;
        }
    }
    localizedDetail() {
        switch (this.charmType.value) {
            case CharmType.charm:
                return `[${this.buildExpression(this.chanceValues)}%] の確率で${this.targetParameter.buildTargetClause()}を魅了状態にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
            case CharmType.confusion:
                return `[${this.buildExpression(this.chanceValues)}%] の確率で${this.targetParameter.buildTargetClause()}を混乱状態にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
            default:
                return super.localizedDetail();
        }
    }
}
