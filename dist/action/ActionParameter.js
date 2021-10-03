import { maxCharaLevel } from "./parameter/chara.js";
import { Property } from "./parameter/property.js";
import { PropertyKey } from "./propertyKey.js";
import { TargetParameter } from "./targetParameter.js";
export class ActionParameter {
    constructor(skillAction) {
        this.actionValues = [];
        this.childrenAction = null;
        this.targetParameter = new TargetParameter(skillAction);
        this.rawActionType = skillAction.action_type;
        this.actionValue1 = new DoubleValue(skillAction.action_value_1, new eActionValue(eActionValue.VALUE1));
        this.actionValue2 = new DoubleValue(skillAction.action_value_2, new eActionValue(eActionValue.VALUE2));
        this.actionValue3 = new DoubleValue(skillAction.action_value_3, new eActionValue(eActionValue.VALUE3));
        this.actionValue4 = new DoubleValue(skillAction.action_value_4, new eActionValue(eActionValue.VALUE4));
        this.actionValue5 = new DoubleValue(skillAction.action_value_5, new eActionValue(eActionValue.VALUE5));
        this.actionValue6 = new DoubleValue(skillAction.action_value_6, new eActionValue(eActionValue.VALUE6));
        this.actionValue7 = new DoubleValue(skillAction.action_value_7, new eActionValue(eActionValue.VALUE7));
        this.rawActionValues = [
            skillAction.action_value_1,
            skillAction.action_value_2,
            skillAction.action_value_3,
            skillAction.action_value_4,
            skillAction.action_value_5,
            skillAction.action_value_6,
            skillAction.action_value_7,
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
    buildExpression(expressionMode, ...a) {
        const { actionValues, roundingMode, property, hasBracesIfNeeded } = (function (actionValues, roundingMode, property, hasBracesIfNeeded) {
            var _a, _b, _c, _d, _e;
            switch (a.length) {
                case 0:
                    return { actionValues, roundingMode, property, hasBracesIfNeeded };
                case 1:
                    return {
                        actionValues,
                        roundingMode,
                        property: a[0],
                        hasBracesIfNeeded,
                    };
                case 2:
                    return {
                        actionValues,
                        roundingMode: ((_a = a[0]) !== null && _a !== void 0 ? _a : roundingMode),
                        property: a[1],
                        hasBracesIfNeeded,
                    };
                case 3:
                    return {
                        actionValues: ((_b = a[0]) !== null && _b !== void 0 ? _b : actionValues),
                        roundingMode: ((_c = a[1]) !== null && _c !== void 0 ? _c : roundingMode),
                        property: a[2],
                        hasBracesIfNeeded,
                    };
                case 4:
                    return {
                        actionValues: ((_d = a[0]) !== null && _d !== void 0 ? _d : actionValues),
                        roundingMode: ((_e = a[1]) !== null && _e !== void 0 ? _e : roundingMode),
                        property: a[2],
                        hasBracesIfNeeded: a[3],
                    };
                default:
                    return { actionValues, roundingMode, property, hasBracesIfNeeded };
            }
        })(this.actionValues, RoundingMode.DOWN, new Property(), false);
        if (expressionMode === Expression.EXPRESSION) {
            let expression = "";
            for (const value of actionValues) {
                let part = "";
                if (value.initial !== null && value.perLevel !== null) {
                    if (value.initial === 0 && value.perLevel === 0) {
                        continue;
                    }
                    else if (value.initial === 0) {
                        part += `\`${value.perLevelValue.description}\`${value.perLevel} \* スキルLv`;
                    }
                    else if (value.perLevel === 0) {
                        if (value.key === null &&
                            roundingMode !== RoundingMode.UNNECESSARY) {
                            const initial = this.round(value.initial, 0, roundingMode);
                            part += `\`${value.initialValue.description}\`${initial}`;
                        }
                        else {
                            part += `\`${value.initialValue.description}\`${value.initial}`;
                        }
                    }
                    else {
                        part += `\`${value.initialValue.description}\`${value.initial} + \`${value.perLevelValue.description}\`${value.perLevel} \* スキルLv`;
                    }
                    if (value.key !== null) {
                        if (value.initial === 0 && value.perLevel === 0) {
                            continue;
                        }
                        else if (value.initial === 0 || value.perLevel === 0) {
                            part += ` \* ${value.key.description()}`;
                        }
                        else {
                            part = `(${part}) \* ${value.key.description()}`;
                        }
                    }
                }
                if (part.length > 0) {
                    expression += `${part} \+ `;
                }
            }
            if (expression.length === 0) {
                return "0";
            }
            expression = expression.replace(/ \+ $/, "");
            return hasBracesIfNeeded ? this.bracesIfNeeded(expression) : expression;
        }
        else {
            let fixedValue = 0;
            for (const value of actionValues) {
                let part = 0;
                if (value.initial !== null && value.perLevel !== null) {
                    const initialValue = value.initial;
                    const perLevelValue = value.perLevel;
                    part = initialValue + perLevelValue * maxCharaLevel;
                }
                if (value.key !== null) {
                    part = part * property.getItem(value.key);
                }
                fixedValue += part;
            }
            if (roundingMode === RoundingMode.UNNECESSARY) {
                return String(fixedValue);
            }
            return String(this.round(fixedValue, 0, roundingMode));
        }
    }
    bracesIfNeeded(content) {
        if (content.includes("+")) {
            return `(${content})`;
        }
        return content;
    }
    round(value, scale, roundingMode) {
        const _scale = 10 ** scale;
        const code = value > 0 ? 1 : -1;
        switch (roundingMode) {
            case RoundingMode.CEILING:
                return Math.ceil(value * _scale) / _scale;
            case RoundingMode.UP:
                return (code * Math.ceil(Math.abs(value) * _scale)) / _scale;
            case RoundingMode.DOWN:
                return Math.trunc(value * _scale) / _scale;
            case RoundingMode.FLOOR:
                return Math.floor(value * _scale) / _scale;
            case RoundingMode.HALF_DOWN:
                return (code * Math.round(Math.abs(value) * _scale - 0.5)) / _scale;
            case RoundingMode.HALF_UP:
                return (code * Math.round(Math.abs(value) * _scale + 0.5)) / _scale;
            default:
                return value;
        }
    }
    localizedDetail(_, __) {
        if (this.rawActionType === 0) {
            return "効果なし。";
        }
        return `${this.targetParameter.buildTargetClause()}に不明な効果[${this.rawActionType}]、内容${this.actionDetails.toString()}、係数${this.rawActionValues.toString()}。`;
    }
}
export const Expression = {
    EXPRESSION: "EXPRESSION",
    ORIGINAL: "ORIGINAL",
};
export const RoundingMode = {
    UP: "UP",
    DOWN: "DOWN",
    UNNECESSARY: "UNNECESSARY",
    FLOOR: "FLOOR",
    HALF_UP: "HALF_UP",
    HALF_DOWN: "HALF_DOWN",
    CEILING: "CEILING",
};
export class ActionValue {
    constructor(a, b, c, d, e) {
        if (typeof a === "number" &&
            typeof b === "number" &&
            c instanceof eActionValue &&
            d instanceof eActionValue &&
            e instanceof PropertyKey) {
            this.initialValue = new DoubleValue(a, c);
            this.perLevelValue = new DoubleValue(b, d);
            this.initial = a;
            this.perLevel = b;
            this.key = e;
        }
        else if (a instanceof DoubleValue &&
            b instanceof DoubleValue &&
            (c instanceof PropertyKey || c === null)) {
            this.initial = a.value;
            this.perLevel = b.value;
            this.key = c;
            this.initialValue = a;
            this.perLevelValue = b;
        }
        else {
            // エラーが出るので一応書いてあるがこのコードに到達することはない
            this.initial = 0;
            this.perLevel = 0;
            this.key = null;
            this.initialValue = new DoubleValue(0, new eActionValue(eActionValue.VALUE1));
            this.perLevelValue = new DoubleValue(0, new eActionValue(eActionValue.VALUE1));
        }
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
export class DoubleValue {
    constructor(value, index) {
        this.value = value;
        this.index = index;
        this.description = index.description();
    }
}
