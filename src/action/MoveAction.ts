import { SkillAction } from "../master.js";
import { ActionParameter } from "./ActionParameter.js";

const MoveType = {
  unknown: 0,
  targetReturn: 1,
  absoluteReturn: 2,
  target: 3,
  absolute: 4,
  targetByVelocity: 5,
  absoluteByVelocity: 6,
  absoluteWithoutDirection: 7,
} as const;

export class MoveAction extends ActionParameter {
  moveType: number;

  constructor(skillAction: SkillAction) {
    super(skillAction);
    this.moveType = skillAction.action_detail_1;
  }

  localizedDetail() {
    const direction = this.actionValue1 > 0 ? "前" : "後ろ";
    const speed = this.actionValue2;
    const distance = Math.floor(Math.abs(this.actionValue1));

    switch (this.moveType) {
      case MoveType.targetReturn:
        return `${this.targetParameter.buildTargetClause()}の位置まで移動し、スキル終了後元の位置に戻る。`;
      case MoveType.absoluteReturn:
        return `${direction}へ [${distance}] 移動し、スキル終了後元の位置に戻る。`;
      case MoveType.target:
        return `${this.targetParameter.buildTargetClause()}の位置まで移動する。`;
      case MoveType.absolute:
      case MoveType.absoluteWithoutDirection:
        return `${direction}へ [${distance}] 移動する。`;
      case MoveType.targetByVelocity:
        return `[${speed}] の速度で${this.targetParameter.buildTargetClause()}の${direction} [${distance}] の位置まで移動する。`;
      case MoveType.absoluteByVelocity:
        return `[${speed}] の速度で${direction}へ [${distance}] 移動する。`;
      default:
        return super.localizedDetail();
    }
  }
}
