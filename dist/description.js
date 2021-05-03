import { AbnormalStateFieldAction } from "./action/AbnormalStateFieldAction.js";
import { AccumulativeDamageAction } from "./action/AccumulativeDamageAction.js";
import { ActionByHitCountAction } from "./action/ActionByHitCountAction.js";
import { ActionParameter } from "./action/ActionParameter.js";
import { AdditiveAction } from "./action/AdditiveAction.js";
import { AilmentAction } from "./action/AilmentAction.js";
import { AttackFieldAction } from "./action/AttackFieldAction.js";
import { AttackSealAction } from "./action/AttackSealAction.js";
import { AuraAction } from "./action/AuraAction.js";
import { AweAction } from "./action/AweAction.js";
import { BarrierAction } from "./action/BarrierAction.js";
import { ChangeBodyWidthAction } from "./action/ChangeBodyWidthAction.js";
import { ChangeEnergyAction } from "./action/ChangeEnergyAction.js";
import { ChangeEnergyRecoveryRatioByDamageAction } from "./action/ChangeEnergyRecoveryRatioByDamageAction.js";
import { ChangeParameterFieldAction } from "./action/ChangeParameterFieldAction.js";
import { ChangePatternAction } from "./action/ChangePatternAction.js";
import { ChangeSpeedFieldAction } from "./action/ChangeSpeedFieldAction.js";
import { ChannelAction } from "./action/ChannelAction.js";
import { ChargeAction } from "./action/ChargeAction.js";
import { CharmAction } from "./action/CharmAction.js";
import { ContinuousAttackAction } from "./action/ContinuousAttackAction.js";
import { ContinuousAttackNearbyAction } from "./action/ContinuousAttackNearbyAction.js";
import { CountBlindAction } from "./action/CountBlindAction.js";
import { CountDownAction } from "./action/CountDownAction.js";
import { CureAction } from "./action/CureAction.js";
import { DamageAction } from "./action/DamageAction.js";
import { DamageChargeAction } from "./action/DamageChargeAction.js";
import { DecoyAction } from "./action/DecoyAction.js";
import { DestroyAction } from "./action/DestroyAction.js";
import { DispelAction } from "./action/DispelAction.js";
import { DivideAction } from "./action/DivideAction.js";
import { EnchantLifeStealAction } from "./action/EnchantLifeStealAction.js";
import { EnchantStrikeBackAction } from "./action/EnchantStrikeBackAction.js";
import { FearAction } from "./action/FearAction.js";
import { HealAction } from "./action/HealAction.js";
import { HealDownAction } from "./action/HealDownAction.js";
import { HealFieldAction } from "./action/HealFieldAction.js";
import { IFExistsFieldForAllAction } from "./action/IFExistsFieldForAllAction.js";
import { IfForAllAction } from "./action/IfForAllAction.js";
import { IfForChildrenAction } from "./action/IfForChildrenAction.js";
import { IfHasTargetAction } from "./action/IfHasTargetAction.js";
import { IgnoreDecoyAction } from "./action/IgnoreDecoyAction.js";
import { InhibitHealAction } from "./action/InhibitHealAction.js";
import { KnightGuardAction } from "./action/KnightGuardAction.js";
import { KnockAction } from "./action/KnockAction.js";
import { LogBarrierAction } from "./action/LogBarrierAction.js";
import { LoopMotionRepeatAction } from "./action/LoopMotionRepeatAction.js";
import { LoopTriggerAction } from "./action/LoopTriggerAction.js";
import { ModeChangeAction } from "./action/ModeChangeAction.js";
import { MoveAction } from "./action/MoveAction.js";
import { MovePartsAction } from "./action/MovePartsAction.js";
import { MultipleAction } from "./action/MultipleAction.js";
import { NoDamageAction } from "./action/NoDamageAction.js";
import { PassiveAction } from "./action/PassiveAction.js";
import { PassiveDamageUpAction } from "./action/PassiveDamageUpAction.js";
import { PassiveInermittentAction } from "./action/PassiveInermittentAction.js";
import { PassiveSealAction } from "./action/PassiveSealAction.js";
import { RatioDamageAction } from "./action/RatioDamageAction.js";
import { ReflexiveAction } from "./action/ReflexiveAction.js";
import { RegenerationAction } from "./action/RegenerationAction.js";
import { RevivalAction } from "./action/RevivalAction.js";
import { SealAction } from "./action/SealAction.js";
import { SearchAreaChangeAction } from "./action/SearchAreaChangeAction.js";
import { SkillExecCountAction } from "./action/SkillExecCountAction.js";
import { StealthAction } from "./action/StealthAction.js";
import { StopFieldAction } from "./action/StopFieldAction.js";
import { SummonAction } from "./action/SummonAction.js";
import { ToadAction } from "./action/ToadAction.js";
import { TriggerAction } from "./action/TriggerAction.js";
import { UBChangeTimeAction } from "./action/UBChangeTimeAction.js";
import { UpperLimitAttackAction } from "./action/UpperLimitAttackAction.js";
import { WaveStartIdleAction } from "./action/WaveStartIdleAction.js";
export function localizedDetail(skillAction) {
    return (() => {
        switch (skillAction.action_type) {
            case 1:
                return new DamageAction(skillAction);
            case 2:
                return new MoveAction(skillAction);
            case 3:
                return new KnockAction(skillAction);
            case 4:
                return new HealAction(skillAction);
            case 5:
                return new CureAction(skillAction);
            case 6:
                return new BarrierAction(skillAction);
            case 7:
                return new ReflexiveAction(skillAction);
            case 8:
            case 9:
            case 12:
            case 13:
                return new AilmentAction(skillAction);
            case 10:
                return new AuraAction(skillAction);
            case 11:
                return new CharmAction(skillAction);
            case 14:
                return new ModeChangeAction(skillAction);
            case 15:
                return new SummonAction(skillAction);
            case 16:
                return new ChangeEnergyAction(skillAction);
            case 17:
                return new TriggerAction(skillAction);
            case 18:
                return new DamageChargeAction(skillAction);
            case 19:
                return new ChargeAction(skillAction);
            case 20:
                return new DecoyAction(skillAction);
            case 21:
                return new NoDamageAction(skillAction);
            case 22:
                return new ChangePatternAction(skillAction);
            case 23:
                return new IfForChildrenAction(skillAction);
            case 24:
                return new RevivalAction(skillAction);
            case 25:
                return new ContinuousAttackAction(skillAction);
            case 26:
                return new AdditiveAction(skillAction);
            case 27:
                return new MultipleAction(skillAction);
            case 28:
                return new IfForAllAction(skillAction);
            case 29:
                return new SearchAreaChangeAction(skillAction);
            case 30:
                return new DestroyAction(skillAction);
            case 31:
                return new ContinuousAttackNearbyAction(skillAction);
            case 32:
                return new EnchantLifeStealAction(skillAction);
            case 33:
                return new EnchantStrikeBackAction(skillAction);
            case 34:
                return new AccumulativeDamageAction(skillAction);
            case 35:
                return new SealAction(skillAction);
            case 36:
                return new AttackFieldAction(skillAction);
            case 37:
                return new HealFieldAction(skillAction);
            case 38:
                return new ChangeParameterFieldAction(skillAction);
            case 39:
                return new AbnormalStateFieldAction(skillAction);
            case 40:
                return new ChangeSpeedFieldAction(skillAction);
            case 41:
                return new UBChangeTimeAction(skillAction);
            case 42:
                return new LoopTriggerAction(skillAction);
            case 43:
                return new IfHasTargetAction(skillAction);
            case 44:
                return new WaveStartIdleAction(skillAction);
            case 45:
                return new SkillExecCountAction(skillAction);
            case 46:
                return new RatioDamageAction(skillAction);
            case 47:
                return new UpperLimitAttackAction(skillAction);
            case 48:
                return new RegenerationAction(skillAction);
            case 49:
                return new DispelAction(skillAction);
            case 50:
                return new ChannelAction(skillAction);
            case 52:
                return new ChangeBodyWidthAction(skillAction);
            case 53:
                return new IFExistsFieldForAllAction(skillAction);
            case 54:
                return new StealthAction(skillAction);
            case 55:
                return new MovePartsAction(skillAction);
            case 56:
                return new CountBlindAction(skillAction);
            case 57:
                return new CountDownAction(skillAction);
            case 58:
                return new StopFieldAction(skillAction);
            case 59:
                return new InhibitHealAction(skillAction);
            case 60:
                return new AttackSealAction(skillAction);
            case 61:
                return new FearAction(skillAction);
            case 62:
                return new AweAction(skillAction);
            case 63:
                return new LoopMotionRepeatAction(skillAction);
            case 69:
                return new ToadAction(skillAction);
            case 71:
                return new KnightGuardAction(skillAction);
            case 73:
                return new LogBarrierAction(skillAction);
            case 74:
                return new DivideAction(skillAction);
            case 75:
                return new ActionByHitCountAction(skillAction);
            case 76:
                return new HealDownAction(skillAction);
            case 77:
                return new PassiveSealAction(skillAction);
            case 78:
                return new PassiveDamageUpAction(skillAction);
            case 90:
                return new PassiveAction(skillAction);
            case 91:
                return new PassiveInermittentAction(skillAction);
            case 92:
                return new ChangeEnergyRecoveryRatioByDamageAction(skillAction);
            case 93:
                return new IgnoreDecoyAction(skillAction);
            default:
                return new ActionParameter(skillAction);
        }
    })().localizedDetail();
}
