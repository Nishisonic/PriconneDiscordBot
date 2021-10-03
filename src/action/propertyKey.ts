export class PropertyKey {
  static readonly atk = 0;
  static readonly def = 1;
  static readonly dodge = 2;
  static readonly energyRecoveryRate = 3;
  static readonly energyReduceRate = 4;
  static readonly hp = 5;
  static readonly hpRecoveryRate = 6;
  static readonly lifeSteal = 7;
  static readonly magicCritical = 8;
  static readonly magicDef = 9;
  static readonly magicPenetrate = 10;
  static readonly magicStr = 11;
  static readonly physicalCritical = 12;
  static readonly physicalPenetrate = 13;
  static readonly waveEnergyRecovery = 14;
  static readonly waveHpRecovery = 15;
  static readonly accuracy = 16;
  static readonly unknown = 17;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case PropertyKey.atk:
        return "物理攻撃力";
      case PropertyKey.def:
        return "物理防御力";
      case PropertyKey.dodge:
        return "回避";
      case PropertyKey.energyRecoveryRate:
        return "TP上昇";
      case PropertyKey.energyReduceRate:
        return "TP消費軽減";
      case PropertyKey.hp:
        return "HP";
      case PropertyKey.hpRecoveryRate:
        return "回復量上昇";
      case PropertyKey.lifeSteal:
        return "HP吸収";
      case PropertyKey.magicCritical:
        return "魔法クリティカル";
      case PropertyKey.magicDef:
        return "魔法防御力";
      case PropertyKey.magicPenetrate:
        return "魔法貫通";
      case PropertyKey.magicStr:
        return "魔法攻撃力";
      case PropertyKey.physicalCritical:
        return "物理クリティカル";
      case PropertyKey.physicalPenetrate:
        return "物理貫通";
      case PropertyKey.waveEnergyRecovery:
        return "TP自動回復";
      case PropertyKey.waveHpRecovery:
        return "HP自動回復";
      case PropertyKey.accuracy:
        return "命中";
      default:
        return "不明";
    }
  }
}
