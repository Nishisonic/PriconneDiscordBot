import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";

class TriggerType {
  static readonly unknown = 0;
  static readonly dodge = 1;
  static readonly damage = 2;
  static readonly hp = 3;
  static readonly dead = 4;
  static readonly critical = 5;
  static readonly criticalWithSummon = 6;
  static readonly limitTime = 7;
  static readonly stealthFree = 8;
  static readonly Break = 9;
  static readonly dot = 10;
  static readonly allBreak = 11;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class TriggerAction extends ActionParameter {
  triggerType: TriggerType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.triggerType = TriggerType.parse(this.actionDetail1);
  }

  localizedDetail() {
    switch (this.triggerType.value) {
      case TriggerType.hp:
        return `トリガー：HPが [${this.actionValue3}%] 以下の時発動。`;
      case TriggerType.limitTime:
        return `トリガー：戦闘の残り時間は [${this.actionValue3}] 秒以下の時発動。`;
      case TriggerType.damage:
        return `トリガー：ダメージを受けた時 [${this.actionValue1}%] の確率で発動。`;
      case TriggerType.dead:
        return `トリガー：死亡時 [${this.actionValue1}%] の確率で発動。`;
      case TriggerType.critical:
        return `トリガー：クリティカルダメージを受けた時 [${this.actionValue1}%] の確率で発動。`;
      case TriggerType.stealthFree:
        return `トリガー：潜伏時 [${this.actionValue1}%] の確率で発動。`;
      case TriggerType.Break:
        return `トリガー：Breakされた時 [${this.actionValue1}%] の確率で発動、効果時間 [${this.actionValue3}] 秒。`;
      case TriggerType.dot:
        return `トリガー：継続ダメージを受けた時 [${this.actionValue1}%] の確率で発動。`;
      case TriggerType.allBreak:
        return "トリガー：すべての部位がBreakされた時発動。";
      default:
        return super.localizedDetail();
    }
  }
}
