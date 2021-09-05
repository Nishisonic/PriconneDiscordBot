export class TargetAssignment {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
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
TargetAssignment.none = 0;
TargetAssignment.enemy = 1;
TargetAssignment.friendly = 2;
TargetAssignment.all = 3;
