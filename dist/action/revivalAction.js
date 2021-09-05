import { ActionParameter } from "./actionParameter.js";
class RevivalType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
RevivalType.unknown = 0;
RevivalType.normal = 1;
RevivalType.phoenix = 2;
export class RevivalAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.revivalType = RevivalType.parse(this.actionDetail1);
    }
    localizedDetail() {
        switch (this.revivalType.value) {
            case RevivalType.normal:
                return `${this.targetParameter.buildTargetClause()}を復活させ、HPを [${Math.round(this.actionValue2.value * 100)}%] 回復させる。（この値はキャラの回復量上昇値に影響される）`;
            default:
                return super.localizedDetail();
        }
    }
}
