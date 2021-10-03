import { SkillAction } from "../master.js";
import {
  ActionParameter,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class CountType {
  static readonly unknown = -1;
  static readonly time = 1;
  static readonly count = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class CountBlindAction extends ActionParameter {
  countType: CountType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.countType = CountType.parse(this.actionValue1.value);
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.countType.value) {
      case CountType.time:
        return `${this.targetParameter.buildTargetClause()}の物理攻撃を必ずミスさせる、効果時間 [${this.buildExpression(
          expressionMode,
          RoundingMode.UNNECESSARY,
          property
        )}] 秒。`;
      case CountType.count:
        return `${this.targetParameter.buildTargetClause()}の次の [${this.buildExpression(
          expressionMode,
          property
        )}] 回物理攻撃を必ずミスさせる。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
