import { ActionParameter, ActionValue } from "./actionParameter.js";
class BarrierType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
BarrierType.physics = 1;
BarrierType.magic = 2;
BarrierType.all = 3;
export class LogBarrierAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.barrierType = BarrierType.parse(this.actionValue1.value);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.durationValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
    }
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}にバリアを展開する、一回の行動で受けたダメージが [${this.actionValue5.value}] を超えた場合、ダメージが減衰される、減衰係数 [${this.buildExpression()}]（この値が小さいほど減衰されやすい）、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
    }
}
