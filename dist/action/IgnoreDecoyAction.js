import { ActionParameter } from "./actionParameter.js";
export class IgnoreDecoyAction extends ActionParameter {
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}を攻撃する時、他のターゲットの挑発効果を無視する。`;
    }
}
