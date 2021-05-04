import { SkillAction } from "../master.js";
import { PropertyKey } from "./PropertyKey.js";
import { TargetParameter } from "./TargetParameter.js";

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

  protected buildExpression(
    actionValues = this.actionValues,
    hasBracesIfNeeded = false
  ) {
    let expression = "";
    for (const value of actionValues) {
      let part = "";

      if (value.initial !== null && value.perLevel !== null) {
        if (value.initial === 0 && value.perLevel === 0) {
          continue;
        } else if (value.initial === 0) {
          part += `\`${value.perLevelValue.description}\`${value.perLevel} \* スキルLv`;
        } else if (value.perLevel === 0) {
          part += `\`${value.initialValue.description}\`${value.initial}`;
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
  }

  private bracesIfNeeded(content: string) {
    if (content.includes("+")) {
      return `(${content})`;
    }
    return content;
  }

  localizedDetail() {
    if (this.rawActionType === 0) {
      return "効果なし。";
    }
    return `${this.targetParameter.buildTargetClause()}に不明な効果[${
      this.rawActionType
    }]、内容${this.actionDetails.toString()}、係数${this.rawActionValues.toString()}。`;
  }
}

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
        return "";
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
