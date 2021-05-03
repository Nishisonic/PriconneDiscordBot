import { ActionParameter } from "./ActionParameter.js";
export class ChangeBodyWidthAction extends ActionParameter {
    localizedDetail() {
        return `モデルの幅を${this.actionValue1.value}にする。`;
    }
}
