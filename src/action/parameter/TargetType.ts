import { TargetCount } from "./TargetCount.js";
import { TargetNumber } from "./TargetNumber.js";

export class TargetType {
  static readonly unknown = -1;
  static readonly zero = 0;
  static readonly none = 1;
  static readonly random = 2;
  static readonly near = 3;
  static readonly far = 4;
  static readonly hpAscending = 5;
  static readonly hpDescending = 6;
  static readonly self = 7;
  static readonly randomOnce = 8;
  static readonly forward = 9;
  static readonly backward = 10;
  static readonly absolute = 11;
  static readonly tpDescending = 12;
  static readonly tpAscending = 13;
  static readonly atkDescending = 14;
  static readonly atkAscending = 15;
  static readonly magicSTRDescending = 16;
  static readonly magicSTRAscending = 17;
  static readonly summon = 18;
  static readonly tpReducing = 19;
  static readonly physics = 20;
  static readonly magic = 21;
  static readonly allSummonRandom = 22;
  static readonly selfSummonRandom = 23;
  static readonly boss = 24;
  static readonly hpAscendingOrNear = 25;
  static readonly hpDescendingOrNear = 26;
  static readonly tpDescendingOrNear = 27;
  static readonly tpAscendingOrNear = 28;
  static readonly atkDescendingOrNear = 29;
  static readonly atkAscendingOrNear = 30;
  static readonly magicSTRDescendingOrNear = 31;
  static readonly magicSTRAscendingOrNear = 32;
  static readonly shadow = 33;
  static readonly nearWithoutSelf = 34;
  static readonly hpDescendingOrNearForward = 35;
  static readonly hpAscendingOrNearForward = 36;
  static readonly tpDescendingOrMaxForward = 37;
  static readonly bothAtkDescending = 38;
  static readonly bothAtkAscending = 39;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  exclusiveWithAll() {
    switch (this.value) {
      case TargetType.unknown:
      case TargetType.magic:
      case TargetType.physics:
      case TargetType.summon:
      case TargetType.boss:
        return ExclusiveAllType.not;
      case TargetType.nearWithoutSelf:
        return ExclusiveAllType.halfExclusive;
      default:
        return ExclusiveAllType.exclusive;
    }
  }

  ignoresOne() {
    switch (this.value) {
      case TargetType.unknown:
      case TargetType.random:
      case TargetType.randomOnce:
      case TargetType.absolute:
      case TargetType.summon:
      case TargetType.selfSummonRandom:
      case TargetType.allSummonRandom:
      case TargetType.magic:
      case TargetType.physics:
        return false;
      default:
        return true;
    }
  }

  description(): string;
  description(targetCount: TargetCount, localizedCount: string | null): string;
  description(
    targetNumber: TargetNumber,
    localizedCount: string | null
  ): string;
  description(value1?: TargetCount | TargetNumber, value2?: string | null) {
    if (value1 === undefined && value2 === undefined) {
      return this.description1();
    }
    if (
      value1 instanceof TargetCount &&
      (typeof value2 === "string" || value2 === null)
    ) {
      return this.description2(value1, value2);
    }
    if (
      value1 instanceof TargetNumber &&
      (typeof value2 === "string" || value2 === null)
    ) {
      return this.description3(value1, value2);
    }
    throw new Error();
  }

  private description1() {
    switch (this.value) {
      case TargetType.unknown:
        return "不明";
      case TargetType.random:
      case TargetType.randomOnce:
        return "ランダムな";
      case TargetType.zero:
      case TargetType.near:
      case TargetType.none:
        return "最も近い";
      case TargetType.far:
        return "最も遠い";
      case TargetType.hpAscending:
      case TargetType.hpAscendingOrNear:
        return "HP割合が一番低い";
      case TargetType.hpAscendingOrNearForward:
        return "HPが一番低い";
      case TargetType.hpDescendingOrNearForward:
        return "HPが一番高い";
      case TargetType.hpDescending:
      case TargetType.hpDescendingOrNear:
        return "HP割合が一番高い";
      case TargetType.self:
        return "自分";
      case TargetType.forward:
        return "一番後ろの";
      case TargetType.backward:
        return "一番前の";
      case TargetType.absolute:
        return "範囲内のターゲット";
      case TargetType.tpDescending:
      case TargetType.tpDescendingOrNear:
      case TargetType.tpDescendingOrMaxForward:
        return "TPが一番高い";
      case TargetType.tpAscending:
      case TargetType.tpReducing:
      case TargetType.tpAscendingOrNear:
        return "TPが一番低い";
      case TargetType.atkDescending:
      case TargetType.atkDescendingOrNear:
        return "物理攻撃力が一番高い";
      case TargetType.atkAscending:
      case TargetType.atkAscendingOrNear:
        return "物理攻撃力が一番低い";
      case TargetType.magicSTRDescending:
      case TargetType.magicSTRDescendingOrNear:
        return "魔法攻撃力が一番高い";
      case TargetType.magicSTRAscending:
      case TargetType.magicSTRAscendingOrNear:
        return "魔法攻撃力が一番低い";
      case TargetType.summon:
        return "召喚物";
      case TargetType.physics:
        return "物理攻撃を行う";
      case TargetType.magic:
        return "魔法攻撃を行う";
      case TargetType.allSummonRandom:
        return "ランダムな召喚物";
      case TargetType.selfSummonRandom:
        return "ランダムな自分の召喚物";
      case TargetType.boss:
        return "ボス級";
      case TargetType.shadow:
        return "シャドウ";
      case TargetType.nearWithoutSelf:
        return "自分以外最も近い";
      case TargetType.bothAtkDescending:
        return "物理or魔法攻撃力が最も高い";
      case TargetType.bothAtkAscending:
        return "物理or魔法攻撃力が最も低い";
      default:
        return "";
    }
  }

