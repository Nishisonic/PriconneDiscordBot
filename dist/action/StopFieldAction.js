import { ActionParameter } from "./ActionParameter.js";
export class StopFieldAction extends ActionParameter {
    localizedDetail() {
        return `このページの${Math.floor(this.actionDetail1 / 100) % 10}番目のスキルの [アクション${this.actionDetail1 % 10}] が展開したフィールドを解除する。`;
    }
}
