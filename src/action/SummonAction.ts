import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";

class Side {
  static readonly unknown = -1;
  static readonly ours = 1;
  static readonly other = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case Side.ours:
        return "味方側";
      case Side.other:
        return "敵側";
      default:
        return "不明";
    }
  }
}

class UnitType {
  static readonly unknown = -1;
  static readonly normal = 1;
  static readonly phantom = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case UnitType.normal:
        return "ノーマルタイプ";
      case UnitType.phantom:
        return "ファントムタイプ";
      default:
        return "不明";
    }
  }
}

export class SummonAction extends ActionParameter {
  side: Side;
  unitType: UnitType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.side = Side.parse(this.actionDetail3);
    this.unitType = UnitType.parse(this.actionValue5.value);
  }

  localizedDetail() {
    if (this.actionValue7.value > 0) {
      return `${this.targetParameter.buildTargetClause()}の前方 [${
        this.actionValue7.value
      }] の位置で、召喚物 [ID: ${this.actionDetail2}] を召喚する。`;
    }
    if (this.actionValue7.value < 0) {
      return `${this.targetParameter.buildTargetClause()}の後方 [${-this
        .actionValue7}] の位置で、召喚物 [ID: ${
        this.actionDetail2
      }] を召喚する。`;
    }
    return `${this.targetParameter.buildTargetClause()}の位置で、召喚物 [ID: ${
      this.actionDetail2
    }] を召喚する。`;
  }
}
