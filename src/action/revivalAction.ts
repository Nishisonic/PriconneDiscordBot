import { SkillAction } from "../master.js";
import { ActionParameter, Expression } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class RevivalType {
  static readonly unknown = 0;
  static readonly normal = 1;
  static readonly phoenix = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class RevivalAction extends ActionParameter {
  revivalType: RevivalType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.revivalType = RevivalType.parse(this.actionDetail1);
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.revivalType.value) {
      case RevivalType.normal:
        return `${this.targetParameter.buildTargetClause()}を復活させ、HPを [${Math.round(
          this.actionValue2.value * 100
        )}%] 回復させる。（この値はキャラの回復量上昇値に影響される）`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
