import { SkillAction } from "../master.js";
import { AuraAction } from "./AuraAction.js";

class ReleaseType {
  static readonly damage = 1;
  static readonly unknown = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class ChannelAction extends AuraAction {
  releaseType: ReleaseType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.releaseType = ReleaseType.parse(this.actionDetail2);
  }

  localizedDetail() {
    switch (this.releaseType.value) {
      case ReleaseType.damage:
        return `${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${this.buildExpression()}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、このアクションは [${this.buildExpression(
          this.durationValues
        )}] 秒継続し、ダメージを [${
          this.actionDetail3
        }] 回受けた時中断される。`;
      default:
        return super.localizedDetail();
    }
  }
}
