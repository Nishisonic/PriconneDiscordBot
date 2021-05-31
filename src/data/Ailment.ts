class AilmentDetail {
  detail: any;

  public setDetail(obj: any) {
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
  static readonly charm = 0;
  static readonly confuse = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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

export class DotDetail {
  static readonly detain = 0;
  static readonly poison = 1;
  static readonly burn = 2;
  static readonly curse = 3;
  static readonly violentPoison = 4;
  static readonly hex = 5;
  static readonly compensation = 6;
  static readonly unknown = -1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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

export class ActionDetail {
  static readonly slow = 1;
  static readonly haste = 2;
  static readonly paralyse = 3;
  static readonly freeze = 4;
  static readonly bind = 5;
  static readonly sleep = 6;
  static readonly stun = 7;
  static readonly petrify = 8;
  static readonly detain = 9;
  static readonly faint = 10;
  static readonly timeStop = 11;
  static readonly unknown = 12;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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

export class AilmentType {
  static readonly knockBack = 3;
  static readonly action = 8;
  static readonly dot = 9;
  static readonly charm = 11;
  static readonly darken = 12;
  static readonly silence = 13;
  static readonly confuse = 19;
  static readonly instantDeath = 30;
  static readonly countBlind = 56;
  static readonly inhibitHeal = 59;
  static readonly attackSeal = 60;
  static readonly fear = 61;
  static readonly awe = 62;
  static readonly toad = 69;
  static readonly maxHP = 70;
  static readonly hPRegenerationDown = 76;
  static readonly damageTakenIncreased = 78;
  static readonly damageByBehaviour = 79;
  static readonly unknown = 80;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
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
      case AilmentType.hPRegenerationDown:
        return "HP回復量減少";
      case AilmentType.damageTakenIncreased:
        return "弱体被ダメージ上昇";
      case AilmentType.damageByBehaviour:
        return "行動時ダメージ";
      default:
        return "不明な効果";
    }
  }
}

export class Ailment {
  ailmentType: AilmentType;
  ailmentDetail: AilmentDetail | null;

  constructor(type: number, detail: number) {
    this.ailmentType = AilmentType.parse(type);
    this.ailmentDetail = new AilmentDetail();
    switch (this.ailmentType.value) {
      case AilmentType.action:
        this.ailmentDetail.setDetail(ActionDetail.parse(detail));
        break;
      case AilmentType.dot:
      case AilmentType.damageByBehaviour:
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
