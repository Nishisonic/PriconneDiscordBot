export class TargetCount {
    constructor(value) {
        this.value = value;
        this.pluralModifier =
            this.value === 1
                ? new PluralModifier(PluralModifier.one)
                : new PluralModifier(PluralModifier.many);
    }
    static parse(value) {
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
TargetCount.zero = 0;
TargetCount.one = 1;
TargetCount.two = 2;
TargetCount.three = 3;
TargetCount.four = 4;
TargetCount.all = 99;
export class PluralModifier {
    constructor(modifier) {
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
PluralModifier.one = 0;
PluralModifier.many = 1;
