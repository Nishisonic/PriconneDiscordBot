import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue, ClassModifier } from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";

class RegenerationType {
  static readonly unknown = -1;
  static readonly hp = 1;
  static readonly tp = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case RegenerationType.hp:
        return "HP";
      case RegenerationType.tp:
        return "TP";
      default:
        return "不明";
    }
  }
}

export class RegenerationAction extends ActionParameter {
  healClass: ClassModifier;
  regenerationType: RegenerationType;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.healClass = ClassModifier.parse(this.actionDetail1);
    this.regenerationType = RegenerationType.parse(this.actionDetail2);
    this.durationValues.push(
      new ActionValue(this.actionValue5, this.actionValue6, null)
    );
    switch (this.healClass.value) {
      case ClassModifier.magical:
        this.actionValues.push(
          new ActionValue(this.actionValue1, this.actionValue2, null)
        );
        this.actionValues.push(
          new ActionValue(
            this.actionValue3,
            this.actionValue4,
            PropertyKey.parse(PropertyKey.magicStr)
          )
        );
        break;
      case ClassModifier.physical:
        this.actionValues.push(
          new ActionValue(this.actionValue1, this.actionValue2, null)
        );
        this.actionValues.push(
          new ActionValue(
            this.actionValue3,
            this.actionValue4,
            PropertyKey.parse(PropertyKey.atk)
          )
        );
        break;
    }
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}の${this.regenerationType.description()}を毎秒 [${this.buildExpression()}] 回復させる、効果時間 [${this.buildExpression(
      this.durationValues
    )}] 秒。`;
  }
}
