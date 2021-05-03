import { ActionParameter } from "./ActionParameter.js";
export class StealthAction extends ActionParameter {
    localizedDetail() {
        return `潜伏状態に入る、効果時間 [${this.actionValue1.value}] 秒。`;
    }
}
