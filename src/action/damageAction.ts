import {
  ActionParameter,
  ActionValue,
  ClassModifier,
  CriticalModifier,
  Expression,
} from "./actionParameter.js";
import { PropertyKey } from "./propertyKey.js";
import { SkillAction } from "../master.js";
import { Property } from "./parameter/property.js";

class DecideTargetAtkType {
  static readonly bySource = 0;
  static readonly lowerDef = 1;
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  static parse( value: number){
      return new this(value);
  }
}

export class DamageAction extends ActionParameter {
  damageClass: ClassModifier;
  criticalModifier: CriticalModifier;
  decideTargetAtkType: DecideTargetAtkType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.damageClass = ClassModifier.parse(skillAction.action_detail_1);
    this.criticalModifier = CriticalModifier.parse(skillAction.action_value_5);
    this.decideTargetAtkType = DecideTargetAtkType.parse(this.actionDetail2);

    switch (skillAction.action_detail_1) {
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
      case ClassModifier.inevitablePhysical:
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
      default:
    }
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    let sentence = "";

    switch (this.criticalModifier.value) {
      case CriticalModifier.normal:
        sentence += `${this.targetParameter.buildTargetClause()}に [${this.buildExpression(
          expressionMode,
          property
        )}] の${this.damageClass.description()}ダメージを与える。`;
        break;
      case CriticalModifier.critical:
        sentence += `${this.targetParameter.buildTargetClause()}に [${this.buildExpression(
          expressionMode,
          property
        )}] の${this.damageClass.description()}ダメージを与える。このアクションの ${
          this.actionValue5.value
        }hitは必ずクリティカルする。`;
        break;
    }
    if (this.actionValue6.value !== 0) {
      sentence += `クリティカルした場合、ダメージ倍率が [${
        2 * this.actionValue6.value
      }] 倍になる。`;
    }
    if (this.decideTargetAtkType === DecideTargetAtkType.parse(DecideTargetAtkType.lowerDef)) {
      sentence += `このスキルのダメージタイプは目標の低いほうの防御タイプによって決められる。`;
    }
    return sentence;
  }
}
