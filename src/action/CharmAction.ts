import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  eActionValue,
} from "./ActionParameter.js";

class CharmType {
  static readonly unknown = -1;
  static readonly charm = 0;
  static readonly confusion = 1;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }
}

export class CharmAction extends ActionParameter {
  chanceValues: ActionValue[] = [];
  durationValues: ActionValue[] = [];
  charmType: CharmType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.charmType = CharmType.parse(this.actionDetail1);
    this.durationValues.push(
      new ActionValue(this.actionValue1, this.actionValue2, null)
    );
    switch (this.charmType.value) {
      case CharmType.charm:
        this.chanceValues.push(
          new ActionValue(
            this.actionValue3.value,
            this.actionValue4.value * 100,
            new eActionValue(eActionValue.VALUE3),
            new eActionValue(eActionValue.VALUE4),
            null
          )
        );
        break;
      default:
        this.chanceValues.push(
          new ActionValue(
            this.actionValue3.value * 100,
            this.actionValue4.value * 100,
            new eActionValue(eActionValue.VALUE3),
            new eActionValue(eActionValue.VALUE4),
            null
          )
        );
        break;
    }
  }

  localizedDetail() {
    switch (this.charmType.value) {
      case CharmType.charm:
        return `[${this.buildExpression(
          this.chanceValues
        )}%] の確率で${this.targetParameter.buildTargetClause()}を魅了状態にする、効果時間 [${this.buildExpression(
          this.durationValues
        )}] 秒。`;
      case CharmType.confusion:
        return `[${this.buildExpression(
          this.chanceValues
        )}%] の確率で${this.targetParameter.buildTargetClause()}を混乱状態にする、効果時間 [${this.buildExpression(
          this.durationValues
        )}] 秒。`;
      default:
        return super.localizedDetail();
    }
  }
}
