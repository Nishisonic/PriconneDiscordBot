export class ActionType {
  static readonly unknown = 0;
  static readonly damage = 1;
  static readonly move = 2;
  static readonly knock = 3;
  static readonly heal = 4;
  static readonly cure = 5;
  static readonly guard = 6;
  static readonly chooseArea = 7;
  static readonly ailment = 8;
  static readonly dot = 9;
  static readonly aura = 10;
  static readonly charm = 11;
  static readonly blind = 12;
  static readonly silence = 13;
  static readonly changeMode = 14;
  static readonly summon = 15;
  static readonly changeEnergy = 16;
  static readonly trigger = 17;
  static readonly charge = 18;
  static readonly damageCharge = 19;
  static readonly taunt = 20;
  static readonly invulnerable = 21;
  static readonly changePattern = 22;
  static readonly ifForChildren = 23;
  static readonly revival = 24;
  static readonly continuousAttack = 25;
  static readonly additive = 26;
  static readonly multiple = 27;
  static readonly ifForAll = 28;
  static readonly changeSearchArea = 29;
  static readonly instantDeath = 30;
  static readonly continuousAttackNearby = 31;
  static readonly enhanceLifeSteal = 32;
  static readonly enhanceStrikeBack = 33;
  static readonly accumulativeDamage = 34;
  static readonly seal = 35;
  static readonly attackField = 36;
  static readonly healField = 37;
  static readonly changeParameterField = 38;
  static readonly dotField = 39;
  static readonly ailmentField = 40;
  static readonly changeUBTime = 41;
  static readonly loopTrigger = 42;
  static readonly ifHasTarget = 43;
  static readonly waveStartIdle = 44;
  static readonly skillCount = 45;
  static readonly gravity = 46;
  static readonly upperLimitAttack = 47;
  static readonly hot = 48;
  static readonly dispel = 49;
  static readonly channel = 50;
  static readonly division = 51;
  static readonly changeWidth = 52;
  static readonly ifExistsFieldForAll = 53;
  static readonly stealth = 54;
  static readonly moveParts = 55;
  static readonly countBlind = 56;
  static readonly countDown = 57;
  static readonly stopFieldAction = 58;
  static readonly inhibitHealAction = 59;
  static readonly attackSeal = 60;
  static readonly fear = 61;
  static readonly awe = 62;
  static readonly loop = 63;
  static readonly toad = 69;
  static readonly knightGuard = 71;
  static readonly logBarrier = 73;
  static readonly divide = 74;
  static readonly actionByHitCount = 75;
  static readonly healDown = 76;
  static readonly passiveSeal = 77;
  static readonly passiveDamageUp = 78;
  static readonly damageByBehaviourAction = 79;
  static readonly ex = 90;
  static readonly exPlus = 91;
  static readonly changeEnergyRecoveryRatioByDamage = 92;
  static readonly ignoreDecoyAction = 93;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}