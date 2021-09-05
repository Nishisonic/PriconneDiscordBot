import { BarrierAction, BarrierType } from "./barrierAction.js";
export class EnchantStrikeBackAction extends BarrierAction {
    localizedDetail() {
        switch (this.barrierType.value) {
            case BarrierType.physicalGuard:
                return `${this.targetParameter.buildTargetClause()}に [${this.actionValue3.value}] 回分の物理ダメージを無効化できるシールドを展開し、物理ダメージを受けた時 [${this.buildExpression()}] 分のダメージを反射する。`;
            case BarrierType.magicalGuard:
                return `${this.targetParameter.buildTargetClause()}に [${this.actionValue3.value}] 回分の魔法ダメージを無効化できるシールドを展開し、魔法ダメージを受けた時 [${this.buildExpression()}] 分のダメージを反射する。`;
            case BarrierType.physicalDrain:
                return `${this.targetParameter.buildTargetClause()}に [${this.actionValue3.value}] 回分の物理ダメージを無効化できるシールドを展開する、物理ダメージを受けた時 [${this.buildExpression()}] 分のダメージを反射し、自分のHPを同等の値回復させる。`;
            case BarrierType.magicalDrain:
                return `${this.targetParameter.buildTargetClause()}に [${this.actionValue3.value}] 回分の魔法ダメージを無効化できるシールドを展開する、魔法ダメージを受けた時 [${this.buildExpression()}] 分のダメージを反射し、自分のHPを同等の値回復させる。`;
            case BarrierType.bothGuard:
                return `${this.targetParameter.buildTargetClause()}に [${this.actionValue3.value}] 回分のダメージを無効化できるシールドを展開し、ダメージを受けた時 [${this.buildExpression()}] 分のダメージを反射する。`;
            case BarrierType.bothDrain:
                return `${this.targetParameter.buildTargetClause()}に [${this.actionValue3.value}] 回分のダメージを無効化できるシールドを展開する、ダメージを受けた時 [${this.buildExpression()}] 分のダメージを反射し、自分のHPを同等の値回復させる。`;
            default:
                return super.localizedDetail();
        }
    }
}
