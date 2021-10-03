import { SkillAction } from "../master.js";
import { ActionParameter, Expression } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class KnockType {
  static readonly unknown = 0;
  static readonly upDown = 1;
  static readonly up = 2;
  static readonly back = 3;
  static readonly moveTarget = 4;
  static readonly moveTargetParaboric = 5;
  static readonly backLimited = 6;
  static readonly dragForwardCaster = 8;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class KnockAction extends ActionParameter {
  knockType: KnockType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.knockType = KnockType.parse(this.actionDetail1);
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.knockType.value) {
      case KnockType.upDown:
        return `${this.targetParameter.buildTargetClause()}をノックアップする、高度 [${
          this.actionValue1.value
        }]。`;
      case KnockType.back:
      case KnockType.backLimited:
        if (this.actionValue1.value >= 0) {
          return `${this.targetParameter.buildTargetClause()}をノックバックする、距離 [${
            this.actionValue1.value
          }]。`;
        }
        return `${this.targetParameter.buildTargetClause()}を引き寄せる、距離 [${-super
          .actionValue1.value}]。`;
      case KnockType.dragForwardCaster:
        return `${this.targetParameter.buildTargetClause()}を自分の前 [${Math.floor(
          this.actionValue1.value
        )}] の位置に引き寄せる。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
