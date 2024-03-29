import { PropertyKey } from "../propertyKey.js";

export interface RawProperty {
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  accuracy: number;
}

export class Property {
  hp: number;
  atk: number;
  magicStr: number;
  def: number;
  magicDef: number;
  physicalCritical: number;
  magicCritical: number;
  waveHpRecovery: number;
  waveEnergyRecovery: number;
  dodge: number;
  physicalPenetrate: number;
  magicPenetrate: number;
  lifeSteal: number;
  hpRecoveryRate: number;
  energyRecoveryRate: number;
  energyReduceRate: number;
  accuracy: number;

  getEffectivePhysicalHP() {
    return Math.round(this.hp * (1 + this.def / 100));
  }

  getEffectiveMagicalHP() {
    return Math.round(this.hp * (1 + this.magicDef / 100));
  }

  getEffectiveHP(physical: number, magical: number) {
    return Math.round(
      this.hp * (1 + (this.def * physical + this.magicDef * magical) / 10000)
    );
  }

  getPhysicalDamageCut() {
    return this.def / (100 + this.def);
  }

  getMagicalDamageCut() {
    return this.magicDef / (100 + this.magicDef);
  }

  getHpRecovery() {
    return 1 + this.hpRecoveryRate / 100;
  }

  getTpUpRate() {
    return 1 + this.energyRecoveryRate / 100;
  }

  getTpRemain() {
    return Math.round(this.energyReduceRate * 10);
  }

  constructor();
  constructor(property: Readonly<RawProperty>);
  constructor(
    hp: number,
    atk: number,
    magicStr: number,
    def: number,
    magicDef: number,
    physicalCritical: number,
    magicCritical: number,
    waveHpRecovery: number,
    waveEnergyRecovery: number,
    dodge: number,
    physicalPenetrate: number,
    magicPenetrate: number,
    lifeSteal: number,
    hpRecoveryRate: number,
    energyRecoveryRate: number,
    energyReduceRate: number,
    accuracy: number
  );

  constructor(
    value: number | RawProperty = 0,
    atk = 0,
    magicStr = 0,
    def = 0,
    magicDef = 0,
    physicalCritical = 0,
    magicCritical = 0,
    waveHpRecovery = 0,
    waveEnergyRecovery = 0,
    dodge = 0,
    physicalPenetrate = 0,
    magicPenetrate = 0,
    lifeSteal = 0,
    hpRecoveryRate = 0,
    energyRecoveryRate = 0,
    energyReduceRate = 0,
    accuracy = 0
  ) {
    if (typeof value === "number") {
      this.hp = value;
      this.atk = atk;
      this.magicStr = magicStr;
      this.def = def;
      this.magicDef = magicDef;
      this.physicalCritical = physicalCritical;
      this.magicCritical = magicCritical;
      this.waveHpRecovery = waveHpRecovery;
      this.waveEnergyRecovery = waveEnergyRecovery;
      this.dodge = dodge;
      this.physicalPenetrate = physicalPenetrate;
      this.magicPenetrate = magicPenetrate;
      this.lifeSteal = lifeSteal;
      this.hpRecoveryRate = hpRecoveryRate;
      this.energyRecoveryRate = energyRecoveryRate;
      this.energyReduceRate = energyReduceRate;
      this.accuracy = accuracy;
    } else {
      const {
        hp,
        atk,
        magic_str,
        def,
        magic_def,
        physical_critical,
        magic_critical,
        wave_hp_recovery,
        wave_energy_recovery,
        dodge,
        physical_penetrate,
        magic_penetrate,
        life_steal,
        hp_recovery_rate,
        energy_recovery_rate,
        energy_reduce_rate,
        accuracy,
      } = value;
      this.hp = hp;
      this.atk = atk;
      this.magicStr = magic_str;
      this.def = def;
      this.magicDef = magic_def;
      this.physicalCritical = physical_critical;
      this.magicCritical = magic_critical;
      this.waveHpRecovery = wave_hp_recovery;
      this.waveEnergyRecovery = wave_energy_recovery;
      this.dodge = dodge;
      this.physicalPenetrate = physical_penetrate;
      this.magicPenetrate = magic_penetrate;
      this.lifeSteal = life_steal;
      this.hpRecoveryRate = hp_recovery_rate;
      this.energyRecoveryRate = energy_recovery_rate;
      this.energyReduceRate = energy_reduce_rate;
      this.accuracy = accuracy;
    }
  }

