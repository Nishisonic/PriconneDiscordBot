import { ActionParameter, ActionValue } from "./actionParameter.js";
class NoDamageType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
NoDamageType.unknown = 0;
NoDamageType.noDamage = 1;
NoDamageType.dodgePhysics = 2;
NoDamageType.dodgeAll = 3;
NoDamageType.abnormal = 4;
NoDamageType.debuff = 5;
NoDamageType.Break = 6;
export class NoDamageAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.noDamageType = NoDamageType.parse(this.actionDetail1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail() {
        switch (this.noDamageType.value) {
            case NoDamageType.noDamage:
                return `${this.targetParameter.buildTargetClause()}に無敵状態、効果時間 [${this.buildExpression()}] 秒。`;
            case NoDamageType.dodgePhysics:
                return `${this.targetParameter.buildTargetClause()}に物理攻撃無効状態、効果時間 [${this.buildExpression()}] 秒。`;
            case NoDamageType.Break:
                return `${this.targetParameter.buildTargetClause()}にBreak免疫状態、効果時間 [${this.buildExpression()}] 秒。`;
            default:
                return super.localizedDetail();
        }
    }
}
