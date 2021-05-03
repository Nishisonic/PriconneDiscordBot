import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

export class MultipleAction extends ActionParameter {
  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
  }

  localizedDetail() {
    if (this.actionValue1 == 0) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression()} * HP / MaxHP] を乗じる。`;
    }
    if (this.actionValue1 == 1) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression()} * 損失したHP / MaxHP] を乗じる。`;
    }
    if (this.actionValue1 == 2) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression()} * 倒した敵の数] を乗じる。`;
    }
    if (this.actionValue1 >= 200 && this.actionValue1 < 300) {
      return `[アクション${this.actionDetail1 % 10}] の係数${
        this.actionDetail2
      }に [${this.buildExpression()} * マーク [ID: ${
        this.actionValue1 % 200
      }] のスタック数] を乗じる。`;
    }
    return super.localizedDetail();
  }
}
