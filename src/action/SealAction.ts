import { ActionParameter } from "./ActionParameter.js";

export class SealAction extends ActionParameter {
  localizedDetail() {
    if (this.actionValue4 >= 0) {
      return `${this.targetParameter.buildTargetClause()}にマーク [ID: ${
        this.actionValue2
      }] を [${this.actionValue4}] スタック追加する、効果時間 [${
        this.actionValue3
      }] 秒、この効果は最大 [${this.actionValue1}] までスタックする。`;
    }
    return `${this.targetParameter.buildTargetClause()}のマーク [ID: ${
      this.actionValue2
    }] を [${-this.actionValue4}] スタック減らせる。`;
  }
}
