import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  ClassModifier,
  Expression,
  PercentModifier,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";
import { TargetType } from "./parameter/targetType.js";
import { PropertyKey } from "./propertyKey.js";

export class HealFieldAction extends ActionParameter {
  healClass: ClassModifier;
  percentModifier: PercentModifier;
  fieldType: FieldType;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.healClass =
      this.actionDetail1 % 2 === 0
        ? ClassModifier.parse(ClassModifier.magical)
        : ClassModifier.parse(ClassModifier.physical);
    this.percentModifier = PercentModifier.parse(this.actionDetail2);
    if (this.actionDetail1 <= 2) {
      this.fieldType = FieldType.parse(FieldType.normal);
    } else {
      this.fieldType = FieldType.parse(FieldType.repeat);
    }

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
    }
    this.durationValues.push(
      new ActionValue(this.actionValue5, this.actionValue6, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    switch (this.fieldType.value) {
      case FieldType.repeat:
        if (this.targetParameter.targetType.value === TargetType.absolute) {
          return `半径 [${
            this.actionValue7.value
          }] のフィールドを展開し、${this.targetParameter.buildTargetClause()}に毎秒 [${this.buildExpression(
            expressionMode,
            property
          )}${this.percentModifier.description()}] のHPを回復させる、効果時間 [${this.buildExpression(
            expressionMode,
            this.durationValues,
            RoundingMode.UNNECESSARY,
            property
          )}] 秒。`;
        }
        return `${this.targetParameter.buildTargetClause()}の位置で半径 [${
          this.actionValue7.value
        }] のフィールドを展開し、毎秒 [${this.buildExpression(
          expressionMode,
          property
        )}${this.percentModifier.description()}] のHPを回復させる、効果時間 [${this.buildExpression(
          expressionMode,
          this.durationValues,
          RoundingMode.UNNECESSARY,
          property
        )}] 秒。`;
      default:
        return super.localizedDetail(expressionMode, property);
    }
  }
}

export class FieldType {
  static readonly normal = 0;
  static readonly repeat = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}
