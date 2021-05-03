import { ActionParameter } from "./ActionParameter.js";
export class IfType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
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
IfType.controllered = 100;
IfType.blind = 200;
IfType.convert = 300;
IfType.decoy = 400;
IfType.burn = 500;
IfType.curse = 501;
IfType.poison = 502;
IfType.venom = 503;
IfType.poisonOrVenom = 512;
IfType.Break = 710;
IfType.polymorph = 1400;
export class IfForChildrenAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.trueClause = null;
        this.falseClause = null;
        this.ifType = null;
        if (this.actionDetail2 !== 0) {
            this.ifType = IfType.parse(this.actionDetail1);
            if (this.ifType !== null) {
                this.trueClause = `${this.targetParameter.buildTargetClause(true)}が${this.ifType.description()}の場合、[アクション${this.actionDetail2 % 100}] を使う。`;
            }
            else {
                if ((this.actionDetail1 >= 600 && this.actionDetail1 < 700) ||
                    this.actionDetail1 === 710) {
                    this.trueClause = `${this.targetParameter.buildTargetClause(true)}がマーク [ID: ${this.actionDetail1 - 600}] を持っている場合、[アクション${this.actionDetail2 % 10}] を使う。`;
                }
                else if (this.actionDetail1 === 700) {
                    this.trueClause = `${this.targetParameter.buildTargetClause(true)}が単独の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
                }
                else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
                    this.trueClause = `${this.targetParameter.buildTargetClause(true)}のHPが [${this.actionDetail1 - 900}%] 以下の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
                }
                else if (this.actionDetail1 === 1300) {
                    this.trueClause = `${this.targetParameter.buildTargetClause(true)}が魔法攻撃を行う対象の場合、[アクション${this.actionDetail2 % 10}] を使う。`;
                }
            }
        }
        if (this.actionDetail3 !== 0) {
            this.ifType = IfType.parse(this.actionDetail1);
            if (this.ifType !== null) {
                this.falseClause = `${this.targetParameter.buildTargetClause(true)}が${this.ifType.description()}でない場合、[アクション${this.actionDetail3 % 100}] を使う。`;
            }
            else {
                if ((this.actionDetail1 >= 600 && this.actionDetail1 < 700) ||
                    this.actionDetail1 === 710) {
                    this.falseClause = `${this.targetParameter.buildTargetClause(true)}がマーク [ID: ${this.actionDetail1 - 600}] を持っていない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
                }
                else if (this.actionDetail1 === 700) {
                    this.falseClause = `${this.targetParameter.buildTargetClause(true)}が単独でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
                }
                else if (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) {
                    this.falseClause = `${this.targetParameter.buildTargetClause(true)}のHPが [${this.actionDetail1 - 900}%] 以下でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
                }
                else if (this.actionDetail1 === 1300) {
                    this.falseClause = `${this.targetParameter.buildTargetClause(true)}が魔法攻撃を行う対象でない場合、[アクション${this.actionDetail3 % 10}] を使う。`;
                }
            }
        }
    }
    localizedDetail() {
        if (this.actionDetail1 === 100 ||
            this.actionDetail1 === 200 ||
            this.actionDetail1 === 300 ||
            this.actionDetail1 === 500 ||
            this.actionDetail1 === 501 ||
            this.actionDetail1 === 502 ||
            this.actionDetail1 === 503 ||
            this.actionDetail1 === 512 ||
            (this.actionDetail1 >= 600 && this.actionDetail1 < 900) ||
            (this.actionDetail1 >= 901 && this.actionDetail1 < 1000) ||
            this.actionDetail1 === 1300 ||
            this.actionDetail1 === 1400) {
            if (this.trueClause !== null && this.falseClause !== null) {
                return `条件分岐：${this.trueClause + this.falseClause}`;
            }
            if (this.trueClause !== null) {
                return `条件分岐：${this.trueClause}`;
            }
            if (this.falseClause !== null) {
                return `条件分岐：${this.falseClause}`;
            }
        }
        else if (this.actionDetail1 >= 0 && this.actionDetail1 < 100) {
            if (this.actionDetail2 !== 0 && this.actionDetail3 !== 0) {
                return `ランダム事件：[${this.actionDetail1}%] の確率で [アクション${this.actionDetail2 % 10}] を使う、それ以外の場合は [アクション${this.actionDetail3 % 10}] を使う。`;
            }
            if (this.actionDetail2 !== 0) {
                return `ランダム事件：[${this.actionDetail1}%] の確率で [アクション${this.actionDetail2 % 10}] を使う。`;
            }
            if (this.actionDetail3 !== 0) {
                return `ランダム事件：[${100 - this.actionDetail1}%] の確率で [アクション${this.actionDetail3 % 10}] を使う。`;
            }
        }
        return super.localizedDetail();
    }
}
