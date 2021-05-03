import { ActionParameter } from "./ActionParameter.js";
class TriggerType {
    constructor(value) {
        this.value = value;
    }
    static parse(value) {
        return new this(value);
    }
}
TriggerType.unknown = 0;
TriggerType.dodge = 1;
TriggerType.damage = 2;
TriggerType.hp = 3;
TriggerType.dead = 4;
TriggerType.critical = 5;
TriggerType.criticalWithSummon = 6;
TriggerType.limitTime = 7;
TriggerType.stealthFree = 8;
TriggerType.Break = 9;
TriggerType.dot = 10;
TriggerType.allBreak = 11;
export class TriggerAction extends ActionParameter {
    constructor(skillAction) {
        super(skillAction);
        this.triggerType = TriggerType.parse(this.actionDetail1);
    }
    localizedDetail() {
        switch (this.triggerType.value) {
            case TriggerType.hp:
                return `トリガー：HPが [${this.actionValue3.value}%] 以下の時発動。`;
            case TriggerType.limitTime:
                return `トリガー：戦闘の残り時間は [${this.actionValue3.value}] 秒以下の時発動。`;
            case TriggerType.damage:
                return `トリガー：ダメージを受けた時 [${this.actionValue1.value}%] の確率で発動。`;
            case TriggerType.dead:
                return `トリガー：死亡時 [${this.actionValue1.value}%] の確率で発動。`;
            case TriggerType.critical:
                return `トリガー：クリティカルダメージを受けた時 [${this.actionValue1.value}%] の確率で発動。`;
            case TriggerType.stealthFree:
                return `トリガー：潜伏時 [${this.actionValue1.value}%] の確率で発動。`;
            case TriggerType.Break:
                return `トリガー：Breakされた時 [${this.actionValue1.value}%] の確率で発動、効果時間 [${this.actionValue3.value}] 秒。`;
            case TriggerType.dot:
                return `トリガー：継続ダメージを受けた時 [${this.actionValue1.value}%] の確率で発動。`;
            case TriggerType.allBreak:
                return "トリガー：すべての部位がBreakされた時発動。";
            default:
                return super.localizedDetail();
        }
    }
}
