import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";

export class IfType {
  static readonly controllered = 100;
  static readonly blind = 200;
  static readonly convert = 300;
  static readonly decoy = 400;
  static readonly burn = 500;
  static readonly curse = 501;
  static readonly poison = 502;
  static readonly venom = 503;
  static readonly poisonOrVenom = 512;
  static readonly Break = 710;
  static readonly polymorph = 1400;
  value: number;

  private constructor(value: number) {
    this.value = value;
  }

  static parse(value: number) {
    return new this(value);
  }

  description() {
    switch (this.value) {
      case IfType.controllered:
        return "行動不能状態中";
      case IfType.blind:
        return "物理暗闇状態中";
      case IfType.convert:
        return "魅了か混乱状態中";
      case IfType.decoy:
        return "挑発状態中";
      case IfType.burn:
        return "火傷状態中";
      case IfType.curse:
        return "呪い状態中";
      case IfType.poison:
        return "毒状態中";
      case IfType.venom:
        return "猛毒状態中";
      case IfType.poisonOrVenom:
        return "毒か猛毒状態中";
      case IfType.Break:
        return "Break状態中";
      case IfType.polymorph:
        return "変身状態中";
      default:
        return "";
    }
  }
}

export class IfForChildrenAction extends ActionParameter {
  trueClause: string | null = null;
  falseClause: string | null = null;
  ifType: IfType | null = null;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    if (this.actionDetail2 !== 0) {
      this.ifType = IfType.parse(this.actionDetail1);
      if (this.ifType !== null) {
        this.trueClause = `${this.targetParameter.buildTargetClause(
          true
        )}が${this.ifType.description()}の場合、[アクション${
          this.actionDetail2 % 100
        }] を使う。`;
      } else {
        if (
          (this.actionDetail1 >= 600 && this.actionDetail1 < 700) ||
          this.actionDetail1 === 710
        ) {
          this.trueClause = `${this.targetParameter.buildTargetClause(
            true
          )}がマーク [ID: ${
            this.actionDetail1 - 600
          }] を持っている場合、[アクション${this.actionDetail2 % 10}] を使う。`;
        } else if (this.actionDetail1 === 700) {
          this.trueClause = `${this.targetParameter.buildTargetClause(
            true
          )}が単独の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
        } else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
          this.trueClause = `${this.targetParameter.buildTargetClause(
            true
          )}のHPが [${this.actionDetail1 - 900}%] 以下の場合、[アクション${
            this.actionDetail2 % 10
          }] を使う。`;
        } else if (this.actionDetail1 == 1300) {
          this.trueClause = `${this.targetParameter.buildTargetClause(
            true
          )}が魔法攻撃を行う対象の場合、[アクション${
            this.actionDetail2 % 10
          }] を使う。`;
        }
      }
    }

    if (this.actionDetail3 !== 0) {
      this.ifType = IfType.parse(this.actionDetail1);
      if (this.ifType !== null) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}が${this.ifType.description()}でない場合、[アクション${
          this.actionDetail3 % 100
        }] を使う。`;
      } else {
        if (
          (this.actionDetail1 >= 600 && this.actionDetail1 < 700) ||
          this.actionDetail1 == 710
        ) {
          this.falseClause = `${this.targetParameter.buildTargetClause(
            true
          )}がマーク [ID: ${
            this.actionDetail1 - 600
          }] を持っていない場合、[アクション${
            this.actionDetail3 % 10
          }] を使う。`;
        } else if (this.actionDetail1 == 700) {
          this.falseClause = `${this.targetParameter.buildTargetClause(
            true
          )}が単独でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
        } else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
          this.falseClause = `${this.targetParameter.buildTargetClause(
            true
          )}のHPが [${this.actionDetail1 - 900}%] 以下でない場合、[アクション${
            this.actionDetail3 % 10
          }] を使う。`;
        } else if (this.actionDetail1 == 1300) {
          this.falseClause = `${this.targetParameter.buildTargetClause(
            true
          )}が魔法攻撃を行う対象でない場合、[アクション${
            this.actionDetail3 % 10
          }] を使う。`;
        }
      }
    }
  }

  localizedDetail() {
    if (
      this.actionDetail1 == 100 ||
      this.actionDetail1 == 200 ||
      this.actionDetail1 == 300 ||
      this.actionDetail1 == 500 ||
      this.actionDetail1 == 501 ||
      this.actionDetail1 == 502 ||
      this.actionDetail1 == 503 ||
      this.actionDetail1 == 512 ||
      (this.actionDetail1 >= 600 && this.actionDetail1 < 900) ||
      (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) ||
      this.actionDetail1 == 1300 ||
      this.actionDetail1 == 1400
    ) {
      if (this.trueClause !== null && this.falseClause !== null) {
        return `条件分岐：${this.trueClause + this.falseClause}`;
      }
      if (this.trueClause !== null) {
        return `条件分岐：${this.trueClause}`;
      }
      if (this.falseClause !== null) {
        return `条件分岐：${this.falseClause}`;
      }
    } else if (this.actionDetail1 >= 0 && this.actionDetail1 < 100) {
      if (this.actionDetail2 !== 0 && this.actionDetail3 !== 0) {
        return `ランダム事件：[${this.actionDetail1}%] の確率で [アクション${
          this.actionDetail2 % 10
        }] を使う、それ以外の場合は [アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      }
      if (this.actionDetail2 !== 0) {
        return `ランダム事件：[${this.actionDetail1}%] の確率で [アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      }
      if (this.actionDetail3 !== 0) {
        return `ランダム事件：[${
          100 - this.actionDetail1
        }%] の確率で [アクション${this.actionDetail3 % 10}] を使う。`;
      }
    }
    return super.localizedDetail();
  }
}
