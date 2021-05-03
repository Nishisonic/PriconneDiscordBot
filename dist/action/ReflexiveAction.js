import { ActionParameter } from "./ActionParameter.js";
import { TargetType } from "./parameter/TargetType.js";
class ReflexiveType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
ReflexiveType.unknown = 0;
ReflexiveType.normal = 1;
ReflexiveType.search = 2;
ReflexiveType.position = 3;
export class ReflexiveAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.reflexiveType = ReflexiveType.parse(skillAction.action_detail_1);
    }
    localizedDetail() {
        if (this.targetParameter.targetType.value === TargetType.absolute) {
            return `自分の視点を${this.targetParameter.buildTargetClause()}に向ける、距離 [${this.actionValue1.value}]。`;
        }
        if (this.reflexiveType.value === ReflexiveType.search) {
            return `サーチし、自分の視点を${this.targetParameter.buildTargetClause()}に向ける。`;
        }
        return `自分の視点を${this.targetParameter.buildTargetClause()}に向ける。`;
    }
}
