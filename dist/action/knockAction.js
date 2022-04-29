import { ActionParameter, ActionValue } from "./actionParameter.js";
class KnockType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
KnockType.unknown = 0;
KnockType.upDown = 1;
KnockType.up = 2;
KnockType.back = 3;
KnockType.moveTarget = 4;
KnockType.moveTargetParaboric = 5;
KnockType.backLimited = 6;
KnockType.dragForwardCaster = 8;
KnockType.knockBackGiveValue = 9;
export class KnockAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.knockType = KnockType.parse(this.actionDetail1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail(expressionMode, property) {
        switch (this.knockType.value) {
            case KnockType.upDown:
                return `${this.targetParameter.buildTargetClause()}をノックアップする、高度 [${this.actionValue1.value}]。`;
            case KnockType.back:
            case KnockType.backLimited:
                if (this.actionValue1.value >= 0) {
                    return `${this.targetParameter.buildTargetClause()}をノックバックする、距離 [${this.actionValue1.value}]。`;
                }
                return `${this.targetParameter.buildTargetClause()}を引き寄せる、距離 [${-super
                    .actionValue1.value}]。`;
            case KnockType.dragForwardCaster:
                return `${this.targetParameter.buildTargetClause()}を自分の前 [${Math.floor(this.actionValue1.value)}] の位置に引き寄せる。`;
            case KnockType.knockBackGiveValue:
                return `${this.targetParameter.buildTargetClause()}をノックバックする、距離 [${this.buildExpression(expressionMode, property)}]。`;
            default:
                return super.localizedDetail(expressionMode, property);
        }
    }
}
