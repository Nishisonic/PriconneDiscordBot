export class TargetCount {
  static readonly zero = 0;
  static readonly one = 1;
  static readonly two = 2;
  static readonly three = 3;
  static readonly four = 4;
  static readonly all = 99;
  value: number;
  pluralModifier: PluralModifier;

  private constructor(value: number) {
    this.value = value;
    this.pluralModifier =
      this.value === 1
        ? new PluralModifier(PluralModifier.one)
        : new PluralModifier(PluralModifier.many);
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case TargetCount.zero:
        return "";
      case TargetCount.one:
        return "1体";
      case TargetCount.two:
        return "2体";
      case TargetCount.three:
        return "3体";
      case TargetCount.four:
        return "4体";
      default:
        return "全体";
    }
  }
}

export class PluralModifier {
  static readonly one = 0;
  static readonly many = 1;
  modifier: number;

  constructor(modifier: number) {
    this.modifier = modifier;
  }

  description() {
    switch (this.modifier) {
      case PluralModifier.one:
        return "ターゲット";
      default:
        return "ターゲット";
    }
  }
}
