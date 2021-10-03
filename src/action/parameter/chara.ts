import { Property } from "./property.js";
import { master } from "../../db.js";
import {
  ExperienceTeam,
  UniqueEquipmentEnhanceData,
  UnitPromotionStatus,
  UnitRarity,
} from "../../master";
import { getCharaStoryStatusPropertyAsync } from "./chara/charaStoryStatus.js";
import { getAllEquipmentPropertyAsync } from "./chara/equipment.js";
import { getPassiveSkillPropertyAsync } from "./chara/passiveSkill.js";
import { getPromotionBonusPropertyAsync } from "./chara/promotionBonus.js";
import { getUniqueEquipmentPropertyAsync } from "./chara/uniqueEquipment.js";
import { getUnitPromotionStatusPropertyAsync } from "./chara/unitPromotionStatus.js";
import { getUnitRarityPropertyAsync } from "./chara/unitRarity.js";

export async function getCharaStatus(unitId: number) {
  const rarity = await getMaxCharaRarityAsync(unitId);
  const rank = await getMaxCharaRankAsync(unitId);
  const level = await getMaxCharaLevelAsync();
  const uniqueEquipmentEnhanceLevel =
    await getMaxUniqueEquipmentEnhanceLevelAsync(rank);

  const property = new Property();
  // レアリティボーナス
  property.plusEqual(
    await getUnitRarityPropertyAsync(unitId, rarity, rank, level)
  );
  // ストーリーボーナス
  property.plusEqual(await getCharaStoryStatusPropertyAsync(unitId));
  // ランクステータス
  property.plusEqual(await getUnitPromotionStatusPropertyAsync(unitId, rank));
  // ランクボーナス
  property.plusEqual(await getPromotionBonusPropertyAsync(unitId, rank));
  // 通常装備ID
  property.plusEqual(await getAllEquipmentPropertyAsync(unitId, rank));
  // パッシブスキルボーナス
  property.plusEqual(await getPassiveSkillPropertyAsync(unitId, rarity, level));
  // 専用装備
  property.plusEqual(
    await getUniqueEquipmentPropertyAsync(unitId, uniqueEquipmentEnhanceLevel)
  );
  return property;
}

export async function getMaxCharaLevelAsync() {
  const { team_level } = (await master.getAsync(`
    SELECT *
    FROM experience_team
    ORDER BY team_level DESC
  `)) as Readonly<ExperienceTeam>;

  return team_level - 1;
}

export const maxCharaLevel = await getMaxCharaLevelAsync();

async function getMaxCharaRarityAsync(unitId: number) {
  const { rarity } = (await master.getAsync(`
    SELECT *
    FROM unit_rarity
    WHERE unit_id = '${unitId}'
    ORDER BY rarity DESC
  `)) as Readonly<UnitRarity>;

  return rarity;
}

async function getMaxCharaRankAsync(unitId: number) {
  const { promotion_level } = (await master.getAsync(`
    SELECT *
    FROM unit_promotion
    WHERE unit_id = '${unitId}'
    ORDER BY promotion_level DESC
  `)) as Readonly<UnitPromotionStatus>;

  return promotion_level;
}

async function getMaxUniqueEquipmentEnhanceLevelAsync(rank: number) {
  const { enhance_level } = (await master.getAsync(`
    SELECT *
    FROM unique_equipment_enhance_data
    WHERE rank <= ${rank}
    ORDER BY enhance_level DESC
  `)) as Readonly<UniqueEquipmentEnhanceData>;

  return enhance_level;
}
