import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";

export class LoopMotionRepeatAction extends ActionParameter {
  successClause: string | null = null;
  failureClause: string | null = null;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    if (this.actionDetail2 !== 0) {
      this.successClause = `効果時間終了後、[アクション${
        this.actionDetail2 % 10
      }] を使う。`;
    }
    if (this.actionDetail3 !== 0) {
      this.failureClause = `効果が中断されたあと、[アクション${
        this.actionDetail3 % 10
      }] を使う。`;
    }
  }

  localizedDetail() {
    const mainClause = `[${this.actionValue2.value}] 秒ごとに [アクション${
      this.actionDetail1 % 10
    }] を使い、最大 [${
      this.actionValue1.value
    }] 秒まで続く。受けたダメージ量が [${
      this.actionValue3.value
    }] を超えた時この効果を中断する。`;
    if (this.successClause !== null && this.failureClause !== null) {
      return mainClause + this.successClause + this.failureClause;
    }
    if (this.successClause !== null) {
      return mainClause + this.successClause;
    }
    if (this.failureClause !== null) {
      return mainClause + this.failureClause;
    }
    return mainClause;
  }
}
