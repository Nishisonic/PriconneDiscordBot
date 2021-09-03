import { ActionParameter } from "./actionParameter.js";
import { IfType } from "./ifForChildrenAction.js";
export class IfForAllAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.trueClause = null;
        this.falseClause = null;
        this.ifType = IfType.parse(this.actionDetail1);
        if (this.actionDetail2 !== 0) {
            if (this.actionDetail1 === 710 || this.actionDetail1 === 100) {
                if (this.ifType !== null) {
                    this.trueClause = `${this.targetParameter.buildTargetClause(true)}が${this.ifType.description()}の場合、[アクション${this.actionDetail2 % 100}] を使う。`;
                }
            }
            else if (this.actionDetail1 >= 0 && this.actionDetail1 < 100) {
                this.trueClause = `[${this.actionDetail1}%] の確率で [アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 500 && this.actionDetail1 <= 512) {
                this.trueClause = `${this.targetParameter.buildTargetClause()}が${this.ifType.description()}の場合，[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 599) {
                this.trueClause = `${this.targetParameter.buildTargetClause()}が継続ダメージデバフを掛けられている場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 600 && this.actionDetail1 < 700) {
                this.trueClause = `${this.targetParameter.buildTargetClause()}が持っているマーク [ID: ${this.actionDetail1 - 600}] のスタック数が${this.actionValue3.value}以上の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 700) {
                this.trueClause = `${this.targetParameter.buildTargetClause()}が単独の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 701 && this.actionDetail1 < 710) {
                this.trueClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の数が${this.actionDetail1 - 700}の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 720) {
                this.trueClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の中ユニット[ID: ${this.actionValue3.value}]が存在する場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
                this.trueClause = `${this.targetParameter.buildTargetClause(true)}のHPが [${this.actionDetail1 - 900}%] 以下の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 1000) {
                this.trueClause = `前のアクションがターゲットを倒した場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 1001) {
                this.trueClause = `このスキルがクリティカルした場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 1200 && this.actionDetail1 < 1300) {
                this.trueClause = `[カウンター${(this.actionDetail1 % 100) / 10}] の数が [${this.actionDetail1 % 10}] 以上の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
            }
        }
        if (this.actionDetail3 !== 0) {
            if (this.actionDetail1 === 710) {
                if (this.ifType !== null) {
                    this.falseClause = `${this.targetParameter.buildTargetClause(true)}が${this.ifType.description()}でない場合、[アクション${this.actionDetail3 % 100}] を使う。`;
                }
            }
            else if (this.actionDetail1 >= 0 && this.actionDetail1 < 100) {
                this.falseClause = `[${100 - this.actionDetail1}%] の確率で [アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 500 && this.actionDetail1 <= 512) {
                this.falseClause = `${this.targetParameter.buildTargetClause()}が${this.ifType.description()}でない場合，[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 599) {
                this.falseClause = `${this.targetParameter.buildTargetClause()}が継続ダメージデバフを掛けられていない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 600 && this.actionDetail1 < 700) {
                this.falseClause = `${this.targetParameter.buildTargetClause()}が持っているマーク [ID: ${this.actionDetail1 - 600}] のスタック数が [${this.actionValue3.value}] 未満の場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 700) {
                this.falseClause = `${this.targetParameter.buildTargetClause()}が単独でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 701 && this.actionDetail1 < 710) {
                this.falseClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の数が [${this.actionDetail1 - 700}] でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 720) {
                this.falseClause = `潜伏状態のユニットを除いて、${this.targetParameter.buildTargetClause()}の中ユニット[ID: ${this.actionValue3.value}]が存在しない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
                this.falseClause = `${this.targetParameter.buildTargetClause(true)}のHPが [${this.actionDetail1 - 900}%] 以下でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 1000) {
                this.falseClause = `前のアクションがターゲットを倒してない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 === 1001) {
                this.falseClause = `このスキルがクリティカルしなかった場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
            else if (this.actionDetail1 >= 1200 && this.actionDetail1 < 1300) {
                this.falseClause = `[カウンター${(this.actionDetail1 % 100) / 10}] の数が [${this.actionDetail1 % 10}] 未満の場合、[アクション${this.actionDetail3 % 10}] を使う。`;
            }
        }
    }
    localizedDetail() {
        if (this.trueClause != null && this.falseClause != null) {
            return `全体的条件分岐：${this.trueClause + this.falseClause}`;
        }
        if (this.trueClause != null) {
            return `全体的条件分岐：${this.trueClause}`;
        }
        if (this.falseClause != null) {
            return `全体的条件分岐：${this.falseClause}`;
        }
        return super.localizedDetail();
    }
}
