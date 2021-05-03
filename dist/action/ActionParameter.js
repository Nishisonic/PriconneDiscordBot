import { TargetParameter } from "./TargetParameter.js";
export class ActionParameter {
    constructor(skillAction) {
        this.actionValues = [];
        this.childrenAction = null;
        this.targetParameter = new TargetParameter(skillAction);
        this.rawActionType = skillAction.action_type;
        this.actionValue1 = skillAction.action_value_1;
        this.actionValue2 = skillAction.action_value_2;
        this.actionValue3 = skillAction.action_value_3;
        this.actionValue4 = skillAction.action_value_4;
        this.actionValue5 = skillAction.action_value_5;
        this.actionValue6 = skillAction.action_value_6;
        this.actionValue7 = skillAction.action_value_7;
        this.rawActionValues = [
            this.actionValue1,
            this.actionValue2,
            this.actionValue3,
            this.actionValue4,
            this.actionValue5,
            this.actionValue6,
            this.actionValue7,
        ].filter((value) => value > 0);
        this.actionDetail1 = skillAction.action_detail_1;
        this.actionDetail2 = skillAction.action_detail_2;
        this.actionDetail3 = skillAction.action_detail_3;
        this.actionDetails = [
            this.actionDetail1,
            this.actionDetail2,
            this.actionDetail3,
        ].filter((value) => value > 0);
    }
    buildExpression(actionValues = this.actionValues) {
        let expression = "";
        for (const value of actionValues) {
            let part = "";
            if (value.initial !== null && value.perLevel !== null) {
                if (value.initial === 0 && value.perLevel === 0) {
                    continue;
                }
                else if (value.initial === 0) {
                    part += `${value.perLevel} * スキルLv`;
                }
                else if (value.perLevel === 0) {
                    part += value.initial;
                }
                else {
                    part += `${value.initial} + ${value.perLevel} * スキルLv`;
                }
                if (value.key !== null) {
                    if (value.initial === 0 && value.perLevel === 0) {
                        continue;
                    }
                    else if (value.initial === 0 || value.perLevel === 0) {
                        part += ` * ${value.key.description()}`;
                    }
                    else {
                        part = `(${part}) * ${value.key.description()}`;
                    }
                }
            }
            if (part.length > 0) {
                expression += `${part} + `;
            }
        }
        if (expression.length === 0) {
            return "0";
        }
        return expression.replace(/ \+ $/, "");
    }
    localizedDetail() {
        if (this.rawActionType === 0) {
            return "効果なし。";
        }
        return `${this.targetParameter.buildTargetClause()}に不明な効果[${this.rawActionType}]、内容${this.actionDetails.toString()}、係数${this.rawActionValues.toString()}。`;
    }
}
export class ActionValue {
    constructor(initial, perLevel, key) {
        this.initial = initial;
        this.perLevel = perLevel;
        this.key = key;
    }
}
export class CriticalModifier {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        switch (value) {
            case 1:
                return new this(CriticalModifier.critical);
            default:
                return new this(CriticalModifier.normal);
        }
    }
}
CriticalModifier.normal = 0;
CriticalModifier.critical = 1;
export class ClassModifier {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case ClassModifier.magical:
                return "魔法";
            case ClassModifier.physical:
                return "物理";
            case ClassModifier.inevitablePhysical:
                return "必中の物理";
            default:
                return "不明";
        }
    }
}
ClassModifier.unknown = 0;
ClassModifier.physical = 1;
ClassModifier.magical = 2;
ClassModifier.inevitablePhysical = 3;
export class PercentModifier {
    constructor(value) {
        this.value = value;
    }
    description() {
        switch (this.value) {
            case PercentModifier.percent:
                return "%";
            default:
                return "";
        }
    }
    static parse(value) {
        switch (value) {
            case 2:
                return new this(PercentModifier.percent);
            default:
                return new this(PercentModifier.number);
        }
    }
}
PercentModifier.percent = 0;
PercentModifier.number = 1;
export class eActionValue {
    constructor(value) {
        this.value = value;
    }
    description() {
        switch (this.value) {
            case eActionValue.VALUE1:
                return "係数1";
            case eActionValue.VALUE2:
                return "係数2";
            case eActionValue.VALUE3:
                return "係数3";
            case eActionValue.VALUE4:
                return "係数4";
            case eActionValue.VALUE5:
                return "係数5";
            case eActionValue.VALUE6:
                return "係数6";
            case eActionValue.VALUE7:
                return "係数7";
            default:
                return "";
        }
    }
}
eActionValue.VALUE1 = 0;
eActionValue.VALUE2 = 1;
eActionValue.VALUE3 = 2;
eActionValue.VALUE4 = 3;
eActionValue.VALUE5 = 4;
eActionValue.VALUE6 = 5;
eActionValue.VALUE7 = 6;
