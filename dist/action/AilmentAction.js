import { ActionDetail, Ailment, AilmentType, DotDetail, } from "../data/Ailment.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";
export class AilmentAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.chanceValues = [];
        this.durationValues = [];
        this.ailment = new Ailment(skillAction.action_type, skillAction.action_detail_1);
        this.actionValues.push(new ActionValue(this.actionValue1, this.actionValue2, null));
        this.chanceValues.push(new ActionValue(this.actionValue3, this.actionValue4, null));
        this.durationValues = this.chanceValues;
    }
    localizedDetail() {
        var _a, _b;
        switch (this.ailment.ailmentType.value) {
            case AilmentType.action:
                let str = "";
                switch (((_a = this.ailment.ailmentDetail) === null || _a === void 0 ? void 0 : _a.detail).value) {
                    case ActionDetail.haste:
                    case ActionDetail.slow:
                        str = `${this.targetParameter.buildTargetClause()}の行動速度を本来の [${this.buildExpression(this.actionValues)} * 100%] にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                        break;
                    case ActionDetail.sleep:
                        str = `${this.targetParameter.buildTargetClause()}を睡眠状態にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                        break;
                    case ActionDetail.faint:
                        str = `${this.targetParameter.buildTargetClause()}を気絶状態にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                        break;
                    case ActionDetail.timeStop:
                        str = `${this.targetParameter.buildTargetClause()}を時間停止状態にする、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                        break;
                    default:
                        str = `${this.targetParameter.buildTargetClause()}に${this.ailment.description()}、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                        break;
                }
                if (this.actionDetail2 === 1) {
                    str += "この効果はダメージを受けた時に解除される。";
                }
                return str;
            case AilmentType.dot:
                switch (((_b = this.ailment.ailmentDetail) === null || _b === void 0 ? void 0 : _b.detail).value) {
                    case DotDetail.poison:
                        return `${this.targetParameter.buildTargetClause()}を毒状態にし、毎秒 [${this.buildExpression()}] のダメージを与える、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                    case DotDetail.violentPoison:
                        return `${this.targetParameter.buildTargetClause()}を猛毒状態にし、毎秒 [${this.buildExpression()}] のダメージを与える、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                    default:
                        return `${this.targetParameter.buildTargetClause()}に${this.ailment.description()}、毎秒 [${this.buildExpression()}] のダメージを与える、効果時間 [${this.buildExpression(this.durationValues)}] 秒。`;
                }
            case AilmentType.silence:
                return `[${this.buildExpression(this.chanceValues)}%] の確率で${this.targetParameter.buildTargetClause()}を沈黙状態にする、効果時間 [${this.buildExpression()}] 秒。`;
            case AilmentType.darken:
                return `[${this.buildExpression(this.chanceValues)}%] の確率で${this.targetParameter.buildTargetClause()}を物理暗闇状態にする、効果時間 [${this.buildExpression()}] 秒。物理攻撃は [${100 - this.actionDetail1}%] の確率でミスする。`;
            default:
                return this.buildExpression();
        }
    }
}
