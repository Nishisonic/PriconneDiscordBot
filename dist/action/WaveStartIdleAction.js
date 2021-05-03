import { ActionParameter } from "./ActionParameter.js";
export class WaveStartIdleAction extends ActionParameter {
    localizedDetail() {
        return `ウェーブ開始 [${this.actionValue1.value}] 秒後入場する。`;
    }
}
