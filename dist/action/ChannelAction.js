import { AuraAction } from "./AuraAction.js";
class ReleaseType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
ReleaseType.damage = 1;
ReleaseType.unknown = 2;
export class ChannelAction extends AuraAction {
    constructor(skillAction) {
        super(skillAction);
        this.releaseType = ReleaseType.parse(this.actionDetail2);
    }
    localizedDetail() {
        switch (this.releaseType.value) {
            case ReleaseType.damage:
                return `${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${this.buildExpression()}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、このアクションは [${this.buildExpression(this.durationValues)}] 秒継続し、ダメージを [${this.actionDetail3}] 回受けた時中断される。`;
            default:
                return super.localizedDetail();
        }
    }
}
