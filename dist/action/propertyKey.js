export class PropertyKey {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
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
PropertyKey.atk = 0;
PropertyKey.def = 1;
PropertyKey.dodge = 2;
PropertyKey.energyRecoveryRate = 3;
PropertyKey.energyReduceRate = 4;
PropertyKey.hp = 5;
PropertyKey.hpRecoveryRate = 6;
PropertyKey.lifeSteal = 7;
PropertyKey.magicCritical = 8;
PropertyKey.magicDef = 9;
PropertyKey.magicPenetrate = 10;
PropertyKey.magicStr = 11;
PropertyKey.physicalCritical = 12;
PropertyKey.physicalPenetrate = 13;
PropertyKey.waveEnergyRecovery = 14;
PropertyKey.waveHpRecovery = 15;
PropertyKey.accuracy = 16;
PropertyKey.unknown = 17;
