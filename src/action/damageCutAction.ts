import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue, Expression } from "./actionParameter.js";
import { Property } from "./parameter/property.js";

class DamageType {
  static readonly Physical = 1;
  static readonly Magical = 2;
  static readonly All = 3;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class DamageCutAction extends ActionParameter {
  damageType: DamageType;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.damageType = DamageType.parse(this.actionDetail1);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.damageType.value) {
      case DamageType.Physical:
        return `${this.targetParameter.buildTargetClause()}が受ける物理ダメージを [${this.buildExpression(
          expressionMode,
          this.actionValues,
          null,
          property
        )}%] カットする、効果時間 [${this.buildExpression(
          expressionMode,
          this.durationValues,
          null,
          property
        )}] 秒。`;
      case DamageType.Magical:
        return `${this.targetParameter.buildTargetClause()}が受ける魔法ダメージを [${this.buildExpression(
          expressionMode,
          this.actionValues,
          null,
          property
        )}%] カットする、効果時間 [${this.buildExpression(
          expressionMode,
          this.durationValues,
          null,
          property
        )}] 秒。`;
      case DamageType.All:
        return `${this.targetParameter.buildTargetClause()}が受ける全てのダメージを [${this.buildExpression(
          expressionMode,
          this.actionValues,
          null,
          property
        )}%] カットする、効果時間 [${this.buildExpression(
          expressionMode,
          this.durationValues,
          null,
          property
        )}] 秒。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}
