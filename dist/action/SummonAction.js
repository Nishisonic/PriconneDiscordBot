import { ActionParameter } from "./ActionParameter.js";
class Side {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case Side.ours:
                return "味方側";
            case Side.other:
                return "敵側";
            default:
                return "不明";
        }
    }
}
Side.unknown = -1;
Side.ours = 1;
Side.other = 2;
class UnitType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case UnitType.normal:
                return "ノーマルタイプ";
            case UnitType.phantom:
                return "ファントムタイプ";
            default:
                return "不明";
        }
    }
}
UnitType.unknown = -1;
UnitType.normal = 1;
UnitType.phantom = 2;
export class SummonAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.side = Side.parse(this.actionDetail3);
        this.unitType = UnitType.parse(this.actionValue5);
    }
    localizedDetail() {
        if (this.actionValue7 > 0) {
            return `${this.targetParameter.buildTargetClause()}の前方 [${this.actionValue7}] の位置で、召喚物 [ID: ${this.actionDetail2}] を召喚する。`;
        }
        if (this.actionValue7 < 0) {
            return `${this.targetParameter.buildTargetClause()}の後方 [${-this
                .actionValue7}] の位置で、召喚物 [ID: ${this.actionDetail2}] を召喚する。`;
        }
        return `${this.targetParameter.buildTargetClause()}の位置で、召喚物 [ID: ${this.actionDetail2}] を召喚する。`;
    }
}
