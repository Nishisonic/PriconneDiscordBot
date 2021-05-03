export class ActionType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
ActionType.unknown = 0;
ActionType.damage = 1;
ActionType.move = 2;
ActionType.knock = 3;
ActionType.heal = 4;
ActionType.cure = 5;
ActionType.guard = 6;
ActionType.chooseArea = 7;
ActionType.ailment = 8;
ActionType.dot = 9;
ActionType.aura = 10;
ActionType.charm = 11;
ActionType.blind = 12;
ActionType.silence = 13;
ActionType.changeMode = 14;
ActionType.summon = 15;
ActionType.changeEnergy = 16;
ActionType.trigger = 17;
ActionType.charge = 18;
ActionType.damageCharge = 19;
ActionType.taunt = 20;
ActionType.invulnerable = 21;
ActionType.changePattern = 22;
ActionType.ifForChildren = 23;
ActionType.revival = 24;
ActionType.continuousAttack = 25;
ActionType.additive = 26;
ActionType.multiple = 27;
ActionType.ifForAll = 28;
ActionType.changeSearchArea = 29;
ActionType.instantDeath = 30;
ActionType.continuousAttackNearby = 31;
ActionType.enhanceLifeSteal = 32;
ActionType.enhanceStrikeBack = 33;
ActionType.accumulativeDamage = 34;
ActionType.seal = 35;
ActionType.attackField = 36;
ActionType.healField = 37;
ActionType.changeParameterField = 38;
ActionType.dotField = 39;
ActionType.ailmentField = 40;
ActionType.changeUBTime = 41;
ActionType.loopTrigger = 42;
ActionType.ifHasTarget = 43;
ActionType.waveStartIdle = 44;
ActionType.skillCount = 45;
ActionType.gravity = 46;
ActionType.upperLimitAttack = 47;
ActionType.hot = 48;
ActionType.dispel = 49;
ActionType.channel = 50;
ActionType.division = 51;
ActionType.changeWidth = 52;
ActionType.ifExistsFieldForAll = 53;
ActionType.stealth = 54;
ActionType.moveParts = 55;
ActionType.countBlind = 56;
ActionType.countDown = 57;
ActionType.stopFieldAction = 58;
ActionType.inhibitHealAction = 59;
ActionType.attackSeal = 60;
ActionType.fear = 61;
ActionType.awe = 62;
ActionType.loop = 63;
ActionType.toad = 69;
ActionType.knightGuard = 71;
ActionType.logBarrier = 73;
ActionType.divide = 74;
ActionType.actionByHitCount = 75;
ActionType.healDown = 76;
ActionType.passiveSeal = 77;
ActionType.passiveDamageUp = 78;
ActionType.ex = 90;
ActionType.exPlus = 91;
ActionType.changeEnergyRecoveryRatioByDamage = 92;
ActionType.ignoreDecoyAction = 93;