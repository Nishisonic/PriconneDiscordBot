import { ActionParameter, ActionValue, ClassModifier } from "./ActionParameter.js";
import { FieldType } from "./HealFieldAction.js";
import { TargetType } from "./parameter/TargetType.js";
import { PropertyKey } from "./PropertyKey.js";
export class AttackFieldAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.damageClass =
            this.actionDetail1 % 2 === 0
                ? ClassModifier.parse(ClassModifier.magical)
                : ClassModifier.parse(ClassModifier.physical);
        if (this.actionDetail1 <= 2) {
            this.fieldType = FieldType.parse(FieldType.normal);
        }
        else {
            this.fieldType = FieldType.parse(FieldType.repeat);
        }
        switch (this.damageClass.value) {
            case ClassModifier.magical:
                this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
                this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, PropertyKey.parse(PropertyKey.magicStr)));
                break;
            case ClassModifier.physical:
                this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
                this.actionValues.push(new ActionValue(this.actionValue3, this.actionValue4, PropertyKey.parse(PropertyKey.atk)));
        }
        this.durationValues.push(new ActionValue(this.actionValue5, this.actionValue6, null));
    }
    localizedDetail() {
        switch (this.fieldType.value) {
            case FieldType.repeat:
                if (this.targetParameter.targetType.value === TargetType.absolute) {
                    return `半径 [${this.actionValue7}] のフィールドを展開し、${this.targetParameter.buildTargetClause()}に毎秒 [${this.buildExpression()}] の${this.damageClass.description()}ダメージを与える、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                }
                return `${this.targetParameter.buildTargetClause()}の位置で半径 [${this.actionValue7}] のフィールドを展開し、毎秒 [${this.targetParameter.buildTargetClause()}] の${this.damageClass.description()}ダメージを与える、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
            default:
                return super.localizedDetail();
        }
    }
}
