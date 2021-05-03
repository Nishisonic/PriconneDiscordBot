class AilmentDetail {
    setDetail(obj) {
        this.detail = obj;
    }
    description() {
        if (this.detail instanceof DotDetail) {
            return this.detail.description();
        }
        if (this.detail instanceof ActionDetail) {
            return this.detail.description();
        }
        if (this.detail instanceof CharmDetail) {
            return this.detail.description();
        }
        return "不明";
    }
}
class CharmDetail {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case CharmDetail.charm:
                return "魅了";
            case CharmDetail.confuse:
                return "混乱";
            default:
                return "不明";
        }
    }
}
CharmDetail.charm = 0;
CharmDetail.confuse = 1;
export class DotDetail {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case DotDetail.detain:
                return "拘留(ダメージ)";
            case DotDetail.poison:
                return "毒";
            case DotDetail.burn:
                return "火傷";
            case DotDetail.curse:
                return "呪い";
            case DotDetail.violentPoison:
                return "猛毒";
            case DotDetail.hex:
                return "呪詛";
            default:
                return "不明";
        }
    }
}
DotDetail.detain = 0;
DotDetail.poison = 1;
DotDetail.burn = 2;
DotDetail.curse = 3;
DotDetail.violentPoison = 4;
DotDetail.hex = 5;
DotDetail.unknown = -1;
export class ActionDetail {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case ActionDetail.slow:
                return "スロウ";
            case ActionDetail.haste:
                return "ヘイスト";
            case ActionDetail.paralyse:
                return "麻痺";
            case ActionDetail.freeze:
                return "凍結";
            case ActionDetail.bind:
                return "束縛";
            case ActionDetail.sleep:
                return "睡眠";
            case ActionDetail.stun:
                return "スタン";
            case ActionDetail.petrify:
                return "石化";
            case ActionDetail.detain:
                return "拘留";
            case ActionDetail.faint:
                return "気絶";
            case ActionDetail.timeStop:
                return "ノックバック";
            default:
                return "不明";
        }
    }
}
ActionDetail.slow = 1;
ActionDetail.haste = 2;
ActionDetail.paralyse = 3;
ActionDetail.freeze = 4;
ActionDetail.bind = 5;
ActionDetail.sleep = 6;
ActionDetail.stun = 7;
ActionDetail.petrify = 8;
ActionDetail.detain = 9;
ActionDetail.faint = 10;
ActionDetail.timeStop = 11;
ActionDetail.unknown = 12;
export class AilmentType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
    description() {
        switch (this.value) {
            case AilmentType.knockBack:
                return "ノックバック";
            case AilmentType.action:
                return "アクション";
            case AilmentType.dot:
                return "継続ダメージ";
            case AilmentType.charm:
                return "魅了";
            case AilmentType.darken:
                return "物理暗闇";
            case AilmentType.silence:
                return "沈黙";
            case AilmentType.instantDeath:
                return "即死";
            case AilmentType.confuse:
                return "混乱";
            case AilmentType.countBlind:
                return "千里眼";
            case AilmentType.inhibitHeal:
                return "回復阻害";
            case AilmentType.fear:
                return "恐慌";
            case AilmentType.attackSeal:
                return "刻印付与";
            case AilmentType.awe:
                return "畏怖";
            case AilmentType.toad:
                return "変身";
            case AilmentType.maxHP:
                return "HP変化";
            default:
                return "不明な効果";
        }
    }
}
AilmentType.knockBack = 3;
AilmentType.action = 8;
AilmentType.dot = 9;
AilmentType.charm = 11;
AilmentType.darken = 12;
AilmentType.silence = 13;
AilmentType.confuse = 19;
AilmentType.instantDeath = 30;
AilmentType.countBlind = 56;
AilmentType.inhibitHeal = 59;
AilmentType.attackSeal = 60;
AilmentType.fear = 61;
AilmentType.awe = 62;
AilmentType.toad = 69;
AilmentType.maxHP = 70;
AilmentType.unknown = 71;
export class Ailment {
    constructor(type, detail) {
        this.ailmentType = AilmentType.parse(type);
        this.ailmentDetail = new AilmentDetail();
        switch (this.ailmentType.value) {
            case AilmentType.action:
                this.ailmentDetail.setDetail(ActionDetail.parse(detail));
                break;
            case AilmentType.dot:
                this.ailmentDetail.setDetail(DotDetail.parse(detail));
                break;
            case AilmentType.charm:
                this.ailmentDetail.setDetail(CharmDetail.parse(detail));
                break;
            default:
                this.ailmentDetail = null;
                break;
        }
    }
    description() {
        if (this.ailmentDetail !== null) {
            return this.ailmentDetail.description();
        }
        return this.ailmentType.description();
    }
}
