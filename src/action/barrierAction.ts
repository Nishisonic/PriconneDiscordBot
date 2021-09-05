import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

export class BarrierType {
  static readonly unknown = 0;
  static readonly physicalGuard = 1;
  static readonly magicalGuard = 2;
  static readonly physicalDrain = 3;
  static readonly magicalDrain = 4;
  static readonly bothGuard = 5;
  static readonly bothDrain = 6;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class BarrierAction extends ActionParameter {
  barrierType: BarrierType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.barrierType = BarrierType.parse(skillAction.action_detail_1);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
  }

  localizedDetail() {
    switch (this.barrierType.value) {
      case BarrierType.physicalGuard:
        return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理無効バリアを展開する、効果時間 [${
          this.actionValue3.value
        }] 秒。`;
      case BarrierType.magicalGuard:
        return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の魔法無効バリアを展開する、効果時間 [${
          this.actionValue3.value
        }] 秒。`;
      case BarrierType.physicalDrain:
        return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理吸収バリアを展開する、効果時間 [${
          this.actionValue3.value
        }] 秒。`;
      case BarrierType.magicalDrain:
        return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の魔法吸収バリアを展開する、効果時間 [${
          this.actionValue3.value
        }] 秒。`;
      case BarrierType.bothDrain:
        return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理&魔法吸収バリアを展開する、効果時間 [${
          this.actionValue3.value
        }] 秒。`;
      case BarrierType.bothGuard:
        return `${this.targetParameter.buildTargetClause()}に [${this.buildExpression()}] ダメージ分の物理&魔法無効バリアを展開する、効果時間 [${
          this.actionValue3.value
        }] 秒。`;
      default:
        return super.localizedDetail();
    }
  }
}
