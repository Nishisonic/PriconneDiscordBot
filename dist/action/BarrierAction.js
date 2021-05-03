import { ActionParameter, ActionValue } from "./ActionParameter.js";
export class BarrierType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
BarrierType.unknown = 0;
BarrierType.physicalGuard = 1;
BarrierType.magicalGuard = 2;
BarrierType.physicalDrain = 3;
BarrierType.magicalDrain = 4;
BarrierType.bothGuard = 5;
BarrierType.bothDrain = 6;
export class BarrierAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.barrierType = BarrierType.parse(skillAction.action_detail_1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail() {
        switch (this.barrierType.value) {
            case BarrierType.physicalGuard:
                return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理無効バリアを展開する、効果時間 [${this.actionValue3.value}] 秒。`;
            case BarrierType.magicalGuard:
                return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の魔法無効バリアを展開する、効果時間 [${this.actionValue3.value}] 秒。`;
            case BarrierType.physicalDrain:
                return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理吸収バリアを展開する、効果時間 [${this.actionValue3.value}] 秒。`;
            case BarrierType.magicalDrain:
                return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の魔法吸収バリアを展開する、効果時間 [${this.actionValue3.value}] 秒。`;
            case BarrierType.bothDrain:
                return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理&魔法吸収バリアを展開する、効果時間 [${this.actionValue3.value}] 秒。`;
            case BarrierType.bothGuard:
                return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理&魔法無効バリアを展開する、効果時間 [${this.actionValue3.value}] 秒。`;
            default:
                return super.localizedDetail();
        }
    }
}
