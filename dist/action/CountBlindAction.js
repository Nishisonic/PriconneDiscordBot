import { ActionParameter } from "./actionParameter.js";
class CountType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
CountType.unknown = -1;
CountType.time = 1;
CountType.count = 2;
export class CountBlindAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.countType = CountType.parse(this.actionValue1.value);
    }
    localizedDetail() {
        switch (this.countType.value) {
            case CountType.time:
                return `${this.targetParameter.buildTargetClause()}の物理攻撃を必ずミスさせる、効果時間 [${this.buildExpression()}] 秒。`;
            case CountType.count:
                return `${this.targetParameter.buildTargetClause()}の次の [${this.buildExpression()}] 回物理攻撃を必ずミスさせる。`;
            default:
                return super.localizedDetail();
        }
    }
}
