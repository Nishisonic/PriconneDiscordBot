import { ActionParameter } from "./actionParameter.js";
export class EffectAction extends ActionParameter {
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}に特別なビジュアル効果を付与する。`;
    }
}
