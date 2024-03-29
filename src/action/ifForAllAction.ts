import { SkillAction } from "../master.js";
import { ActionParameter, Expression } from "./actionParameter.js";
import { IfType } from "./ifForChildrenAction.js";
import { Property } from "./parameter/property.js";

export class IfForAllAction extends ActionParameter {
  trueClause: string | null = null;
  falseClause: string | null = null;
  ifType: IfType;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.ifType = IfType.parse(this.actionDetail1);

    if (this.actionDetail2 !== 0) {
      if (
        this.actionDetail1 === 710 ||
        this.actionDetail1 === 100 ||
        this.actionDetail1 === 1700 ||
        this.actionDetail1 == 1601
      ) {
        if (this.ifType !== null) {
          this.trueClause = `${this.targetParameter.buildTargetClause(
            true
          )}が${this.ifType.description()}の場合、[アクション${
            this.actionDetail2 % 100
          }] を使う。`;
        }
      } else if (this.actionDetail1 >= 0 && this.actionDetail1 < 100) {
        this.trueClause = `[${this.actionDetail1}%] の確率で [アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (this.actionDetail1 >= 500 && this.actionDetail1 <= 512) {
        this.trueClause = `${this.targetParameter.buildTargetClause()}が${this.ifType.description()}の場合，[アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 599) {
        this.trueClause = `${this.targetParameter.buildTargetClause()}が継続ダメージデバフを掛けられている場合、[アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (this.actionDetail1 >= 600 && this.actionDetail1 < 700) {
        this.trueClause = `${this.targetParameter.buildTargetClause(
          true
        )}が持っているマーク [ID: ${this.actionDetail1 - 600}] のスタック数が${
          this.actionValue3.value
        }以上の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
      } else if (this.actionDetail1 === 700) {
        this.trueClause = `${this.targetParameter.buildTargetClause(
          true
        )}が単独の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
      } else if (this.actionDetail1 >= 701 && this.actionDetail1 < 710) {
        this.trueClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の数が${
          this.actionDetail1 - 700
        }の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
      } else if (this.actionDetail1 === 720) {
        this.trueClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の中ユニット[ID: ${
          this.actionValue3.value
        }]が存在する場合、[アクション${this.actionDetail2 % 10}] を使う。`;
      } else if (this.actionDetail1 === 721) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}がマーク [ID: ${Math.floor(
          this.actionValue3.value
        )}] を持っている場合、[アクション${this.actionDetail2 % 10}] を使う。`;
      } else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
        this.trueClause = `${this.targetParameter.buildTargetClause(
          true
        )}のHPが [${this.actionDetail1 - 900}%] 以下の場合、[アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 1000) {
        this.trueClause = `前のアクションが対象を倒した場合、[アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 1001) {
        this.trueClause = `このスキルがクリティカルした場合、[アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (this.actionDetail1 >= 1200 && this.actionDetail1 < 1300) {
        this.trueClause = `[カウンター${
          (this.actionDetail1 % 100) / 10
        }] の数が [${this.actionDetail1 % 10}] 以上の場合、[アクション${
          this.actionDetail2 % 10
        }] を使う。`;
      } else if (
        this.actionDetail1 >= 6000 &&
        this.actionDetail1 < 7000 &&
        this.actionValue3.value === 0
      ) {
        this.trueClause = `${this.targetParameter.buildTargetClause(
          true
        )}がマーク [ID: ${
          this.actionDetail1 - 6000
        }] を持っている場合、[アクション${this.actionDetail2 % 10}] を使う。`;
      } else if (this.actionDetail1 >= 6000 && this.actionDetail1 < 7000) {
        this.trueClause = `${this.targetParameter.buildTargetClause(
          true
        )}が持っているマーク [ID: ${
          this.actionDetail1 - 6000
        }] のスタック数が [${this.actionValue3.value}] 以上の場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      }
    } else if (this.actionDetail3 == 0) {
      this.trueClause = "効果なし。";
    }

    if (this.actionDetail3 !== 0) {
      if (
        this.actionDetail1 === 710 ||
        this.actionDetail1 === 100 ||
        this.actionDetail1 === 1700 ||
        this.actionDetail1 == 1601
      ) {
        if (this.ifType !== null) {
          this.falseClause = `${this.targetParameter.buildTargetClause(
            true
          )}が${this.ifType.description()}でない場合、[アクション${
            this.actionDetail3 % 100
          }] を使う。`;
        }
      } else if (this.actionDetail1 >= 0 && this.actionDetail1 < 100) {
        this.falseClause = `[${
          100 - this.actionDetail1
        }%] の確率で [アクション${this.actionDetail3 % 10}] を使う。`;
      } else if (this.actionDetail1 >= 500 && this.actionDetail1 <= 512) {
        this.falseClause = `${this.targetParameter.buildTargetClause()}が${this.ifType.description()}でない場合，[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 599) {
        this.falseClause = `${this.targetParameter.buildTargetClause()}が継続ダメージデバフを掛けられていない場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 >= 600 && this.actionDetail1 < 700) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}が持っているマーク [ID: ${
          this.actionDetail1 - 600
        }] のスタック数が [${this.actionValue3.value}] 未満の場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 700) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}が単独でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
      } else if (this.actionDetail1 >= 701 && this.actionDetail1 < 710) {
        this.falseClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の数が [${
          this.actionDetail1 - 700
        }] でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
      } else if (this.actionDetail1 === 720) {
        this.falseClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の中ユニット[ID: ${
          this.actionValue3.value
        }]が存在しない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
      } else if (this.actionDetail1 === 721) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}がマーク [ID: ${Math.floor(
          this.actionValue3.value
        )}] を持っていない場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}のHPが [${this.actionDetail1 - 900}%] 以下でない場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 1000) {
        this.falseClause = `前のアクションがターゲットを倒してない場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 === 1001) {
        this.falseClause = `このスキルがクリティカルしなかった場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (this.actionDetail1 >= 1200 && this.actionDetail1 < 1300) {
        this.falseClause = `[カウンター${
          (this.actionDetail1 % 100) / 10
        }] の数が [${this.actionDetail1 % 10}] 未満の場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      } else if (
        this.actionDetail1 >= 6000 &&
        this.actionDetail1 < 7000 &&
        this.actionValue3.value === 0
      ) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}がマーク [ID: ${
          this.actionDetail1 - 6000
        }] を持っている場合、[アクション${this.actionDetail3 % 10}] を使う。`;
      } else if (this.actionDetail1 >= 6000 && this.actionDetail1 < 7000) {
        this.falseClause = `${this.targetParameter.buildTargetClause(
          true
        )}が持っているマーク [ID: ${
          this.actionDetail1 - 6000
        }] のスタック数が [${this.actionValue3.value}] 未満の場合、[アクション${
          this.actionDetail3 % 10
        }] を使う。`;
      }
    } else if (this.actionDetail2 == 0) {
      this.falseClause = "効果なし。";
    }
  }
  localizedDetail(expressionMode: Expression, property: Property) {
    if (this.trueClause != null && this.falseClause != null) {
      return `全体的条件分岐：${this.trueClause + this.falseClause}`;
    }
    if (this.trueClause != null) {
      return `全体的条件分岐：${this.trueClause}`;
    }
    if (this.falseClause != null) {
      return `全体的条件分岐：${this.falseClause}`;
    }
    return super.localizedDetail(expressionMode, property);
  }
}
