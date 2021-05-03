import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";
import { TargetType } from "./parameter/TargetType.js";

class ReflexiveType {
  static readonly unknown = 0;
  static readonly normal = 1;
  static readonly search = 2;
  static readonly position = 3;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class ReflexiveAction extends ActionParameter {
  reflexiveType: ReflexiveType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.reflexiveType = ReflexiveType.parse(skillAction.action_detail_1);
  }

  localizedDetail() {
    if (this.targetParameter.targetType.value === TargetType.absolute) {
      return `自分の視点を${this.targetParameter.buildTargetClause()}に向ける、距離 [${
        this.actionValue1.value
      }]。`;
    }
    if (this.reflexiveType.value === ReflexiveType.search) {
      return `サーチし、自分の視点を${this.targetParameter.buildTargetClause()}に向ける。`;
    }
    return `自分の視点を${this.targetParameter.buildTargetClause()}に向ける。`;
  }
}
