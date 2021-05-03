import { ActionParameter } from "./ActionParameter.js";

export class SealAction extends ActionParameter {
  localizedDetail() {
    if (this.actionValue4.value >= 0) {
      return `${this.targetParameter.buildTargetClause()}にマーク [ID: ${
        this.actionValue2.value
      }] を [${this.actionValue4.value}] スタック追加する、効果時間 [${
        this.actionValue3.value
      }] 秒、この効果は最大 [${this.actionValue1.value}] までスタックする。`;
    }
    return `${this.targetParameter.buildTargetClause()}のマーク [ID: ${
      this.actionValue2.value
    }] を [${-this.actionValue4.value}] スタック減らせる。`;
  }
}
