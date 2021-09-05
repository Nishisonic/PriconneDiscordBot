import { ActionParameter } from "./actionParameter.js";
class HPtype {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
HPtype.unknown = 0;
HPtype.max = 1;
HPtype.current = 2;
HPtype.originalMax = 3;
export class RatioDamageAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.hptype = HPtype.parse(this.actionDetail1);
    }
    localizedDetail() {
        switch (this.hptype.value) {
            case HPtype.max:
                return `${this.targetParameter.buildTargetClause()}に最大HP [${this.buildExpression()}%] 分のダメージを与える。`;
            case HPtype.current:
                return `${this.targetParameter.buildTargetClause()}に残りHP [${this.buildExpression()}%] 分のダメージを与える。`;
            case HPtype.originalMax:
                return `${this.targetParameter.buildTargetClause()}に本来の最大HP [${this.buildExpression()}%] 分のダメージを与える。`;
            default:
                return super.localizedDetail();
        }
    }
}
