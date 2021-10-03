import { ActionParameter } from "./actionParameter.js";
class ModeChangeType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
ModeChangeType.unknown = 0;
ModeChangeType.time = 1;
ModeChangeType.energy = 2;
ModeChangeType.release = 3;
export class ModeChangeAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.modeChangeType = ModeChangeType.parse(this.actionDetail1);
    }
    localizedDetail(expressionMode, property) {
        switch (this.modeChangeType.value) {
            case ModeChangeType.time:
                return `行動パターンを${this.actionDetail2 % 10}に変化させる、効果時間 [${this.actionValue1.value}] 秒。`;
            case ModeChangeType.energy:
                return `TPが使い切るまで行動パターンを${this.actionDetail2 % 10}に変化させ、TPを毎秒 [${this.actionValue1.value}] 消耗する。`;
            case ModeChangeType.release:
                return `効果終了後、行動パターンを${this.actionDetail2 % 10}に戻させる。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
