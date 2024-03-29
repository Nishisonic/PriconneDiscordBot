import { ActionParameter, ActionValue, ClassModifier, CriticalModifier, } from "./actionParameter.js";
import { PropertyKey } from "./propertyKey.js";
class DecideTargetAtkType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
DecideTargetAtkType.bySource = 0;
DecideTargetAtkType.lowerDef = 1;
export class DamageAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.damageClass = ClassModifier.parse(skillAction.action_detail_1);
        this.criticalModifier = CriticalModifier.parse(skillAction.action_value_5);
        this.decideTargetAtkType = DecideTargetAtkType.parse(this.actionDetail2);
        switch (skillAction.action_detail_1) {
            case ClassModifier.magical:
                this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
                this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, PropertyKey.parse(PropertyKey.magicStr)));
                break;
            case ClassModifier.physical:
            case ClassModifier.inevitablePhysical:
                this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
                this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, PropertyKey.parse(PropertyKey.atk)));
                break;
            default:
        }
    }
    localizedDetail(expressionMode, property) {
        let sentence = "";
        switch (this.criticalModifier.value) {
            case CriticalModifier.normal:
                sentence += `${this.targetParameter.buildTargetClause()}に [${this.buildExpression(expressionMode, property)}] の${this.damageClass.description()}ダメージを与える。`;
                break;
            case CriticalModifier.critical:
                sentence += `${this.targetParameter.buildTargetClause()}に [${this.buildExpression(expressionMode, property)}] の${this.damageClass.description()}ダメージを与える。このアクションの ${this.actionValue5.value}hitは必ずクリティカルする。`;
                break;
        }
        if (this.actionValue6.value !== 0) {
            sentence += `クリティカルした場合、ダメージ倍率が [${2 * this.actionValue6.value}] 倍になる。`;
        }
        if (this.decideTargetAtkType === DecideTargetAtkType.parse(DecideTargetAtkType.lowerDef)) {
            sentence += `このスキルのダメージタイプは目標の低いほうの防御タイプによって決められる。`;
        }
        return sentence;
    }
}
