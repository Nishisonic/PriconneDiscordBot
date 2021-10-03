import { ActionParameter } from "./actionParameter.js";
export class ChangeEnergyRecoveryRatioByDamageAction extends ActionParameter {
    getChildrenActionString() {
        let childrenActionString = "";
        if (this.childrenAction !== null) {
            for (const action of this.childrenAction) {
                childrenActionString += `${action.action_id % 10}, `;
            }
            childrenActionString = childrenActionString.substring(0, childrenActionString.lastIndexOf(", "));
        }
        return childrenActionString;
    }
    localizedDetail() {
        return `ダメージによるTP回復を含めて、${this.targetParameter.buildTargetClause()}が [アクション${this.getChildrenActionString()}] を受けた時全てのTP回復効果を [本来の値 \* ${this.actionValue1.value}] に変更させる。`;
    }
}
