import { ActionParameter } from "./ActionParameter.js";

export class SkillExecCountAction extends ActionParameter {
  localizedDetail() {
    return `[カウンター${this.actionDetail1}] の数を [${this.actionValue1.value}] 増やせる。`;
  }
}
