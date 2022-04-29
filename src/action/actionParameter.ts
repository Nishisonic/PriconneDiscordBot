import { SkillAction } from "../master.js";
import { maxCharaLevel } from "./parameter/chara.js";
import { Property } from "./parameter/property.js";
import { PropertyKey } from "./propertyKey.js";
import { TargetParameter } from "./targetParameter.js";

export class ActionParameter {
  targetParameter: TargetParameter;
  rawActionType: number;
  actionValues: ActionValue[] = [];
  actionValue1: DoubleValue;
  actionValue2: DoubleValue;
  actionValue3: DoubleValue;
  actionValue4: DoubleValue;
  actionValue5: DoubleValue;
  actionValue6: DoubleValue;
  actionValue7: DoubleValue;
  rawActionValues: number[];
  actionDetail1: number;
  actionDetail2: number;
  actionDetail3: number;
  actionDetails: number[];
  childrenAction: SkillAction[] | null = null;

  constructor(skillAction: SkillAction) {
    this.targetParameter = new TargetParameter(skillAction);
    this.rawActionType = skillAction.action_type;
    this.actionValue1 = new DoubleValue(
      skillAction.action_value_1,
      new eActionValue(eActionValue.VALUE1)
    );
    this.actionValue2 = new DoubleValue(
      skillAction.action_value_2,
      new eActionValue(eActionValue.VALUE2)
    );
    this.actionValue3 = new DoubleValue(
      skillAction.action_value_3,
      new eActionValue(eActionValue.VALUE3)
    );
    this.actionValue4 = new DoubleValue(
      skillAction.action_value_4,
      new eActionValue(eActionValue.VALUE4)
    );
    this.actionValue5 = new DoubleValue(
      skillAction.action_value_5,
      new eActionValue(eActionValue.VALUE5)
    );
    this.actionValue6 = new DoubleValue(
      skillAction.action_value_6,
      new eActionValue(eActionValue.VALUE6)
    );
    this.actionValue7 = new DoubleValue(
      skillAction.action_value_7,
      new eActionValue(eActionValue.VALUE7)
    );
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

  protected buildExpression(expressionMode: Expression): string;
  protected buildExpression(
    expressionMode: Expression,
    property: Property
  ): string;
  protected buildExpression(
    expressionMode: Expression,
    roundingMode: RoundingMode,
    property: Property
  ): string;
  protected buildExpression(
    expressionMode: Expression,
    actionValues: ActionValue[] | null,
    roundingMode: RoundingMode | null,
    property: Property
  ): string;
  protected buildExpression(
    expressionMode: Expression,
    actionValues: ActionValue[] | null,
    roundingMode: RoundingMode | null,
    property: Property,
    hasBracesIfNeeded: boolean
  ): string;
  protected buildExpression(expressionMode: Expression, ...a: any[]): string {
    const { actionValues, roundingMode, property, hasBracesIfNeeded } =
      (function (actionValues, roundingMode, property, hasBracesIfNeeded) {
        switch (a.length) {
          case 0:
            return { actionValues, roundingMode, property, hasBracesIfNeeded };
          case 1:
            return {
              actionValues,
              roundingMode,
              property: a[0] as Property,
              hasBracesIfNeeded,
            };
          case 2:
            return {
              actionValues,
              roundingMode: (a[0] ?? roundingMode) as RoundingMode,
              property: a[1] as Property,
              hasBracesIfNeeded,
            };
          case 3:
            return {
              actionValues: (a[0] ?? actionValues) as ActionValue[],
              roundingMode: (a[1] ?? roundingMode) as RoundingMode,
              property: a[2] as Property,
              hasBracesIfNeeded,
            };
          case 4:
            return {
              actionValues: (a[0] ?? actionValues) as ActionValue[],
              roundingMode: (a[1] ?? roundingMode) as RoundingMode,
              property: a[2] as Property,
              hasBracesIfNeeded: a[3] as boolean,
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
          } else if (value.initial === 0) {
            part += `\`${value.perLevelValue.description}\`${value.perLevel} \* スキルLv`;
          } else if (value.perLevel === 0) {
            if (
              value.key === null &&
              roundingMode !== RoundingMode.UNNECESSARY
            ) {
              const initial = this.round(value.initial, 0, roundingMode);
              part += `\`${value.initialValue.description}\`${initial}`;
            } else {
              part += `\`${value.initialValue.description}\`${value.initial}`;
            }
          } else {
            part += `\`${value.initialValue.description}\`${value.initial} + \`${value.perLevelValue.description}\`${value.perLevel} \* スキルLv`;
          }
          if (value.key !== null) {
            if (value.initial === 0 && value.perLevel === 0) {
              continue;
            } else if (value.initial === 0 || value.perLevel === 0) {
              part += ` \* ${value.key.description()}`;
            } else {
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
    } else {
      let fixedValue = 0;
      for (const value of actionValues) {
        let part = 0;
        if (value.initial !== null && value.perLevel !== null) {
          const initialValue = value.initial;
          const perLevelValue = value.perLevel;
          part = initialValue + perLevelValue * maxCharaLevel;
        }
        if (value.key !== null) {
          part = part * property.getItem(value.key as PropertyKey);
        }
        fixedValue += part;
      }
      if (roundingMode === RoundingMode.UNNECESSARY) {
        return String(fixedValue);
      }
      return String(this.round(fixedValue, 0, roundingMode));
    }
  }

  private bracesIfNeeded(content: string) {
    if (content.includes("+")) {
      return `(${content})`;
    }
    return content;
  }

  private round(value: number, scale: number, roundingMode: RoundingMode) {
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

  localizedDetail(_: Expression, __: Property) {
    if (this.rawActionType === 0) {
      return "効果なし。";
    }
    return `${this.targetParameter.buildTargetClause()}に不明な効果[${
      this.rawActionType
    }]、内容${this.actionDetails.toString()}、係数${this.rawActionValues.toString()}。`;
  }
}

export const Expression = {
  EXPRESSION: "EXPRESSION",
  ORIGINAL: "ORIGINAL",
} as const;

export type Expression = typeof Expression[keyof typeof Expression];

export const RoundingMode = {
  UP: "UP",
  DOWN: "DOWN",
  UNNECESSARY: "UNNECESSARY",
  FLOOR: "FLOOR",
  HALF_UP: "HALF_UP",
  HALF_DOWN: "HALF_DOWN",
  CEILING: "CEILING",
} as const;

export type RoundingMode = typeof RoundingMode[keyof typeof RoundingMode];

export class ActionValue {
  initial: number;
  perLevel: number;
  key: PropertyKey | null;
  initialValue: DoubleValue;
  perLevelValue: DoubleValue;

  constructor(
    initial: DoubleValue,
    perLevel: DoubleValue,
    key: PropertyKey | null
  );
  constructor(
    initial: number,
    perLevel: number,
    vInitial: eActionValue,
    vPerLevel: eActionValue,
    key: PropertyKey | null
  );
  constructor(
    a: any,
    b: any,
    c: any,
    d?: eActionValue,
    e?: PropertyKey | null
  ) {
    if (
      typeof a === "number" &&
      typeof b === "number" &&
      c instanceof eActionValue &&
      d instanceof eActionValue &&
      e instanceof PropertyKey
    ) {
      this.initialValue = new DoubleValue(a, c);
      this.perLevelValue = new DoubleValue(b, d);
      this.initial = a;
      this.perLevel = b;
      this.key = e;
    } else if (
      a instanceof DoubleValue &&
      b instanceof DoubleValue &&
      (c instanceof PropertyKey || c === null)
    ) {
      this.initial = a.value;
      this.perLevel = b.value;
      this.key = c;
      this.initialValue = a;
      this.perLevelValue = b;
    } else {
      // エラーが出るので一応書いてあるがこのコードに到達することはない
      this.initial = 0;
      this.perLevel = 0;
      this.key = null;
      this.initialValue = new DoubleValue(
        0,
        new eActionValue(eActionValue.VALUE1)
      );
      this.perLevelValue = new DoubleValue(
        0,
        new eActionValue(eActionValue.VALUE1)
      );
    }
  }
}

export class CriticalModifier {
  static readonly normal = 0;
  static readonly critical = 1;
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    switch (value) {
      case 1:
        return new this(CriticalModifier.critical);
      default:
        return new this(CriticalModifier.normal);
    }
  }
}

export class ClassModifier {
  static readonly unknown = 0;
  static readonly physical = 1;
  static readonly magical = 2;
  static readonly inevitablePhysical = 3;
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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

export class PercentModifier {
  static readonly percent = 0;
  static readonly number = 1;
  value: number;

  private constructor(value: number) {
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

  static parse(value: number) {
    switch (value) {
      case 2:
        return new this(PercentModifier.percent);
      default:
        return new this(PercentModifier.number);
    }
  }
}

export class eActionValue {
  static readonly VALUE1 = 0;
  static readonly VALUE2 = 1;
  static readonly VALUE3 = 2;
  static readonly VALUE4 = 3;
  static readonly VALUE5 = 4;
  static readonly VALUE6 = 5;
  static readonly VALUE7 = 6;
  static readonly VALUE_NULL = null;
  value: number;

  constructor(value: number) {
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
        return "NULL";
    }
  }
}

export class DoubleValue {
  value: number;
  description: string;
  index: eActionValue;

  constructor(value: number, index: eActionValue) {
    this.value = value;
    this.index = index;
    this.description = index.description();
  }
}
