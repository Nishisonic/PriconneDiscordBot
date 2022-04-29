import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";

export class DivideAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
  }

  localizedDetail(expressionMode: Expression, property: Property) {
    let result = super.localizedDetail(expressionMode, property);
    if (this.actionValue1.value === 0) {
      result = `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(
        expressionMode,
        null,
        RoundingMode.UNNECESSARY,
        property,
        true
      )} \* HP / MaxHP] を乗じる。`;
    } else if (this.actionValue1.value === 1) {
      result = `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(
        expressionMode,
        null,
        RoundingMode.UNNECESSARY,
        property,
        true
      )} \* 損失したHP / MaxHP] を乗じる。`;
    } else if (this.actionValue1.value === 2) {
      result = `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(
        expressionMode,
        null,
        RoundingMode.UNNECESSARY,
        property,
        true
      )} \* 倒した敵の数] を乗じる。`;
    } else if (this.actionValue1.value === 4) {
      result = `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(
        expressionMode,
        null,
        RoundingMode.UNNECESSARY,
        property,
        true
      )} \* 対象の数] を乗じる。`;
    } else if (
      this.actionValue1.value >= 200 &&
      this.actionValue1.value < 300
    ) {
      result = `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(
        expressionMode,
        null,
        RoundingMode.UNNECESSARY,
        property,
        true
      )} \* マーク [ID: ${
        this.actionValue1.value % 200
      }] のスタック数] を乗じる。`;
    }

    return result;
  }
}
