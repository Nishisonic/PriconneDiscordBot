import { ActionParameter } from "./actionParameter.js";

export class SkillExecCountAction extends ActionParameter {
  localizedDetail() {
    return `[カウンター${this.actionDetail1}] の数を [1] 増やせる。（最大 [${this.actionValue1.value}] まで）`;
  }
}
