import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  PercentModifier,
} from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";

class AuraType {
  static readonly none = -1;
  static readonly atk = 1;
  static readonly def = 2;
  static readonly magicStr = 3;
  static readonly magicDef = 4;
  static readonly dodge = 5;
  static readonly physicalCritical = 6;
  static readonly magicalCritical = 7;
  static readonly energyRecoverRate = 8;
  static readonly lifeSteal = 9;
  static readonly moveSpeed = 10;
  static readonly physicalCriticalDamage = 11;
  static readonly magicalCriticalDamage = 12;
  static readonly accuracy = 13;
  static readonly receivedCriticalDamage = 14;
  static readonly maxHP = 100;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case AuraType.atk:
        return PropertyKey.parse(PropertyKey.atk).description();
      case AuraType.def:
        return PropertyKey.parse(PropertyKey.def).description();
      case AuraType.magicStr:
        return PropertyKey.parse(PropertyKey.magicStr).description();
      case AuraType.magicDef:
        return PropertyKey.parse(PropertyKey.magicDef).description();
      case AuraType.dodge:
        return PropertyKey.parse(PropertyKey.dodge).description();
      case AuraType.physicalCritical:
        return PropertyKey.parse(PropertyKey.physicalCritical).description();
      case AuraType.magicalCritical:
        return PropertyKey.parse(PropertyKey.magicCritical).description();
      case AuraType.energyRecoverRate:
        return PropertyKey.parse(PropertyKey.energyRecoveryRate).description();
      case AuraType.lifeSteal:
        return PropertyKey.parse(PropertyKey.lifeSteal).description();
      case AuraType.moveSpeed:
        return "移動速度";
      case AuraType.physicalCriticalDamage:
        return "物理クリティカルダメージ";
      case AuraType.magicalCriticalDamage:
        return "魔法クリティカルダメージ";
      case AuraType.accuracy:
        return PropertyKey.parse(PropertyKey.accuracy).description();
      case AuraType.receivedCriticalDamage:
        return "受けるクリティカルダメージ";
      case AuraType.maxHP:
        return "最大HP";
      default:
        return "";
    }
  }
}

class AuraActionType {
  static readonly raise = 0;
  static readonly reduce = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    if (value % 10 === 1) {
      return new this(AuraActionType.reduce);
    }
    return new this(AuraActionType.raise);
  }

  description() {
    switch (this.value) {
      case AuraActionType.raise:
        return "アップ";
      case AuraActionType.reduce:
        return "ダウン";
      default:
        return "";
    }
  }

  toggle() {
    switch (this.value) {
      case AuraActionType.raise:
        return AuraActionType.parse(AuraActionType.reduce);
      case AuraActionType.raise:
        return AuraActionType.parse(AuraActionType.raise);
    }
    return AuraActionType.parse(AuraActionType.raise);
  }
}

class BreakType {
  static readonly Unknown = -1;
  static readonly Normal = 1;
  static readonly Break = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class AuraAction extends ActionParameter {
  percentModifier: PercentModifier;
  durationValues: ActionValue[] = [];
  auraActionType: AuraActionType;
  auraType: AuraType;
  breakType: BreakType;
  isConstant = false;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.percentModifier = PercentModifier.parse(this.actionValue1.value);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
    this.durationValues.push(
      new ActionValue(this.actionValue4, this.actionValue5, null)
    );
    this.auraActionType = AuraActionType.parse(this.actionDetail1);
    if (this.actionDetail1 === 1) {
      this.auraType = AuraType.parse(AuraType.maxHP);
    } else if (this.actionDetail1 >= 1000) {
      this.auraType = AuraType.parse(this.actionDetail1 % 1000 / 10);
      this.isConstant = true;
    } else {
      this.auraType = AuraType.parse(Math.floor(this.actionDetail1 / 10));
    }
    this.breakType = BreakType.parse(this.actionDetail2);
    if (this.auraType.value === AuraType.receivedCriticalDamage) {
      this.auraActionType = this.auraActionType.toggle();
      this.percentModifier = PercentModifier.parse(PercentModifier.percent);
    }
  }

  localizedDetail() {
    const r = this.buildExpression();
    switch (this.breakType.value) {
      case BreakType.Break:
        return `Break期間中、${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${r}${this.percentModifier.description()}] ${this.auraActionType.description()}。${this.isConstant ? "この効果は他の値への効果の影響を受けない（ディスペルなど効果解除の影響は受ける）。" : "" }`;
      default: {
        return `${this.targetParameter.buildTargetClause()}の${this.auraType.description()}を [${r}${this.percentModifier.description()}] ${this.auraActionType.description()}、効果時間 [${this.buildExpression(
          this.durationValues
        )}] 秒。`;
      }
    }
  }
}
