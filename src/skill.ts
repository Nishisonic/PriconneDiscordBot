import { Message } from "discord.js";
import { AbnormalStateFieldAction } from "./action/abnormalStateFieldAction.js";
import { AccumulativeDamageAction } from "./action/accumulativeDamageAction.js";
import { ActionByHitCountAction } from "./action/actionByHitCountAction.js";
import { ActionParameter } from "./action/actionParameter.js";
import { AdditiveAction } from "./action/additiveAction.js";
import { AilmentAction } from "./action/ailmentAction.js";
import { AttackFieldAction } from "./action/attackFieldAction.js";
import { AttackSealAction } from "./action/attackSealAction.js";
import { AuraAction } from "./action/auraAction.js";
import { AweAction } from "./action/aweAction.js";
import { BarrierAction } from "./action/barrierAction.js";
import { ChangeBodyWidthAction } from "./action/changeBodyWidthAction.js";
import { ChangeEnergyAction } from "./action/changeEnergyAction.js";
import { ChangeEnergyRecoveryRatioByDamageAction } from "./action/changeEnergyRecoveryRatioByDamageAction.js";
import { ChangeParameterFieldAction } from "./action/changeParameterFieldAction.js";
import { ChangePatternAction } from "./action/changePatternAction.js";
import { ChangeSpeedFieldAction } from "./action/changeSpeedFieldAction.js";
import { ChannelAction } from "./action/channelAction.js";
import { ChargeAction } from "./action/chargeAction.js";
import { CharmAction } from "./action/charmAction.js";
import { ContinuousAttackAction } from "./action/continuousAttackAction.js";
import { ContinuousAttackNearbyAction } from "./action/continuousAttackNearbyAction.js";
import { CountBlindAction } from "./action/countBlindAction.js";
import { CountDownAction } from "./action/countDownAction.js";
import { CureAction } from "./action/cureAction.js";
import { DamageAction } from "./action/damageAction.js";
import { DamageByBehaviourAction } from "./action/damageByBehaviourAction.js";
import { DamageChargeAction } from "./action/damageChargeAction.js";
import { DecoyAction } from "./action/decoyAction.js";
import { DestroyAction } from "./action/destroyAction.js";
import { DispelAction } from "./action/dispelAction.js";
import { DivideAction } from "./action/divideAction.js";
import { EnchantLifeStealAction } from "./action/enchantLifeStealAction.js";
import { EnchantStrikeBackAction } from "./action/enchantStrikeBackAction.js";
import { FearAction } from "./action/fearAction.js";
import { HealAction } from "./action/healAction.js";
import { HealDownAction } from "./action/healDownAction.js";
import { HealFieldAction } from "./action/healFieldAction.js";
import { IFExistsFieldForAllAction } from "./action/iFExistsFieldForAllAction.js";
import { IfForAllAction } from "./action/ifForAllAction.js";
import { IfForChildrenAction } from "./action/ifForChildrenAction.js";
import { IfHasTargetAction } from "./action/ifHasTargetAction.js";
import { IgnoreDecoyAction } from "./action/ignoreDecoyAction.js";
import { InhibitHealAction } from "./action/inhibitHealAction.js";
import { KnightGuardAction } from "./action/knightGuardAction.js";
import { KnockAction } from "./action/knockAction.js";
import { LogBarrierAction } from "./action/logBarrierAction.js";
import { LoopMotionRepeatAction } from "./action/loopMotionRepeatAction.js";
import { LoopTriggerAction } from "./action/loopTriggerAction.js";
import { ModeChangeAction } from "./action/modeChangeAction.js";
import { MoveAction } from "./action/moveAction.js";
import { MovePartsAction } from "./action/movePartsAction.js";
import { MultipleAction } from "./action/multipleAction.js";
import { NoDamageAction } from "./action/noDamageAction.js";
import { PassiveAction } from "./action/passiveAction.js";
import { PassiveDamageUpAction } from "./action/passiveDamageUpAction.js";
import { PassiveInermittentAction } from "./action/passiveInermittentAction.js";
import { PassiveSealAction } from "./action/passiveSealAction.js";
import { RatioDamageAction } from "./action/ratioDamageAction.js";
import { ReflexiveAction } from "./action/reflexiveAction.js";
import { RegenerationAction } from "./action/regenerationAction.js";
import { RevivalAction } from "./action/revivalAction.js";
import { SealAction } from "./action/sealAction.js";
import { SearchAreaChangeAction } from "./action/searchAreaChangeAction.js";
import { SkillExecCountAction } from "./action/skillExecCountAction.js";
import { StealthAction } from "./action/stealthAction.js";
import { StopFieldAction } from "./action/stopFieldAction.js";
import { SummonAction } from "./action/summonAction.js";
import { ToadAction } from "./action/toadAction.js";
import { TriggerAction } from "./action/triggerAction.js";
import { UBChangeTimeAction } from "./action/ubChangeTimeAction.js";
import { UpperLimitAttackAction } from "./action/upperLimitAttackAction.js";
import { WaveStartIdleAction } from "./action/waveStartIdleAction.js";
import { master } from "./db.js";
import {
  SkillAction,
  SkillData,
  UnitAttackPattern,
  UnitData,
  UnitSkillData,
} from "./master";

