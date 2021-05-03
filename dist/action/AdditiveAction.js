import { ActionParameter, ActionValue } from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";
export class AdditiveAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.limitValues = [];
        this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
        this.limitValues.push(new ActionValue(this.actionValue4, this.actionValue5, null));
        switch (this.actionValue1.value) {
            case 7:
                this.keyType = PropertyKey.parse(PropertyKey.atk);
                break;
            case 8:
                this.keyType = PropertyKey.parse(PropertyKey.magicStr);
                break;
            case 9:
                this.keyType = PropertyKey.parse(PropertyKey.def);
                break;
            case 10:
                this.keyType = PropertyKey.parse(PropertyKey.magicDef);
                break;
            default:
                this.keyType = PropertyKey.parse(PropertyKey.unknown);
                break;
        }
    }
    localizedDetail() {
        let result = super.localizedDetail();
        switch (this.actionValue1.value) {
            case 0:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* HP] アップさせる。`;
                break;
            case 1:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* 損失したHP] アップさせる。`;
                break;
            case 2:
                const s1 = `2 \* ${this.buildExpression(undefined, true)}`;
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${s1} \* 倒した敵の数] アップさせる。`;
                break;
            case 4:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* ターゲットの数] アップさせる。`;
                break;
            case 5:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* ダメージを与えられたターゲットの数] アップさせる。`;
                break;
            case 6:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* ダメージ量] アップさせる。`;
                break;
            case 12:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* 後ろの${this.targetParameter.buildTargetClause()}の数] アップさせる。`;
                break;
            case 102:
                result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* オメメちゃんの数] アップさせる。`;
                break;
            default:
                if (this.actionValue1.value >= 200 && this.actionValue1.value < 300) {
                    result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* マーク [ID: ${this.actionValue1.value % 200}] のスタック数] アップさせる。`;
                }
                else if (this.actionValue1.value >= 7 &&
                    this.actionValue1.value <= 10) {
                    result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2}を [${this.buildExpression(undefined, true)} \* ${this.targetParameter.buildTargetClause()}の${this.keyType.description()}] アップさせる。`;
                }
                else if (this.actionValue1.value >= 20 &&
                    this.actionValue1.value < 30) {
                    result = `[アクション${this.actionDetail1 % 10}] の係数${this.actionDetail2} を [${this.buildExpression(undefined, true)} \* カウンター${this.actionValue1.value % 10} の値] アップさせる。`;
                }
                break;
        }
        if (this.actionValue4.value !== 0 && this.actionValue5.value !== 0) {
            result += `アップ値の上限は [${this.limitValues}]。`;
        }
        return result;
    }
}
