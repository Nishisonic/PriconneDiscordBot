import { ActionParameter } from "./actionParameter.js";
export class DestroyAction extends ActionParameter {
    localizedDetail() {
        return `${this.targetParameter.buildTargetClause()}を即死させる。`;
    }
}
