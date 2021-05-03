import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";

export class AdditiveAction extends ActionParameter {
  keyType: PropertyKey;
  limitValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
    this.limitValues.push(
      new ActionValue(this.actionValue4, this.actionValue5, null)
    );
    switch (this.actionValue1) {
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
    switch (this.actionValue1) {
      case 0:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * HP] アップさせる。`;
        break;
      case 1:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * 損失したHP] アップさせる。`;
        break;
      case 2:
        const s1 = `2 * ${this.buildExpression()}`;
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${s1} * 倒した敵の数] アップさせる。`;
        break;
      case 4:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * ターゲットの数] アップさせる。`;
        break;
      case 5:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * ダメージを与えられたターゲットの数] アップさせる。`;
        break;
      case 6:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * ダメージ量] アップさせる。`;
        break;
      case 12:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * 後ろの${this.targetParameter.buildTargetClause()}の数] アップさせる。`;
        break;
      case 102:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression()} * オメメちゃんの数] アップさせる。`;
        break;
      default:
        if (this.actionValue1 >= 200 && this.actionValue1 < 300) {
          result = `[アクション${this.actionDetail1 % 10}] の係数${
            this.actionDetail2
          }を [${this.buildExpression()} * マーク [ID: ${
            this.actionValue1 % 200
          }] のスタック数] アップさせる。`;
        } else if (this.actionValue1 >= 7 && this.actionValue1 <= 10) {
          result = `[アクション${this.actionDetail1 % 10}] の係数${
            this.actionDetail2
          }を [${this.buildExpression()} * ${this.targetParameter.buildTargetClause()}の${this.keyType.description()}] アップさせる。`;
        } else if (this.actionValue1 >= 20 && this.actionValue1 < 30) {
          result = `[アクション${this.actionDetail1 % 10}] の係数${
            this.actionDetail2
          } を [${this.buildExpression()} * カウンター${
            this.actionValue1 % 10
          } の値] アップさせる。`;
        }
        break;
    }
    if (this.actionValue4 !== 0 && this.actionValue5 !== 0) {
      result += `アップ値の上限は [${this.limitValues}]。`;
    }
    return result;
  }
}
