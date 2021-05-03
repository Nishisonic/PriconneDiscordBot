import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

class DispelType {
  static readonly unknown = 0;
  static readonly buff = 1;
  static readonly debuff = 2;
  static readonly barriers = 10;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case DispelType.buff:
        return "バフ効果";
      case DispelType.debuff:
        return "デバフ効果";
      case DispelType.barriers:
        return "バリア";
      default:
        return "不明";
    }
  }
}

export class DispelAction extends ActionParameter {
  dispelType: DispelType;
  chanceValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.dispelType = DispelType.parse(this.actionDetail1);
    this.chanceValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    return `[${this.buildExpression(
      this.chanceValues
    )}%] の確率で${this.targetParameter.buildTargetClause()}の${this.dispelType.description()}をすべて解除する。`;
  }
}