  private description2(
    targetCount: TargetCount,
    localizedCount: string | null
  ) {
    const localizedModifier =
      localizedCount === null ? targetCount.description() : localizedCount;
    switch (this.value) {
      case TargetType.unknown:
        return `不明種類${localizedModifier}`;
      case TargetType.zero:
      case TargetType.near:
      case TargetType.none:
        return `最も近い${localizedModifier}`;
      case TargetType.far:
        return `最も遠い${localizedModifier}`;
      case TargetType.hpAscending:
        return `HP割合が一番低い${localizedModifier}`;
      case TargetType.hpDescending:
        return `HP割合が一番高い${localizedModifier}`;
      case TargetType.hpAscendingOrNearForward:
        return `HPが一番低い${localizedModifier}`;
      case TargetType.hpDescendingOrNearForward:
        return `HPが一番高い${localizedModifier}`;
      case TargetType.forward:
        return `一番後ろの${localizedModifier}`;
      case TargetType.backward:
        return `一番前の${localizedModifier}`;
      case TargetType.tpDescending:
      case TargetType.tpDescendingOrNear:
      case TargetType.tpDescendingOrMaxForward:
        return `TPが一番高い${localizedModifier}`;
      case TargetType.tpAscending:
      case TargetType.tpReducing:
      case TargetType.tpAscendingOrNear:
        return `TPが一番低い${localizedModifier}`;
      case TargetType.atkDescending:
      case TargetType.atkDescendingOrNear:
        return `物理攻撃力が一番高い${localizedModifier}`;
      case TargetType.atkAscending:
      case TargetType.atkAscendingOrNear:
        return `物理攻撃力が一番低い${localizedModifier}`;
      case TargetType.magicSTRDescending:
      case TargetType.magicSTRDescendingOrNear:
        return `魔法攻撃力が一番高い${localizedModifier}`;
      case TargetType.magicSTRAscending:
      case TargetType.magicSTRAscendingOrNear:
        return `魔法攻撃力が一番低い${localizedModifier}`;
      case TargetType.random:
      case TargetType.randomOnce:
        return `ランダムな${localizedModifier}`;
      case TargetType.summon:
        return `${localizedModifier}召喚物`;
      case TargetType.physics:
        return `物理攻撃を行う${localizedModifier}`;
      case TargetType.magic:
        return `魔法攻撃を行う${localizedModifier}`;
      case TargetType.boss:
        return `ボス級${localizedModifier}`;
      case TargetType.shadow:
        return `${localizedModifier}シャドー`;
      case TargetType.nearWithoutSelf:
        return `${localizedModifier}自分以外最も近い`;
      case TargetType.bothAtkDescending:
        return `物理or魔法攻撃力が最も高い${localizedModifier}`;
      case TargetType.bothAtkAscending:
        return `物理or魔法攻撃力が最も低い${localizedModifier}`;
      default:
        return this.description();
    }
  }

  private description3(
    targetNumber: TargetNumber,
    localizedNumber: string | null
  ) {
    if (
      targetNumber.value === TargetNumber.second ||
      targetNumber.value === TargetNumber.third ||
      targetNumber.value === TargetNumber.fourth ||
      targetNumber.value === TargetNumber.fifth
    ) {
      const localizedModifier =
        localizedNumber === null ? targetNumber.description() : localizedNumber;
      switch (this.value) {
        case TargetType.unknown:
          return `${localizedModifier}不明種類`;
        case TargetType.zero:
        case TargetType.near:
        case TargetType.none:
          return `${localizedModifier}近い`;
        case TargetType.far:
          return `${localizedModifier}遠い`;
        case TargetType.hpAscending:
        case TargetType.hpAscendingOrNear:
          return `HP割合が${localizedModifier}低い`;
        case TargetType.hpDescending:
        case TargetType.hpDescendingOrNear:
          return `HP割合が${localizedModifier}高い`;
        case TargetType.hpAscendingOrNearForward:
          return `HPが${localizedModifier}低い`;
        case TargetType.hpDescendingOrNearForward:
          return `HPが${localizedModifier}高い`;
        case TargetType.forward:
          return `${localizedModifier}後の`;
        case TargetType.backward:
          return `${localizedModifier}前の`;
        case TargetType.tpDescending:
        case TargetType.tpDescendingOrNear:
          return `TPが${localizedModifier}高い`;
        case TargetType.tpAscending:
        case TargetType.tpReducing:
        case TargetType.tpAscendingOrNear:
          return `TPが${localizedModifier}低い`;
        case TargetType.atkDescending:
        case TargetType.atkDescendingOrNear:
          return `物理攻撃力が${localizedModifier}高い`;
        case TargetType.atkAscending:
        case TargetType.atkAscendingOrNear:
          return `物理攻撃力が${localizedModifier}低い`;
        case TargetType.magicSTRDescending:
        case TargetType.magicSTRDescendingOrNear:
          return `魔法攻撃力が${localizedModifier}高い`;
        case TargetType.magicSTRAscending:
        case TargetType.magicSTRAscendingOrNear:
          return `魔法攻撃力が${localizedModifier}低い`;
        case TargetType.nearWithoutSelf:
          return `自分以外${localizedModifier}近い`;
        case TargetType.bothAtkDescending:
          return `物理or魔法攻撃力が${localizedModifier}高い`;
        case TargetType.bothAtkAscending:
          return `物理or魔法攻撃力が${localizedModifier}低い`;
        default:
      }
    }
    return this.description();
  }
}

export const ExclusiveAllType = {
  not: 0,
  exclusive: 1,
  halfExclusive: 2,
} as const;
