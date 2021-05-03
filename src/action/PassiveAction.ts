import { SkillAction } from "../master.js";
import { ActionParameter, ActionValue } from "./ActionParameter.js";
import { PropertyKey } from "./PropertyKey.js";

export class PassiveAction extends ActionParameter {
  propertyKey: PropertyKey;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    switch (this.actionDetail1) {
      case 1:
        this.propertyKey = PropertyKey.parse(PropertyKey.hp);
        break;
      case 2:
        this.propertyKey = PropertyKey.parse(PropertyKey.atk);
        break;
      case 3:
        this.propertyKey = PropertyKey.parse(PropertyKey.def);
        break;
      case 4:
        this.propertyKey = PropertyKey.parse(PropertyKey.magicStr);
        break;
      case 5:
        this.propertyKey = PropertyKey.parse(PropertyKey.magicDef);
        break;
      default:
        this.propertyKey = PropertyKey.parse(PropertyKey.unknown);
        break;
    }
    this.actionValues.push(
      new ActionValue(this.actionValue2, this.actionValue3, null)
    );
  }

  localizedDetail() {
    return `${this.propertyKey.description()}を [${this.buildExpression()}] アップさせる。`;
  }
}
