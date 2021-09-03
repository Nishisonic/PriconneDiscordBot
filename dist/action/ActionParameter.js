// import { getMaxCharaLevelAsync } from "./parameter/Chara.js";
// import { Property } from "./parameter/property.js";
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
    buildExpression(
    // expressionMode: Expression,
    // level: number,
    // roundingMode: RoundingMode,
    actionValues = this.actionValues, 
    // property = new Property(),
    hasBracesIfNeeded = false) {
        // if (expressionMode === Expression.EXPRESSION) {
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
                    part += `\`${value.initialValue.description}\`${value.initial}`;
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
        // } else {
        //   let fixedValue = 0;
        //   for (const value of actionValues) {
        //     let part = 0;
        //     if (value.initial !== null && value.perLevel !== null) {
        //       const initialValue = value.initial;
        //       const perLevelValue = value.perLevel;
        //       part = initialValue + perLevelValue * (await getMaxCharaLevelAsync());
        //     }
        //     if (value.key !== null) {
        //       part = part * property.getItem(value.key as PropertyKey);
        //     }
        //     const num = part;
        //     if (this.approximately(part, num)) {
        //       part = num;
        //     }
        //     fixedValue += part;
        //   }
        //   switch (roundingMode) {
        //     case RoundingMode.UP:
        //     case RoundingMode.DOWN:
        //     case RoundingMode.UNNECESSARY:
        //   }
        // }
    }
    // private approximately(a: number, b: number) {
    //   return Math.abs(a - b) < 1e-9;
    // }
    bracesIfNeeded(content) {
        if (content.includes("+")) {
            return `(${content})`;
        }
        return content;
    }
    localizedDetail() {
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
