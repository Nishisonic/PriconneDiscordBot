export class TargetNumber {
  static readonly first = 0;
  static readonly second = 1;
  static readonly third = 2;
  static readonly fourth = 3;
  static readonly fifth = 4;
  static readonly other = 5;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case TargetNumber.first:
        return "1番目";
      case TargetNumber.second:
        return "2番目";
      case TargetNumber.third:
        return "3番目";
      case TargetNumber.fourth:
        return "4番目";
      case TargetNumber.fifth:
        return "5番目";
      default:
        return "";
    }
  }
}
