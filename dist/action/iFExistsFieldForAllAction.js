import { ActionParameter } from "./actionParameter.js";
export class IFExistsFieldForAllAction extends ActionParameter {
    localizedDetail() {
        if (this.actionDetail2 !== 0 && this.actionDetail3 !== 0) {
            return `条件分岐：特定なフィールド効果が存在する場合 [アクション${this.actionDetail2 % 10}] を使う、そうでなければ [アクション${this.actionDetail3 % 10}] を使う。`;
        }
        if (this.actionDetail2 !== 0) {
            return `条件分岐：特定なフィールド効果が存在する場合 [アクション${this.actionDetail2 % 10}] を使う。`;
        }
        return super.localizedDetail();
    }
}