export class TargetNumber {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
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
TargetNumber.first = 0;
TargetNumber.second = 1;
TargetNumber.third = 2;
TargetNumber.fourth = 3;
TargetNumber.fifth = 4;
TargetNumber.other = 5;