  public reverse() {
    return new Property(
      -this.hp,
      -this.atk,
      -this.magicStr,
      -this.def,
      -this.magicDef,
      -this.physicalCritical,
      -this.magicCritical,
      -this.waveHpRecovery,
      -this.waveEnergyRecovery,
      -this.dodge,
      -this.physicalPenetrate,
      -this.magicPenetrate,
      -this.lifeSteal,
      -this.hpRecoveryRate,
      -this.energyRecoveryRate,
      -this.energyReduceRate,
      -this.accuracy
    );
  }

  public plus(rProperty?: Property) {
    if (rProperty === undefined) {
      return this;
    }
    return new Property(
      this.hp + rProperty.hp,
      this.atk + rProperty.atk,
      this.magicStr + rProperty.magicStr,
      this.def + rProperty.def,
      this.magicDef + rProperty.magicDef,
      this.physicalCritical + rProperty.physicalCritical,
      this.magicCritical + rProperty.magicCritical,
      this.waveHpRecovery + rProperty.waveHpRecovery,
      this.waveEnergyRecovery + rProperty.waveEnergyRecovery,
      this.dodge + rProperty.dodge,
      this.physicalPenetrate + rProperty.physicalPenetrate,
      this.magicPenetrate + rProperty.magicPenetrate,
      this.lifeSteal + rProperty.lifeSteal,
      this.hpRecoveryRate + rProperty.hpRecoveryRate,
      this.energyRecoveryRate + rProperty.energyRecoveryRate,
      this.energyReduceRate + rProperty.energyReduceRate,
      this.accuracy + rProperty.accuracy
    );
  }

  public plusEqual(rProperty?: Property) {
    if (rProperty === undefined) {
      return this;
    }
    this.hp += rProperty.hp;
    this.atk += rProperty.atk;
    this.magicStr += rProperty.magicStr;
    this.def += rProperty.def;
    this.magicDef += rProperty.magicDef;
    this.physicalCritical += rProperty.physicalCritical;
    this.magicCritical += rProperty.magicCritical;
    this.waveHpRecovery += rProperty.waveHpRecovery;
    this.waveEnergyRecovery += rProperty.waveEnergyRecovery;
    this.dodge += rProperty.dodge;
    this.physicalPenetrate += rProperty.physicalPenetrate;
    this.magicPenetrate += rProperty.magicPenetrate;
    this.lifeSteal += rProperty.lifeSteal;
    this.hpRecoveryRate += rProperty.hpRecoveryRate;
    this.energyRecoveryRate += rProperty.energyRecoveryRate;
    this.energyReduceRate += rProperty.energyReduceRate;
    this.accuracy += rProperty.accuracy;
    return this;
  }

  public multiply(multiplier: number) {
    return new Property(
      this.hp * multiplier,
      this.atk * multiplier,
      this.magicStr * multiplier,
      this.def * multiplier,
      this.magicDef * multiplier,
      this.physicalCritical * multiplier,
      this.magicCritical * multiplier,
      this.waveHpRecovery * multiplier,
      this.waveEnergyRecovery * multiplier,
      this.dodge * multiplier,
      this.physicalPenetrate * multiplier,
      this.magicPenetrate * multiplier,
      this.lifeSteal * multiplier,
      this.hpRecoveryRate * multiplier,
      this.energyRecoveryRate * multiplier,
      this.energyReduceRate * multiplier,
      this.accuracy * multiplier
    );
  }

  public multiplyEqual(multiplier: number) {
    this.hp *= multiplier;
    this.atk *= multiplier;
    this.magicStr *= multiplier;
    this.def *= multiplier;
    this.magicDef *= multiplier;
    this.physicalCritical *= multiplier;
    this.magicCritical *= multiplier;
    this.waveHpRecovery *= multiplier;
    this.waveEnergyRecovery *= multiplier;
    this.dodge *= multiplier;
    this.physicalPenetrate *= multiplier;
    this.magicPenetrate *= multiplier;
    this.lifeSteal *= multiplier;
    this.hpRecoveryRate *= multiplier;
    this.energyRecoveryRate *= multiplier;
    this.energyReduceRate *= multiplier;
    this.accuracy *= multiplier;
    return this;
  }

  public getCeiled() {
    return new Property(
      Math.ceil(this.hp),
      Math.ceil(this.atk),
      Math.ceil(this.magicStr),
      Math.ceil(this.def),
      Math.ceil(this.magicDef),
      Math.ceil(this.physicalCritical),
      Math.ceil(this.magicCritical),
      Math.ceil(this.waveHpRecovery),
      Math.ceil(this.waveEnergyRecovery),
      Math.ceil(this.dodge),
      Math.ceil(this.physicalPenetrate),
      Math.ceil(this.magicPenetrate),
      Math.ceil(this.lifeSteal),
      Math.ceil(this.hpRecoveryRate),
      Math.ceil(this.energyRecoveryRate),
      Math.ceil(this.energyReduceRate),
      Math.ceil(this.accuracy)
    );
  }

