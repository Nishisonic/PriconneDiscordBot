import { SkillAction } from "../master.js";
import { Expression, RoundingMode } from "./actionParameter.js";
import { AuraAction } from "./auraAction.js";
import { Property } from "./parameter/property.js";

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

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.releaseType.value) {
      case ReleaseType.damage:
        return `${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${this.buildExpression(
          expressionMode,
          RoundingMode.UP,
          property
        )}${this.percentModifier.description()}] ${this.auraActionType.description()}させる、このアクションは [${this.buildExpression(
          expressionMode,
          this.durationValues,
          RoundingMode.UNNECESSARY,
          property
        )}] 秒継続し、ダメージを [${
          this.actionDetail3
        }] 回受けた時中断される。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
