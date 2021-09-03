import { ActionParameter, ActionValue } from "./actionParameter.js";
import { PropertyKey } from "./propertyKey.js";
class GuardType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
GuardType.physics = 1;
GuardType.magic = 2;
export class KnightGuardAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.durationValues = [];
        this.guardType = GuardType.parse(this.actionValue1.value);
        switch (this.guardType.value) {
            case GuardType.magic:
                this.actionValues.push(new ActionValue(this.actionValue4, this.actionValue5, PropertyKey.parse(PropertyKey.magicStr)));
                this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
                break;
            case GuardType.physics:
                this.actionValues.push(new ActionValue(this.actionValue4, this.actionValue5, PropertyKey.parse(PropertyKey.atk)));
                this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
                break;
        }
        this.durationValues.push(new ActionValue(this.actionValue6, this.actionValue7, null));
    }
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}に「HPが0になる直前、HPを [${this.buildExpression()}] 回復し、このバフを解除する」の効果を付与する、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
    }
}
