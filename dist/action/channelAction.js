import { RoundingMode } from "./actionParameter.js";
import { AuraAction } from "./auraAction.js";
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
    localizedDetail(expressionMode, property) {
        switch (this.releaseType.value) {
            case ReleaseType.damage:
                return `${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${this.buildExpression(expressionMode, RoundingMode.UP, property)}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、このアクションは [${this.buildExpression(expressionMode, this.durationValues, RoundingMode.UNNECESSARY, property)}] 秒継続し、ダメージを [${this.actionDetail3}] 回受けた時中断される。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