export async function skill(message: Message) {
  if (message.content.match(/^\.skill .+$/)) {
    const name = message.content
      .replace(/^\.skill (.+)$/, "$1")
      .replace(/\(/g, "（")
      .replace(/\)/g, "）");
    const units = (await master.allAsync(`
        SELECT *
        FROM unit_data
        WHERE unit_name = '${name}'
      `)) as Readonly<UnitData[]>;
    if (units.length > 0) {
      units.forEach(async (unit) => {
        const unitSkillData = await findUnitSkillDataAsync(unit.unit_id);
        const attackPatternMessage = await getAttackPatternStringAsync(
          unit.unit_id
        );
        const skillMessage = (
          await Promise.all(
            [
              new SkillInfo(unitSkillData.union_burst, "UB"),
              new SkillInfo(unitSkillData.union_burst_evolution, "UB+"),
              new SkillInfo(unitSkillData.main_skill_1, "スキル1"),
              new SkillInfo(unitSkillData.main_skill_evolution_1, "スキル1+"),
              new SkillInfo(unitSkillData.main_skill_2, "スキル2"),
              new SkillInfo(unitSkillData.main_skill_evolution_2, "スキル2+"),
              new SkillInfo(unitSkillData.main_skill_3, "スキル3"),
              new SkillInfo(unitSkillData.main_skill_4, "スキル4"),
              new SkillInfo(unitSkillData.main_skill_5, "スキル5"),
              new SkillInfo(unitSkillData.main_skill_6, "スキル6"),
              new SkillInfo(unitSkillData.main_skill_7, "スキル7"),
              new SkillInfo(unitSkillData.main_skill_8, "スキル8"),
              new SkillInfo(unitSkillData.main_skill_9, "スキル9"),
              new SkillInfo(unitSkillData.main_skill_10, "スキル10"),
              new SkillInfo(unitSkillData.ex_skill_1, "EXスキル1"),
              new SkillInfo(unitSkillData.ex_skill_evolution_1, "EXスキル1+"),
              new SkillInfo(unitSkillData.ex_skill_2, "EXスキル2"),
              new SkillInfo(unitSkillData.ex_skill_evolution_2, "EXスキル2+"),
              new SkillInfo(unitSkillData.ex_skill_3, "EXスキル3"),
              new SkillInfo(unitSkillData.ex_skill_evolution_3, "EXスキル3+"),
              new SkillInfo(unitSkillData.ex_skill_4, "EXスキル4"),
              new SkillInfo(unitSkillData.ex_skill_evolution_4, "EXスキル4+"),
              new SkillInfo(unitSkillData.ex_skill_5, "EXスキル5"),
              new SkillInfo(unitSkillData.ex_skill_evolution_5, "EXスキル5+"),
              new SkillInfo(unitSkillData.sp_skill_1, "SPスキル1"),
              new SkillInfo(unitSkillData.sp_skill_evolution_1, "SPスキル1+"),
              new SkillInfo(unitSkillData.sp_skill_2, "SPスキル2"),
              new SkillInfo(unitSkillData.sp_skill_evolution_2, "SPスキル2+"),
              new SkillInfo(unitSkillData.sp_skill_3, "SPスキル3"),
              new SkillInfo(unitSkillData.sp_skill_4, "SPスキル4"),
              new SkillInfo(unitSkillData.sp_skill_5, "SPスキル5"),
            ].map(
              async ({ skillId, title }) =>
                await skillFormat(await findSkillDataAsync(skillId), title)
            )
          )
        ).join("");

        await message.channel.send(
          `${name}\n\n${attackPatternMessage}\n\n${skillMessage}`
        );
      });
    } else {
      await message.channel.send(
        `「${name}」のキャラ情報が見つかりませんでした。`
      );
    }
  }
}

