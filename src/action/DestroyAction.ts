import { ActionParameter } from "./ActionParameter.js";

export class DestroyAction extends ActionParameter {
  localizedDetail() {
    return `${this.targetParameter.buildTargetClause()}を即死させる。`;
  }
}
