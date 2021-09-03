import { ActionType } from "./actionType.js";
import { DirectionType } from "./parameter/directionType.js";
import { TargetAssignment } from "./parameter/targetAssignment.js";
import { PluralModifier, TargetCount } from "./parameter/targetCount.js";
import { TargetNumber } from "./parameter/targetNumber.js";
import { TargetRange } from "./parameter/targetRange.js";
import { ExclusiveAllType, TargetType } from "./parameter/targetType.js";
export class TargetParameter {
    constructor({ target_type, target_count, target_number, target_range, target_area, target_assignment, }, dependAction = null) {
        this.hasRelationPhrase = false;
        this.hasCountPhrase = false;
        this.hasRangePhrase = false;
        this.hasNthModifier = false;
        this.hasDirectionPhrase = false;
        this.hasTargetType = false;
        this.targetAssignment = TargetAssignment.parse(target_assignment);
        this.targetNumber = TargetNumber.parse(target_number);
        this.rawTargetType = target_type;
        this.targetType = TargetType.parse(target_type);
        this.targetRange = TargetRange.parse(target_range);
        this.direction = DirectionType.parse(target_area);
        this.targetCount = TargetCount.parse(target_count);
        this.dependAction = dependAction;
        this.setBooleans();
    }
    hasDependAction() {
        return (this.dependAction !== null &&
            this.dependAction.action_id !== 0 &&
            this.targetType.value !== TargetType.absolute &&
            this.dependAction.action_type !== ActionType.chooseArea);
    }
    setBooleans() {
        this.hasRelationPhrase =
            this.targetType.value !== TargetType.self &&
                this.targetType.value !== TargetType.absolute;
        this.hasCountPhrase =
            this.targetType.value !== TargetType.self &&
                !(this.targetType.value === TargetType.none &&
                    this.targetCount.value === TargetCount.zero);
        this.hasRangePhrase = this.targetRange.rangeType === TargetRange.FINITE;
        this.hasNthModifier = [
            TargetNumber.second,
            TargetNumber.third,
            TargetNumber.fourth,
            TargetNumber.fifth,
        ].includes(this.targetNumber.value);
        this.hasDirectionPhrase =
            this.direction.value === DirectionType.front &&
                (this.hasRangePhrase || this.targetCount.value === TargetCount.all);
        this.hasTargetType = !(this.targetType.exclusiveWithAll() === ExclusiveAllType.exclusive &&
            this.targetCount.value === TargetCount.all);
    }
    buildTargetClause(value) {
        if (value === undefined) {
            return this.buildTargetClause2();
        }
        if (typeof value === "boolean") {
            return this.buildTargetClause1(value);
        }
        throw new Error();
    }
    buildTargetClause1(anyOfModifier) {
        if (this.targetCount.pluralModifier.modifier === PluralModifier.many &&
            anyOfModifier) {
            return `（ターゲット別）${this.buildTargetClause()}の中任意のターゲット`;
        }
        return this.buildTargetClause();
    }
    buildTargetClause2() {
        if (this.hasDependAction()) {
            const dependAction = this.dependAction;
            if (dependAction.action_type === ActionType.damage) {
                return `[アクション${dependAction.action_id % 100}] にダメージを与えられたターゲット`;
            }
            return `[アクション${dependAction.action_id % 100}] のターゲット`;
        }
        if (!this.hasRelationPhrase) {
            return this.targetType.description();
        }
        if (!this.hasCountPhrase &&
            !this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase) {
            return `前のアクションのターゲット`;
        }
        if (this.hasCountPhrase &&
            !this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase &&
            !this.hasDirectionPhrase) {
            if (this.targetCount.value === TargetCount.all) {
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.exclusive) {
                    return `${this.targetAssignment.description()}全体`;
                }
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.not) {
                    return `${this.targetType.description()}${this.targetAssignment.description()}全体`;
                }
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.halfExclusive) {
                    return `${this.targetAssignment.description()}全体（自分以外）`;
                }
            }
            if (this.targetCount.value === TargetCount.one &&
                this.targetType.ignoresOne()) {
                return `${this.targetType.description()}${this.targetAssignment.description()}`;
            }
            return `${this.targetType.description()}${this.targetAssignment.description()}${this.targetCount.description()}`;
        }
        if (this.hasCountPhrase &&
            !this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase &&
            this.targetType.exclusiveWithAll() === ExclusiveAllType.exclusive) {
            switch (this.targetAssignment.value) {
                case TargetAssignment.enemy:
                    return "前方すべての敵";
                case TargetAssignment.friendly:
                    return "自分を含めて前方すべての味方";
                default:
                    return "前方のターゲットすべて";
            }
        }
        if (this.hasCountPhrase &&
            !this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase &&
            this.targetType.exclusiveWithAll() === ExclusiveAllType.not) {
            switch (this.targetAssignment.value) {
                case TargetAssignment.enemy:
                    return `前方${this.targetType.description()}すべての敵`;
                case TargetAssignment.friendly:
                    return `自分を含めて前方${this.targetType.description()}すべての味方`;
                default:
                    return `前方${this.targetType.description()}すべてのターゲット`;
            }
        }
        if (this.hasCountPhrase &&
            !this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase &&
            this.targetType.exclusiveWithAll() === ExclusiveAllType.halfExclusive) {
            switch (this.targetAssignment.value) {
                case TargetAssignment.enemy:
                    return "前方すべての敵（自分以外）";
                case TargetAssignment.friendly:
                    return "自分を含めて前方すべての味方";
                default:
                    return "前方のターゲットすべて（自分以外）";
            }
        }
        if (!this.hasCountPhrase &&
            !this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase &&
            !this.hasDirectionPhrase) {
            return `範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}`;
        }
        if (!this.hasCountPhrase &&
            !this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase) {
            return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}`;
        }
        if (!this.hasCountPhrase &&
            this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase) {
            return "前のアクションのターゲット";
        }
        if (this.hasCountPhrase &&
            !this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase &&
            !this.hasDirectionPhrase) {
            if (this.targetCount.value === TargetCount.all) {
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.exclusive) {
                    return `範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}`;
                }
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.not) {
                    return `範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}${this.targetType.description()}`;
                }
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.halfExclusive) {
                    return `範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}（自分以外）`;
                }
            }
            if (this.targetCount.value === TargetCount.one &&
                this.targetType.ignoresOne()) {
                return `範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description()}${this.targetAssignment.description()}`;
            }
            return `範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description()}${this.targetAssignment.description()}${this.targetCount.description()}`;
        }
        if (this.hasCountPhrase &&
            !this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase) {
            if (this.targetCount.value === TargetCount.all) {
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.exclusive) {
                    return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}`;
                }
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.not) {
                    return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description()}${this.targetAssignment.description()}`;
                }
                if (this.targetType.exclusiveWithAll() === ExclusiveAllType.halfExclusive) {
                    return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}（自分以外）`;
                }
            }
            if (this.targetCount.value === TargetCount.one &&
                this.targetType.ignoresOne()) {
                return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetAssignment.description()}}${this.targetAssignment.description()}`;
            }
            return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description()}${this.targetAssignment.description()}${this.targetCount.description()}`;
        }
        if (this.hasCountPhrase &&
            this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase &&
            !this.hasDirectionPhrase) {
            if (this.targetCount.value === TargetCount.one &&
                this.targetType.ignoresOne()) {
                return `${this.targetType.description(this.targetNumber, null)}${this.targetAssignment.description()}`;
            }
            const modifier = `${this.targetNumber.description()}から${this.getUntilNumber().description()}まで`;
            return `${this.targetType.description(this.targetNumber, modifier)}${this.targetAssignment.description()}${this.targetCount.pluralModifier.description()}`;
        }
        if (this.hasCountPhrase &&
            this.hasNthModifier &&
            !this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase) {
            const modifier = `${this.targetNumber.description()}から${this.getUntilNumber().description()}まで`;
            return `前方${this.targetType.description(this.targetNumber, modifier)}${this.targetAssignment.description()}${this.targetCount.pluralModifier.description()}`;
        }
        if (this.hasCountPhrase &&
            this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase &&
            !this.hasDirectionPhrase) {
            if (this.targetCount.value === TargetCount.one &&
                this.targetType.ignoresOne()) {
                return `範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description(this.targetNumber, null)}${this.targetAssignment.description()}`;
            }
            const modifier = `${this.targetNumber.description()}から${this.getUntilNumber().description()}まで`;
            return `範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description(this.targetNumber, modifier)}${this.targetAssignment.description()}${this.targetCount.pluralModifier.description()}`;
        }
        if (this.hasCountPhrase &&
            this.hasNthModifier &&
            this.hasRangePhrase &&
            this.hasRelationPhrase &&
            this.hasDirectionPhrase) {
            if (this.targetCount.value === TargetCount.one &&
                this.targetType.ignoresOne()) {
                return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description(this.targetNumber, null)}${this.targetAssignment.description()}`;
            }
            const modifier = `${this.targetNumber.description()}から${this.getUntilNumber().description()}まで`;
            return `前方範囲 [${this.targetRange.rawRange}] 内の${this.targetType.description(this.targetNumber, modifier)}${this.targetAssignment.description()}${this.targetCount.pluralModifier.description()}`;
        }
        return "";
    }
    getUntilNumber() {
        const tUntil = TargetNumber.parse(this.targetNumber.value + this.targetCount.value);
        if (tUntil.value === TargetNumber.other) {
            return TargetNumber.parse(TargetNumber.fifth);
        }
        return tUntil;
    }
}
