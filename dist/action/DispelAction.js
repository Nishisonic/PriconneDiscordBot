import { ActionParameter, ActionValue } from "./ActionParameter.js";
class DispelType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case DispelType.buff:
                return "バフ効果";
            case DispelType.debuff:
                return "デバフ効果";
            case DispelType.barriers:
                return "バリア";
            default:
                return "不明";
        }
    }
}
DispelType.unknown = 0;
DispelType.buff = 1;
DispelType.debuff = 2;
DispelType.barriers = 10;
export class DispelAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.chanceValues = [];
        this.dispelType = DispelType.parse(this.actionDetail1);
        this.chanceValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
    }
    localizedDetail() {
        return `[${this.buildExpression(this.chanceValues)}%] の確率で${this.targetParameter.buildTargetClause()}の${this.dispelType.description()}をすべて解除する。`;
    }
}
