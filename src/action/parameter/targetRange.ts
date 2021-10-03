export class TargetRange {
  static readonly ZERO = 0;
  static readonly ALL = 1;
  static readonly FINITE = 2;
  static readonly INFINITE = 3;
  static readonly UNKNOWN = 4;
  rawRange: number;
  rangeType: number;

  private constructor(range: number) {
    if (range === -1) {
      this.rangeType = TargetRange.INFINITE;
    } else if (range === 0) {
      this.rangeType = TargetRange.ZERO;
    } else if (range > 0 && range < 2160) {
      this.rangeType = TargetRange.FINITE;
    } else if (range >= 2160) {
      this.rangeType = TargetRange.ALL;
      this.rawRange = 2160;
    } else {
      this.rangeType = TargetRange.UNKNOWN;
    }
    this.rawRange = range;
  }

  static parse(range: number) {
    return new this(range);
  }
}
