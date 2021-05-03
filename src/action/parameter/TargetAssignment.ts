export class TargetAssignment {
  static readonly none = 0;
  static readonly enemy = 1;
  static readonly friendly = 2;
  static readonly all = 3;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case TargetAssignment.enemy:
        return "敵";
      case TargetAssignment.friendly:
        return "味方";
      case TargetAssignment.all:
        return "敵と味方";
      default:
        return "";
    }
  }
}
