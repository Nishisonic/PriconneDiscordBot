import { ActionParameter } from "./ActionParameter.js";

export class ChangePatternAction extends ActionParameter {
  localizedDetail() {
    switch (this.actionDetail1) {
      case 1:
        if (this.actionValue1 > 0) {
          return `行動パターンを${
            this.actionDetail2 % 10
          }に変化させる、効果時間 [${this.actionValue1}] 秒。`;
        }
        return `行動パターンを${this.actionDetail2 % 10}に変化させる。`;
      case 2:
        return `スキルのビジュアルを変化させる、効果時間 [${this.actionValue1}] 秒。`;
      default:
        return super.localizedDetail();
    }
  }
}
