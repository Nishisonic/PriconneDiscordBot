import { ActionParameter } from "./actionParameter.js";

export class MovePartsAction extends ActionParameter {
  localizedDetail() {
    return `部位${this.actionValue4.value}を前へ [${-this.actionValue1
      .value}] 移動させ、その後元の位置に戻させる。`;
  }
}
