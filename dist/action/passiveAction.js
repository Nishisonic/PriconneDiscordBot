import { ActionParameter, ActionValue } from "./actionParameter.js";
import { Property } from "./parameter/property.js";
import { PropertyKey } from "./propertyKey.js";
export class PassiveAction extends ActionParameter {
    constructor(skillAction) {
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
        this.actionValues.push(new ActionValue(this.actionValue2, this.actionValue3, null));
    }
    localizedDetail(expressionMode, property) {
        return `${this.propertyKey.description()}を [${this.buildExpression(expressionMode, property)}] アップさせる。`;
    }
    propertyItem(level) {
        return Property.getPropertyWithKeyAndValue(undefined, this.propertyKey, this.actionValue2.value + this.actionValue3.value * level);
    }
}
