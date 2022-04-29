import { SkillAction } from "../master.js";
import {
  ActionParameter,
  ActionValue,
  Expression,
  RoundingMode,
} from "./actionParameter.js";
import { Property } from "./parameter/property.js";
import { PropertyKey } from "./propertyKey";

export class GiveValueAction extends ActionParameter {
  keyType: PropertyKey = PropertyKey.parse(PropertyKey.unknown);
  limitValues: ActionValue[] = [];

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
    this.limitValues.push(
      new ActionValue(this.actionValue4, this.actionValue5, null)
    );
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

  buildFormulaString(expressionMode: Expression, property: Property) {
    let result = super.localizedDetail(expressionMode, property);
    switch (this.actionValue1.value) {
      case 0:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * HP] アップさせる。`;
        break;
      case 1:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * 損失したHP] アップさせる。`;
        break;
      case 2:
        /*
         * TODO: 从表象出发，迎合游戏内数值手动乘个2，欢迎大佬提出有依据的解决方案。有关此bug详情请查看 issue#29
         */
        let s1 = this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        );
        try {
          s1 = String(Math.round(2.0 * Number(s1)));
        } catch (e) {
          s1 = "2 * " + s1;
        }
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${s1} * 倒した敵の数] アップさせる。`;
        break;
      case 4:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * 対象の数] アップさせる。`;
        break;
      case 5:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * ダメージを与えられた対象の数] アップさせる。`;
        break;
      case 6:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * ダメージ量] アップさせる。`;
        break;
      case 12:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * 後ろの${this.targetParameter.buildTargetClause()}の数] アップさせる。`;
        break;
      case 13:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * (${this.targetParameter.buildTargetClause()}が損失したHP / 最大HP)] アップさせる。`;
        break;
      case 102:
        result = `[アクション${this.actionDetail1 % 10}] の係数${
          this.actionDetail2
        }を [${this.buildExpression(
          expressionMode,
          null,
          RoundingMode.UNNECESSARY,
          property,
          true
        )} * オメメちゃんの数] アップさせる。`;
        break;
      default:
        if (this.actionValue1.value >= 200 && this.actionValue1.value < 300) {
          result = `[アクション${this.actionDetail1 % 10}] の係数${
            this.actionDetail2
          }を [${this.buildExpression(
            expressionMode,
            null,
            RoundingMode.UNNECESSARY,
            property,
            true
          )} * マーク [ID: ${
            this.actionValue1.value % 200
          }] のスタック数] アップさせる。`;
        } else if (
          this.actionValue1.value >= 7 &&
          this.actionValue1.value <= 10
        ) {
          result = `[アクション${this.actionDetail1 % 10}] の係数${
            this.actionDetail2
          }を [${this.buildExpression(
            expressionMode,
            null,
            RoundingMode.UNNECESSARY,
            property,
            true
          )} * ${this.targetParameter.buildTargetClause()}の${this.keyType.description()}] アップさせる。`;
        } else if (
          this.actionValue1.value >= 20 &&
          this.actionValue1.value < 30
        ) {
          result = `[アクション${this.actionDetail1 % 10}] の係数${
            this.actionDetail2
          }を [${this.buildExpression(
            expressionMode,
            null,
            RoundingMode.UNNECESSARY,
            property,
            true
          )} * カウンター${this.actionValue1.value % 10} の値] アップさせる。`;
        }
        break;
    }
    if (this.actionValue4.value != 0 && this.actionValue5.value != 0) {
      result += `アップ値の上限は [${this.buildExpression(
        expressionMode,
        this.limitValues,
        null,
        property
      )}]。`;
    }
    return result;
  }
}
