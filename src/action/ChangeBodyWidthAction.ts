import { ActionParameter } from "./actionParameter.js";

export class ChangeBodyWidthAction extends ActionParameter {
  localizedDetail() {
    return `モデルの幅を${this.actionValue1.value}にする。`;
  }
}