  public roundThenSubtract(rProperty: Property) {
    return new Property(
      this.getHp() - rProperty.getHp(),
      this.getAtk() - rProperty.getAtk(),
      this.getMagicStr() - rProperty.getMagicStr(),
      this.getDef() - rProperty.getDef(),
      this.getMagicDef() - rProperty.getMagicDef(),
      this.getPhysicalCritical() - rProperty.getPhysicalCritical(),
      this.getMagicCritical() - rProperty.getMagicCritical(),
      this.getWaveHpRecovery() - rProperty.getWaveHpRecovery(),
      this.getWaveEnergyRecovery() - rProperty.getWaveEnergyRecovery(),
      this.getDodge() - rProperty.getDodge(),
      this.getPhysicalPenetrate() - rProperty.getPhysicalPenetrate(),
      this.getMagicPenetrate() - rProperty.getMagicPenetrate(),
      this.getLifeSteal() - rProperty.getLifeSteal(),
      this.getHpRecoveryRate() - rProperty.getHpRecoveryRate(),
      this.getEnergyRecoveryRate() - rProperty.getEnergyRecoveryRate(),
      this.getEnergyReduceRate() - rProperty.getEnergyReduceRate(),
      this.getAccuracy() - rProperty.getAccuracy()
    );
  }

  public static getPropertyWithKeyAndValue(
    property: Property = new Property(),
    key: PropertyKey,
    value: number
  ) {
    switch (key.value) {
      case PropertyKey.atk:
        property.atk += value;
        return property;
      case PropertyKey.def:
        property.def += value;
        return property;
      case PropertyKey.dodge:
        property.dodge += value;
        return property;
      case PropertyKey.energyRecoveryRate:
        property.energyRecoveryRate += value;
        return property;
      case PropertyKey.energyReduceRate:
        property.energyReduceRate += value;
        return property;
      case PropertyKey.hp:
        property.hp += value;
        return property;
      case PropertyKey.hpRecoveryRate:
        property.hpRecoveryRate += value;
        return property;
      case PropertyKey.lifeSteal:
        property.lifeSteal += value;
        return property;
      case PropertyKey.magicCritical:
        property.magicCritical += value;
        return property;
      case PropertyKey.magicDef:
        property.magicDef += value;
        return property;
      case PropertyKey.magicPenetrate:
        property.magicPenetrate += value;
        return property;
      case PropertyKey.magicStr:
        property.magicStr += value;
        return property;
      case PropertyKey.physicalCritical:
        property.physicalCritical += value;
        return property;
      case PropertyKey.physicalPenetrate:
        property.physicalPenetrate += value;
        return property;
      case PropertyKey.waveEnergyRecovery:
        property.waveEnergyRecovery += value;
        return property;
      case PropertyKey.waveHpRecovery:
        property.waveHpRecovery += value;
        return property;
      case PropertyKey.accuracy:
        property.accuracy += value;
        return property;
      default:
        return property;
    }
  }

  public getItem(key: PropertyKey) {
    switch (key.value) {
      case PropertyKey.atk:
        return this.atk;
      case PropertyKey.def:
        return this.def;
      case PropertyKey.dodge:
        return this.dodge;
      case PropertyKey.energyRecoveryRate:
        return this.energyRecoveryRate;
      case PropertyKey.energyReduceRate:
        return this.energyReduceRate;
      case PropertyKey.hp:
        return this.hp;
      case PropertyKey.hpRecoveryRate:
        return this.hpRecoveryRate;
      case PropertyKey.lifeSteal:
        return this.lifeSteal;
      case PropertyKey.magicCritical:
        return this.magicCritical;
      case PropertyKey.magicDef:
        return this.magicDef;
      case PropertyKey.magicPenetrate:
        return this.magicPenetrate;
      case PropertyKey.magicStr:
        return this.magicStr;
      case PropertyKey.physicalCritical:
        return this.physicalCritical;
      case PropertyKey.physicalPenetrate:
        return this.physicalPenetrate;
      case PropertyKey.waveEnergyRecovery:
        return this.waveEnergyRecovery;
      case PropertyKey.waveHpRecovery:
        return this.waveHpRecovery;
      case PropertyKey.accuracy:
        return this.accuracy;
      default:
        return 0;
    }
  }

