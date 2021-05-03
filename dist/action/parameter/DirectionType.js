export class DirectionType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
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
DirectionType.front = 1;
DirectionType.frontAndBack = 2;
DirectionType.all = 3;
