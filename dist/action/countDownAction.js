import { ActionParameter } from "./actionParameter.js";
export class CountDownAction extends ActionParameter {
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}にカウントダウンを設置する、[${this.actionValue1.value}] 秒後 [アクション${this.actionDetail1 % 10}] を発動させる。`;
    }
}
