export class TargetRange {
    constructor(range) {
        if (range == -1) {
            this.rangeType = TargetRange.INFINITE;
        }
        else if (range == 0) {
            this.rangeType = TargetRange.ZERO;
        }
        else if (range > 0 && range < 2160) {
            this.rangeType = TargetRange.FINITE;
        }
        else if (range >= 2160) {
            this.rangeType = TargetRange.ALL;
            this.rawRange = 2160;
        }
        else {
            this.rangeType = TargetRange.UNKNOWN;
        }
        this.rawRange = range;
    }
    static parse(range) {
        return new this(range);
    }
}
TargetRange.ZERO = 0;
TargetRange.ALL = 1;
TargetRange.FINITE = 2;
TargetRange.INFINITE = 3;
TargetRange.UNKNOWN = 4;
