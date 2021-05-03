import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";

class HPtype {
  static readonly unknown = 0;
  static readonly max = 1;
  static readonly current = 2;
  static readonly originalMax = 3;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class RatioDamageAction extends ActionParameter {
  hptype: HPtype;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.hptype = HPtype.parse(this.actionDetail1);
  }

  localizedDetail() {
    switch (this.hptype.value) {
      case HPtype.max:
        return `${this.targetParameter.buildTargetClause()}に最大HP [${this.buildExpression()}%] 分のダメージを与える。`;
      case HPtype.current:
        return `${this.targetParameter.buildTargetClause()}に残りHP [${this.buildExpression()}%] 分のダメージを与える。`;
      case HPtype.originalMax:
        return `${this.targetParameter.buildTargetClause()}に本来の最大HP [${this.buildExpression()}%] 分のダメージを与える。`;
      default:
        return super.localizedDetail();
    }
  }
}
