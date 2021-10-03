export class DirectionType {
  static readonly front = 1;
  static readonly frontAndBack = 2;
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
      case DirectionType.front:
        return `自分を含めて前方`;
      case DirectionType.frontAndBack:
        return `前方と後方`;
      default:
        return "";
    }
  }
}
