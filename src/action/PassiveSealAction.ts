import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";

class ePassiveTiming {
  static readonly Unknown = -1;
  static readonly Buff = 1;
  static readonly Damage = 2;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case ePassiveTiming.Buff:
        return "バフ";
      case ePassiveTiming.Damage:
        return "ダメージ";
      default:
        return "不明";
    }
  }
}

class eSealTarget {
  static readonly Unknown = -1;
  static readonly Self = 0;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case eSealTarget.Self:
        return "自分";
      default:
        return "不明";
    }
  }
}

export class PassiveSealAction extends ActionParameter {
  sealNumLimit: number;
  sealDuration: ActionValue[] = [];
  lifeTime: ActionValue[] = [];
  passiveTiming: ePassiveTiming;
  sealTarget: eSealTarget;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.sealNumLimit = this.actionValue1.value;
    this.sealDuration.push(
      new ActionValue(this.actionValue3, this.actionValue4, null)
    );
    this.lifeTime.push(
      new ActionValue(this.actionValue5, this.actionValue6, null)
    );
    this.passiveTiming = ePassiveTiming.parse(this.actionDetail1);
    this.sealTarget = eSealTarget.parse(this.actionDetail3);
  }

  localizedDetail() {
    return `パッシブ：${this.targetParameter.buildTargetClause()}が${this.passiveTiming.description()}を受けるたび、${this.sealTarget.description()}にマーク [ID: ${
      this.actionValue2.value
    }] を [${
      this.actionDetail2
    }] 追加する、マークの継続時間 [${this.buildExpression(
      this.sealDuration
    )}] 秒、最大 [${
      this.actionValue1.value
    }] までスタックする。このパッシブ効果は [${this.buildExpression(
      this.lifeTime
    )}] 秒継続する。`;
  }
}
