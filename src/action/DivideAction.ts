import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

export class DivideAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
  }

  localizedDetail() {
    if (this.actionValue1.value === 0) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(undefined, true)} \* HP / MaxHP] を乗じる。`;
    }
    if (this.actionValue1.value === 1) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(
        undefined,
        true
      )} \* 損失したHP / MaxHP] を乗じる。`;
    }
    if (this.actionValue1.value === 2) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(undefined, true)} \* 倒した敵の数] を乗じる。`;
    }
    if (this.actionValue1.value >= 200 && this.actionValue1.value < 300) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression(undefined, true)} \* マーク [ID: ${
        this.actionValue1.value % 200
      }] のスタック数] を乗じる。`;
    }
    return super.localizedDetail();
  }
}