  public clone() {
    return new Property();
  }

  public setHp(hp: number) {
    this.hp = hp;
  }

  public setAtk(atk: number) {
    this.atk = atk;
  }

  public setMagicStr(magicStr: number) {
    this.magicStr = magicStr;
  }

  public setDef(def: number) {
    this.def = def;
  }

  public setMagicDef(magicDef: number) {
    this.magicDef = magicDef;
  }

  public setPhysicalCritical(physicalCritical: number) {
    this.physicalCritical = physicalCritical;
  }

  public setMagicCritical(magicCritical: number) {
    this.magicCritical = magicCritical;
  }

  public setWaveHpRecovery(waveHpRecovery: number) {
    this.waveHpRecovery = waveHpRecovery;
  }

  public setWaveEnergyRecovery(waveEnergyRecovery: number) {
    this.waveEnergyRecovery = waveEnergyRecovery;
  }

  public setDodge(dodge: number) {
    this.dodge = dodge;
  }

  public setPhysicalPenetrate(physicalPenetrate: number) {
    this.physicalPenetrate = physicalPenetrate;
  }

  public setMagicPenetrate(magicPenetrate: number) {
    this.magicPenetrate = magicPenetrate;
  }

  public setLifeSteal(lifeSteal: number) {
    this.lifeSteal = lifeSteal;
  }

  public setHpRecoveryRate(hpRecoveryRate: number) {
    this.hpRecoveryRate = hpRecoveryRate;
  }

  public setEnergyRecoveryRate(energyRecoveryRate: number) {
    this.energyRecoveryRate = energyRecoveryRate;
  }

  public setEnergyReduceRate(energyReduceRate: number) {
    this.energyReduceRate = energyReduceRate;
  }

  public setAccuracy(accuracy: number) {
    this.accuracy = accuracy;
  }

  public getHp() {
    return Math.round(this.hp);
  }

  public getAtk() {
    return Math.round(this.atk);
  }

  public getMagicStr() {
    return Math.round(this.magicStr);
  }

  public getDef() {
    return Math.round(this.def);
  }

  public getMagicDef() {
    return Math.round(this.magicDef);
  }

  public getPhysicalCritical() {
    return Math.round(this.physicalCritical);
  }

  public getMagicCritical() {
    return Math.round(this.magicCritical);
  }

  public getWaveHpRecovery() {
    return Math.round(this.waveHpRecovery);
  }

  public getWaveEnergyRecovery() {
    return Math.round(this.waveEnergyRecovery);
  }

  public getDodge() {
    return Math.round(this.dodge);
  }

  public getPhysicalPenetrate() {
    return Math.round(this.physicalPenetrate);
  }

  public getMagicPenetrate() {
    return Math.round(this.magicPenetrate);
  }

  public getLifeSteal() {
    return Math.round(this.lifeSteal);
  }

  public getHpRecoveryRate() {
    return Math.round(this.hpRecoveryRate);
  }

  public getEnergyRecoveryRate() {
    return Math.round(this.energyRecoveryRate);
  }

  public getEnergyReduceRate() {
    return Math.round(this.energyReduceRate);
  }

  public getAccuracy() {
    return Math.round(this.accuracy);
  }

  public toString() {
    return (
      `物理攻撃力：${Math.round(this.atk)}(${this.atk})\n` +
      `魔法攻撃力：${Math.round(this.magicStr)}(${this.magicStr})\n` +
      `物理防御力：${Math.round(this.def)}(${this.def})\n` +
      `魔法防御力：${Math.round(this.magicDef)}(${this.magicDef})\n` +
      `HP：${Math.round(this.hp)}(${this.hp})\n` +
      `物理クリティカル：${this.physicalCritical}\n` +
      `回避：${this.dodge}\n` +
      `魔法クリティカル：${this.magicCritical}\n` +
      `HP自動回復：${this.waveHpRecovery}\n` +
      `TP自動回復：${this.waveEnergyRecovery}\n` +
      `HP吸収：${this.lifeSteal}\n` +
      `回復量上昇：${this.hpRecoveryRate}\n` +
      `TP上昇：${this.energyRecoveryRate}\n` +
      `命中：${this.accuracy}\n` +
      `TP消費軽減：${this.energyReduceRate}\n` +
      `物理貫通：${this.physicalPenetrate}\n` +
      `魔法貫通：${this.magicPenetrate}`
    );
  }
}
