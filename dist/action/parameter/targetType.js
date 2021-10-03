import { TargetCount } from "./targetCount.js";
import { TargetNumber } from "./targetNumber.js";
export class TargetType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
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
    description(value1, value2) {
        if (value1 === undefined && value2 === undefined) {
            return this.description1();
        }
        if (value1 instanceof TargetCount &&
            (typeof value2 === "string" || value2 === null)) {
            return this.description2(value1, value2);
        }
        if (value1 instanceof TargetNumber &&
            (typeof value2 === "string" || value2 === null)) {
            return this.description3(value1, value2);
        }
        throw new Error();
    }
    description1() {
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
                return "範囲内の対象";
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
    description2(targetCount, localizedCount) {
        const localizedModifier = localizedCount === null ? targetCount.description() : localizedCount;
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
    description3(targetNumber, localizedNumber) {
        if (targetNumber.value === TargetNumber.second ||
            targetNumber.value === TargetNumber.third ||
            targetNumber.value === TargetNumber.fourth ||
            targetNumber.value === TargetNumber.fifth) {
            const localizedModifier = localizedNumber === null ? targetNumber.description() : localizedNumber;
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
TargetType.unknown = -1;
TargetType.zero = 0;
TargetType.none = 1;
TargetType.random = 2;
TargetType.near = 3;
TargetType.far = 4;
TargetType.hpAscending = 5;
TargetType.hpDescending = 6;
TargetType.self = 7;
TargetType.randomOnce = 8;
TargetType.forward = 9;
TargetType.backward = 10;
TargetType.absolute = 11;
TargetType.tpDescending = 12;
TargetType.tpAscending = 13;
TargetType.atkDescending = 14;
TargetType.atkAscending = 15;
TargetType.magicSTRDescending = 16;
TargetType.magicSTRAscending = 17;
TargetType.summon = 18;
TargetType.tpReducing = 19;
TargetType.physics = 20;
TargetType.magic = 21;
TargetType.allSummonRandom = 22;
TargetType.selfSummonRandom = 23;
TargetType.boss = 24;
TargetType.hpAscendingOrNear = 25;
TargetType.hpDescendingOrNear = 26;
TargetType.tpDescendingOrNear = 27;
TargetType.tpAscendingOrNear = 28;
TargetType.atkDescendingOrNear = 29;
TargetType.atkAscendingOrNear = 30;
TargetType.magicSTRDescendingOrNear = 31;
TargetType.magicSTRAscendingOrNear = 32;
TargetType.shadow = 33;
TargetType.nearWithoutSelf = 34;
TargetType.hpDescendingOrNearForward = 35;
TargetType.hpAscendingOrNearForward = 36;
TargetType.tpDescendingOrMaxForward = 37;
TargetType.bothAtkDescending = 38;
TargetType.bothAtkAscending = 39;
export const ExclusiveAllType = {
    not: 0,
    exclusive: 1,
    halfExclusive: 2,
};
