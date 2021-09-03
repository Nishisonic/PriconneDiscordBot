import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./actionParameter.js";

class BarrierType {
  static readonly physics = 1;
  static readonly magic = 2;
  static readonly all = 3;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class LogBarrierAction extends ActionParameter {
  barrierType: BarrierType;
  durationValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.barrierType = BarrierType.parse(this.actionValue1.value);
    this.actionValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    this.durationValues.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
  }

  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}にバリアを展開する、一回の行動で受けたダメージが [${
      this.actionValue5.value
    }] を超えた場合、ダメージが減衰される、減衰係数 [${this.buildExpression()}]（この値が小さいほど減衰されやすい）、効果時間 [${this.buildExpression(
      this.durationValues
    )}] 秒。`;
  }
}
