import { SkillAction } from "../master.js";
import { ActionParameter } from "./actionParameter.js";

class ModeChangeType {
  static readonly unknown = 0;
  static readonly time = 1;
  static readonly energy = 2;
  static readonly release = 3;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class ModeChangeAction extends ActionParameter {
  modeChangeType: ModeChangeType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.modeChangeType = ModeChangeType.parse(this.actionDetail1);
  }

  localizedDetail() {
    switch (this.modeChangeType.value) {
      case ModeChangeType.time:
        return `行動パターンを${
          this.actionDetail2 % 10
        }に変化させる、効果時間 [${this.actionValue1.value}] 秒。`;
      case ModeChangeType.energy:
        return `TPが使い切るまで行動パターンを${
          this.actionDetail2 % 10
        }に変化させ、TPを毎秒 [${this.actionValue1.value}] 消耗する。`;
      case ModeChangeType.release:
        return `効果終了後、行動パターンを${
          this.actionDetail2 % 10
        }に戻させる。`;
      default:
        return super.localizedDetail();
    }
  }
}
