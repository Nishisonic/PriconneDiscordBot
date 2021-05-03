import { ActionParameter } from "./ActionParameter.js";
export class MovePartsAction extends ActionParameter {
    localizedDetail() {
        return `部位${this.actionValue4}を前へ [${-this
            .actionValue1}] 移動させ、その後元の位置に戻させる。`;
    }
}