class SkillInfo {
  skillId: number;
  title: string;

  constructor(skillId: number, title: string) {
    this.skillId = skillId;
    this.title = title;
  }
}

async function findUnitSkillDataAsync(unitId: number) {
  return (await master.getAsync(`
      SELECT *
      FROM unit_skill_data
      WHERE unit_id = '${unitId}'
    `)) as Readonly<UnitSkillData>;
}

async function findSkillDataAsync(skillId: number) {
  return (await master.getAsync(`
      SELECT *
      FROM skill_data
      WHERE skill_id = '${skillId}'
    `)) as Readonly<SkillData>;
}

async function getAttackPatternStringAsync(unitId: number) {
  const patterns = await findUnitAttackPatternAsync(unitId);
  return (
    patterns
      .map((pattern, index) => {
        const atkPatternList = [
          pattern.atk_pattern_1,
          pattern.atk_pattern_2,
          pattern.atk_pattern_3,
          pattern.atk_pattern_4,
          pattern.atk_pattern_5,
          pattern.atk_pattern_6,
          pattern.atk_pattern_7,
          pattern.atk_pattern_8,
          pattern.atk_pattern_9,
          pattern.atk_pattern_10,
          pattern.atk_pattern_11,
          pattern.atk_pattern_12,
          pattern.atk_pattern_13,
          pattern.atk_pattern_14,
          pattern.atk_pattern_15,
          pattern.atk_pattern_16,
          pattern.atk_pattern_17,
          pattern.atk_pattern_18,
          pattern.atk_pattern_19,
          pattern.atk_pattern_20,
        ].filter((value) => value > 0);
        const loopStart = pattern.loop_start;
        const loopEnd = pattern.loop_end;

        return atkPatternList.reduce((p, pattern, i) => {
          const attack = `${i + 1 === loopStart ? "[" : ""}${toAttackString(
            pattern
          )}${i + 1 === loopEnd ? "]" : ""}`;
          return i > 0 ? `${p}→${attack}` : `${p}${attack}`;
        }, `**行動パターン${index + 1}**\n`);
      })
      .join("\n") + "\n(SPスキルは絵文字で表示されます)"
  );
}

function toAttackString(pattern: number) {
  switch (pattern) {
    case 1:
      return "通";
    case 1001:
      return "１";
    case 2001:
      return ":one:";
    case 1002:
      return "２";
    case 2002:
      return ":two:";
    case 1003:
      return "３";
    case 2003:
      return ":three:";
    case 1004:
      return "４";
    case 2004:
      return ":four:";
    case 1005:
      return "５";
    case 2005:
      return ":five:";
    case 1006:
      return "６";
    case 2006:
      return ":six:";
    case 1007:
      return "７";
    case 2007:
      return ":seven:";
    case 1008:
      return "８";
    case 2008:
      return ":eight:";
    case 1009:
      return "９";
    case 2009:
      return ":nine:";
    case 1010:
      return "10";
    case 2010:
      return ":keycap_ten:";
    default:
      return "？";
  }
}

async function findUnitAttackPatternAsync(unitId: number) {
  return (await master.allAsync(`
      SELECT *
      FROM unit_attack_pattern
      WHERE unit_id = '${unitId}'
    `)) as Readonly<UnitAttackPattern[]>;
}

async function skillFormat(skillData: SkillData | null, title: string) {
  if (skillData) {
    const detail = await toDetailSkillDescription(skillData);
    return `**[${title}]** ${skillData.name}\`\n待機時間：${skillData.skill_cast_time}s\`\n${skillData.description}\n\`スキルアクション\`\n${detail}\n\n`;
  }
  return "";
}

async function toDetailSkillDescription({
  action_1,
  action_2,
  action_3,
  action_4,
  action_5,
  action_6,
  action_7,
}: SkillData) {
  return (
    await Promise.all(
      [action_1, action_2, action_3, action_4, action_5, action_6, action_7]
        .filter((actionId) => actionId > 0)
        .map(async (actionId, i) => {
          const skillAction = await findSkillActionAsync(actionId);

          return `[${i + 1}]${localizedDetail(skillAction)}`;
        })
    )
  ).join("\n");
}

export async function findSkillActionAsync(actionId: number) {
  return (await master.getAsync(`
      SELECT *
      FROM skill_action
      WHERE action_id = '${actionId}'
    `)) as Readonly<SkillAction>;
}

export function localizedDetail(skillAction: SkillAction) {
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
      case 79:
        return new DamageByBehaviourAction(skillAction);
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
