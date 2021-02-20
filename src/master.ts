export interface ActualUnitBackground {
  unit_id: number;
  unit_name: string;
  bg_id: number;
  face_type: number;
}

export interface AilmentData {
  ailment_id: number;
  ailment_action: number;
  ailment_detail_1: number;
  ailment_name: string;
}

export interface AlbumProductionList {
  id: number;
  unit_id: number;
  type: number;
  title: string;
  description: string;
}

export interface AlbumVoiceList {
  id: number;
  unit_id: number;
  sheet_id: string;
  voice_id: string;
  title: string;
  description: string;
}

export interface ArcadeList {
  arcade_id: number;
  title: string;
  start_time: string;
  price: number;
  sheet_id: string;
  cue_id: string;
  where_type: number;
  description: string;
}

export interface ArenaDailyRankReward {
  id: number;
  rank_from: number;
  rank_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ArenaDefenceReward {
  id: number;
  limit_count: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ArenaMaxRankReward {
  id: number;
  rank_from: number;
  rank_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ArenaMaxSeasonRankReward {
  id: number;
  rank_from: number;
  rank_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface Banner {
  banner_id: number;
  type: number;
  system_id: number;
  gacha_id: number;
  priority: number;
  start_date: string;
  end_date: string;
  sub_banner_id_1: number;
  is_show_room: number;
}

export interface BgData {
  view_name: string;
  bg_id: number;
  event_id: number;
}

export interface BirthdayLoginBonusData {
  login_bonus_id: number;
  name: string;
  login_bonus_type: number;
  start_time: string;
  end_time: string;
  adv_id: number;
}

export interface BirthdayLoginBonusDetail {
  id: number;
  login_bonus_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
}

export interface CampaignFreegacha {
  id: number;
  campaign_id: number;
  freegacha_1: number;
  freegacha_10: number;
  start_time: string;
  end_time: string;
  stock_10_flag: number;
  relation_id: number;
  relation_count: number;
}

export interface CampaignFreegachaData {
  id: number;
  campaign_id: number;
  gacha_id: number;
}

export interface CampaignFreegachaSp {
  campaign_id: number;
  max_exec_count: number;
  start_time: string;
  end_time: string;
}

export interface CampaignLevelData {
  id: number;
  level_id: number;
  lv_from: number;
  lv_to: number;
  value: number;
  label_color: string;
  frame_color: string;
}

export interface CampaignMissionCategory {
  id: number;
  campaign_id: number;
  type: number;
  lv_from: number;
  lv_to: number;
}

export interface CampaignMissionData {
  mission_id: number;
  campaign_id: number;
  type: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_value_4: number;
  condition_value_5: number;
  condition_value_6: number;
  condition_value_7: number;
  condition_value_8: number;
  condition_value_9: number;
  condition_value_10: number;
  condition_num: number;
  campaign_mission_reward_id: number;
  system_id: number;
  start_time: string;
  end_time: string;
  min_level: number;
  max_level: number;
  title_color_id: number;
  visible_flag: number;
  mark_flag: number;
}

export interface CampaignMissionRewardData {
  id: number;
  campaign_mission_reward_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
}

export interface CampaignMissionSchedule {
  campaign_id: number;
  start_time: string;
  end_time: string;
  close_time: string;
}

export interface CampaignSchedule {
  campaign_category: number;
  value: number;
  start_time: string;
  end_time: string;
}

export interface CampaignShioriGroup {
  id: number;
  shiori_group_id: number;
  event_id: number;
}

export interface CharaETicketData {
  ticket_id: number;
  start_time: string;
  end_time: string;
  jewel_store_id: number;
}

export interface CharaFortuneRail {
  rail_id: number;
  gimmick_1_id: number;
  gimmick_1_x: string;
  gimmick_2_id: number;
  gimmick_2_x: string;
  gimmick_3_id: number;
  gimmick_3_x: string;
  gimmick_4_id: number;
  gimmick_4_x: string;
  gimmick_5_id: number;
  gimmick_5_x: string;
  gimmick_6_id: number;
  gimmick_6_x: string;
  gimmick_7_id: number;
  gimmick_7_x: string;
  gimmick_8_id: number;
  gimmick_8_x: string;
  gimmick_9_id: number;
  gimmick_9_x: string;
  gimmick_10_id: number;
  gimmick_10_x: string;
}

export interface CharaFortuneReward {
  id: number;
  fortune_id: number;
  rank: number;
  reward_type_1: number;
  reward_id_1: number;
  count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  count_5: number;
}

export interface CharaFortuneScenario {
  scenario_id: number;
  rail_1: number;
  rail_2: number;
  rail_3: number;
  rail_4: number;
}

export interface CharaFortuneSchedule {
  fortune_id: number;
  name: string;
  start_time: string;
  end_time: string;
}

export interface CharaIdentity {
  unit_id: number;
  chara_type: number;
}

export interface CharaStoryStatus {
  story_id: number;
  unlock_story_name: string;
  status_type_1: number;
  status_rate_1: number;
  status_type_2: number;
  status_rate_2: number;
  status_type_3: number;
  status_rate_3: number;
  status_type_4: number;
  status_rate_4: number;
  status_type_5: number;
  status_rate_5: number;
  chara_id_1: number;
  chara_id_2: number;
  chara_id_3: number;
  chara_id_4: number;
  chara_id_5: number;
  chara_id_6: number;
  chara_id_7: number;
  chara_id_8: number;
  chara_id_9: number;
  chara_id_10: number;
}

export interface CharacterLoveRankupText {
  chara_id: number;
  name: string;
  love_level: number;
  scale: number;
  position_x: number;
  position_y: number;
  voice_id_1: number;
  face_1: number;
  serif_1: number;
  voice_id_2: number;
  face_2: number;
  serif_2: number;
  voice_id_3: number;
  face_3: number;
  serif_3: number;
}

export interface ClanBattle2BossData {
  boss_id: number;
  clan_battle_id: number;
  difficulty: number;
  order_num: number;
  boss_thumb_id: number;
  position_x: number;
  position_y: number;
  scale_ratio: number;
  tap_width_ratio: number;
  tap_height_ratio: number;
  map_position_x: number;
  map_position_y: number;
  cursor_position: number;
  result_boss_position_y: number;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
  quest_detail_monster_size: number;
  quest_detail_monster_height: number;
  battle_report_monster_size: number;
  battle_report_monster_height: number;
  background: number;
  wave_bgm: string;
}

export interface ClanBattle2MapData {
  id: number;
  clan_battle_id: number;
  map_bg: number;
  difficulty: number;
  lap_num_from: number;
  lap_num_to: number;
  boss_id_1: number;
  boss_id_2: number;
  boss_id_3: number;
  boss_id_4: number;
  boss_id_5: number;
  aura_effect: number;
  rsl_unlock_lap: number;
  phase: number;
  wave_group_id_1: number;
  wave_group_id_2: number;
  wave_group_id_3: number;
  wave_group_id_4: number;
  wave_group_id_5: number;
  fix_reward_id_1: number;
  fix_reward_id_2: number;
  fix_reward_id_3: number;
  fix_reward_id_4: number;
  fix_reward_id_5: number;
  damage_rank_id_1: number;
  damage_rank_id_2: number;
  damage_rank_id_3: number;
  damage_rank_id_4: number;
  damage_rank_id_5: number;
  reward_gold_coefficient: number;
  limited_mana: number;
  last_attack_reward_id: number;
  score_coefficient_1: number;
  score_coefficient_2: number;
  score_coefficient_3: number;
  score_coefficient_4: number;
  score_coefficient_5: number;
  param_adjust_id: number;
  param_adjust_interval: number;
}

export interface ClanBattleBattleMissionData {
  mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_value_4: number;
  condition_value_5: number;
  condition_value_6: number;
  condition_value_7: number;
  condition_value_8: number;
  condition_value_9: number;
  condition_value_10: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  start_time: string;
  end_time: string;
}

export interface ClanBattleBossDamageRank {
  id: number;
  damage_rank_id: number;
  ranking_from: number;
  ranking_to: number;
  odds_group_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ClanBattleBossFixReward {
  fix_reward_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ClanBattleLastAttackReward {
  last_attack_reward_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ClanBattleOddsData {
  odds_group_id: number;
  team_level_from: number;
  team_level_to: number;
  odds_csv_1: number;
  odds_csv_2: number;
  odds_csv_3: number;
  odds_csv_4: number;
  odds_csv_5: number;
  odds_csv_6: number;
  odds_csv_7: number;
  odds_csv_8: number;
  odds_csv_9: number;
  odds_csv_10: number;
}

export interface ClanBattleParamAdjust {
  param_adjust_id: number;
  level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  energy_recovery_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  accuracy: number;
  normal_atk_cast_time: number;
  score_coefficient: number;
}

export interface ClanBattlePeriod {
  clan_battle_id: number;
  period: number;
  period_detail: string;
  period_detail_bg: number;
  period_detail_s: string;
  period_detail_bg_s: number;
  period_detail_bg_position: number;
  period_detail_boss_position_x: number;
  period_detail_boss_position_y: number;
  start_time: string;
  end_time: string;
  interval_end: string;
  calc_start: string;
  result_start: string;
  result_end: string;
  limit_time: number;
  chest_id: number;
  quest_detail_rehearsal_label_height: number;
  min_carry_over_time: number;
}

export interface ClanBattlePeriodLapReward {
  id: number;
  clan_battle_id: number;
  period: number;
  lap_num_from: number;
  lap_num_to: number;
  ranking_bonus_group: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ClanBattlePeriodRankReward {
  id: number;
  clan_battle_id: number;
  period: number;
  rank_from: number;
  rank_to: number;
  ranking_bonus_group: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ClanBattleRecommendData {
  level_id: number;
  recommend_group: number;
  level_from: number;
  level_to: number;
  atack_party_count: number;
  magic_party_count: number;
}

export interface ClanBattleSBossData {
  boss_id: number;
  clan_battle_id: number;
  difficulty: number;
  order_num: number;
  boss_thumb_id: number;
  position_x: number;
  position_y: number;
  scale_ratio: number;
  tap_width_ratio: number;
  tap_height_ratio: number;
  map_position_x: number;
  map_position_y: number;
  cursor_position: number;
  result_boss_position_y: number;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
  quest_detail_monster_size: number;
  quest_detail_monster_height: number;
  battle_report_monster_size: number;
  battle_report_monster_height: number;
  background: number;
  wave_bgm: string;
}

export interface ClanBattleSBossFixReward {
  fix_reward_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface ClanBattleSMapData {
  id: number;
  clan_battle_id: number;
  map_bg: number;
  difficulty: number;
  lap_num_from: number;
  lap_num_to: number;
  boss_id_1: number;
  boss_id_2: number;
  boss_id_3: number;
  boss_id_4: number;
  boss_id_5: number;
  extra_battle_flag1: number;
  extra_battle_flag2: number;
  extra_battle_flag3: number;
  extra_battle_flag4: number;
  extra_battle_flag5: number;
  aura_effect: number;
  rsl_unlock_lap: number;
  phase: number;
  wave_group_id_1: number;
  wave_group_id_2: number;
  wave_group_id_3: number;
  wave_group_id_4: number;
  wave_group_id_5: number;
  fix_reward_id_1: number;
  fix_reward_id_2: number;
  fix_reward_id_3: number;
  fix_reward_id_4: number;
  fix_reward_id_5: number;
  damage_rank_id_1: number;
  damage_rank_id_2: number;
  damage_rank_id_3: number;
  damage_rank_id_4: number;
  damage_rank_id_5: number;
  reward_gold_coefficient: number;
  limited_mana: number;
  last_attack_reward_id: number;
  score_coefficient_1: number;
  score_coefficient_2: number;
  score_coefficient_3: number;
  score_coefficient_4: number;
  score_coefficient_5: number;
  param_adjust_id: number;
  param_adjust_interval: number;
}

export interface ClanBattleSParamAdjust {
  param_adjust_id: number;
  level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  energy_recovery_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  accuracy: number;
  normal_atk_cast_time: number;
  score_coefficient: number;
}

export interface ClanBattleSchedule {
  clan_battle_id: number;
  release_month: number;
  last_clan_battle_id: number;
  point_per_stamina: number;
  cost_group_id: number;
  cost_group_id_s: number;
  map_bgm: string;
  resource_id: number;
  start_time: string;
  end_time: string;
}

export interface ClanCostGroup {
  id: number;
  cost_group_id: number;
  difficulty: number;
  count: number;
  cost: number;
}

export interface ClanGrade {
  clan_grade_id: number;
  rank_from: number;
  rank_to: number;
}

export interface ClanInviteLevelGroup {
  level_group_id: number;
  team_level_from: number;
  team_level_to: number;
}

export interface ClanprofileContent {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
  disp_order: number;
}

export interface CombinedResultMotion {
  result_id: number;
  unit_id_1: number;
  disp_order_1: number;
  unit_id_2: number;
  disp_order_2: number;
  unit_id_3: number;
  disp_order_3: number;
  unit_id_4: number;
  disp_order_4: number;
  unit_id_5: number;
  disp_order_5: number;
}

export interface ContentMapData {
  content_map_id: number;
  name: string;
  map_type: number;
  area_id: number;
  condition_quest_id: number;
  quest_position_x: number;
  quest_position_y: number;
  icon_id: number;
  system_id: number;
  start_time: string;
  end_time: string;
}

export interface ContentReleaseData {
  system_id: number;
  team_level: number;
  story_id: number;
  quest_id: number;
  dialog: string;
}

export interface CooperationQuestData {
  quest_id: number;
  quest_name: string;
  difficulty_level: number;
  limit_team_level: number;
  team_exp: number;
  exp: number;
  limit_time: number;
  clear_reward_group_id: number;
  odds_group_id: number;
  lobby_background: number;
  background_1: number;
  wave_group_id_1: number;
  wave_bgm_sheet_id_1: number;
  wave_bgm_que_id_1: number;
  background_2: number;
  wave_group_id_2: number;
  wave_bgm_sheet_id_2: number;
  wave_bgm_que_id_2: number;
  background_3: number;
  wave_group_id_3: number;
  wave_bgm_sheet_id_3: number;
  wave_bgm_que_id_3: number;
  enemy_image_1: number;
  enemy_image_2: number;
  enemy_image_3: number;
  enemy_image_4: number;
  enemy_image_5: number;
  first_reward_image_1: number;
  first_reward_image_2: number;
  first_reward_image_3: number;
  first_reward_image_4: number;
  first_reward_image_5: number;
  repeat_reward_image_1: number;
  repeat_reward_image_2: number;
  repeat_reward_image_3: number;
  cooperation_quest_detail_bg_id: number;
  cooperation_quest_detail_bg_position: number;
  main_enemy_image_wave_1: number;
  sub_enemy_iamge_wave_1_1: number;
  sub_enemy_iamge_wave_1_2: number;
  sub_enemy_iamge_wave_1_3: number;
  sub_enemy_iamge_wave_1_4: number;
  main_enemy_image_wave_2: number;
  sub_enemy_iamge_wave_2_1: number;
  sub_enemy_iamge_wave_2_2: number;
  sub_enemy_iamge_wave_2_3: number;
  sub_enemy_iamge_wave_2_4: number;
  main_enemy_image_wave_3: number;
  sub_enemy_iamge_wave_3_1: number;
  sub_enemy_iamge_wave_3_2: number;
  sub_enemy_iamge_wave_3_3: number;
  sub_enemy_iamge_wave_3_4: number;
  quest_comment: string;
  unlock_quest_id_1: number;
  unlock_quest_id_2: number;
}

export interface CustomMypage {
  still_id: number;
  group_id: number;
  still_group_id: number;
  still_name: string;
  vertical_still_flg: number;
  scroll_direction: number;
}

export interface CustomMypageGroup {
  group_id: number;
  group_name: string;
}

export interface DailyMissionData {
  daily_mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  start_time: string;
  end_time: string;
  min_level: number;
  max_level: number;
  title_color_id: number;
  visible_flag: number;
}

export interface DearChara {
  event_id: number;
  chara_index: number;
  chara_name: string;
  max_dear_point: number;
  reference_type: number;
  reference_id: number;
  episode_unlock_offset_x: number;
  episode_unlock_offset_y: number;
  dear_point_up_offset_x: number;
  dear_point_up_offset_y: number;
  condition_story_id: number;
}

export interface DearReward {
  id: number;
  event_id: number;
  chara_index: number;
  dear_point: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface DearSetting {
  event_id: number;
  system_name: string;
  tutorial_quest_id: number;
  tutorial_chara_index: number;
  tutorial_story_id: number;
}

export interface DearStoryData {
  story_group_id: number;
  story_type: number;
  value: number;
  title: string;
  thumbnail_id: number;
  disp_order: number;
  start_time: string;
  end_time: string;
}

export interface DearStoryDetail {
  story_id: number;
  story_group_id: number;
  title: string;
  sub_title: string;
  visible_type: number;
  story_end: number;
  pre_story_id: number;
  love_level: number;
  requirement_id: number;
  unlock_quest_id: number;
  story_quest_id: number;
  chara_index: number;
  condition_event_quest_id: number;
  condition_event_boss_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_value_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_value_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_value_3: number;
  start_time: string;
  end_time: string;
}

export interface DefineSpskill {
  link_skill_slot: number;
  sp_skill_id: number;
  base_skill_id: number;
  skill_category: number;
}

export interface DungeonAreaData {
  dungeon_area_id: number;
  dungeon_type: number;
  dungeon_name: string;
  description: string;
  open_quest_id: number;
  content_release_story: number;
  initial_clear_story: number;
  wave_group_id: number;
  reward_group_id: number;
  recommend_level: number;
  quest_position_x: number;
  quest_position_y: number;
  icon_id: number;
  coin_item_id: number;
  enemy_image_1: number;
  enemy_image_2: number;
  enemy_image_3: number;
  enemy_image_4: number;
  enemy_image_5: number;
  view_reward_id_1: number;
  view_reward_id_2: number;
  view_reward_id_3: number;
  view_reward_id_4: number;
  view_reward_id_5: number;
  recovery_hp_rate: number;
  recovery_tp_rate: number;
  start_time: string;
  end_time: string;
}

export interface DungeonQuestData {
  quest_id: number;
  dungeon_area_id: number;
  floor_num: number;
  limit_time: number;
  matching_coefficient: number;
  reward_image_1: number;
  reward_image_2: number;
  reward_image_3: number;
  reward_coin: number;
  chest_id: number;
  odds_group_id: number;
  background: number;
  dungeon_quest_detail_bg_id: number;
  dungeon_quest_detail_bg_position: number;
  dungeon_quest_detail_monster_size: number;
  dungeon_quest_detail_monster_height: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
}

export interface EmblemData {
  emblem_id: number;
  disp_order: number;
  type: number;
  emblem_name: string;
  description_mission_id: number;
  event_emblem: number;
  start_time: string;
  end_time: string;
}

export interface EmblemMissionData {
  mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  visible_flag: number;
  start_time: string;
  end_time: string;
}

export interface EmblemMissionRewardData {
  id: number;
  mission_reward_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
  icon_type: number;
}

export interface EnemyEnableVoice {
  unit_id: number;
  voice_id: number;
}

export interface EnemyMParts {
  enemy_id: number;
  name: string;
  child_enemy_parameter_1: number;
  child_enemy_parameter_2: number;
  child_enemy_parameter_3: number;
  child_enemy_parameter_4: number;
  child_enemy_parameter_5: number;
}

export interface EnemyParameter {
  enemy_id: number;
  unit_id: number;
  name: string;
  level: number;
  rarity: number;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  ex_skill_lv_1: number;
  ex_skill_lv_2: number;
  ex_skill_lv_3: number;
  ex_skill_lv_4: number;
  ex_skill_lv_5: number;
  resist_status_id: number;
  accuracy: number;
  unique_equipment_flag_1: number;
  break_durabillity: number;
  virtual_hp: number;
}

export interface EnemyRewardData {
  drop_reward_id: number;
  drop_count: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  odds_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  odds_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  odds_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  odds_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
  odds_5: number;
}

export interface TowerSchedule {
  tower_schedule_id: number;
  max_tower_area_id: number;
  opening_story_id: number;
  count_start_time: string;
  recovery_disable_time: string;
  start_time: string;
  end_time: string;
}

export interface SkillData {
  skill_id: number;
  name: string;
  skill_type: number;
  skill_area_width: number;
  skill_cast_time: number;
  action_1: number;
  action_2: number;
  action_3: number;
  action_4: number;
  action_5: number;
  action_6: number;
  action_7: number;
  depend_action_1: number;
  depend_action_2: number;
  depend_action_3: number;
  depend_action_4: number;
  depend_action_5: number;
  depend_action_6: number;
  depend_action_7: number;
  description: string;
  icon_type: number;
}

export interface UnitData {
  unit_id: number;
  unit_name: string;
  kana: string;
  prefab_id: number;
  is_limited: number;
  rarity: number;
  motion_type: number;
  se_type: number;
  move_speed: number;
  search_area_width: number;
  atk_type: number;
  normal_atk_cast_time: number;
  cutin_1: number;
  cutin_2: number;
  cutin1_star6: number;
  cutin2_star6: number;
  guild_id: number;
  exskill_display: number;
  comment: string;
  only_disp_owned: number;
  start_time: string;
  end_time: string;
}

export interface SkillAction {
  action_id: number;
  class_id: number;
  action_type: number;
  action_detail_1: number;
  action_detail_2: number;
  action_detail_3: number;
  action_value_1: number;
  action_value_2: number;
  action_value_3: number;
  action_value_4: number;
  action_value_5: number;
  action_value_6: number;
  action_value_7: number;
  target_assignment: number;
  target_area: number;
  target_range: number;
  target_type: number;
  target_number: number;
  target_count: number;
  description: string;
  level_up_disp: string;
}

export interface UnitAttackPattern {
  pattern_id: number;
  unit_id: number;
  loop_start: number;
  loop_end: number;
  atk_pattern_1: number;
  atk_pattern_2: number;
  atk_pattern_3: number;
  atk_pattern_4: number;
  atk_pattern_5: number;
  atk_pattern_6: number;
  atk_pattern_7: number;
  atk_pattern_8: number;
  atk_pattern_9: number;
  atk_pattern_10: number;
  atk_pattern_11: number;
  atk_pattern_12: number;
  atk_pattern_13: number;
  atk_pattern_14: number;
  atk_pattern_15: number;
  atk_pattern_16: number;
  atk_pattern_17: number;
  atk_pattern_18: number;
  atk_pattern_19: number;
  atk_pattern_20: number;
}

export interface EquipmentCraft {
  equipment_id: number;
  crafted_cost: number;
  condition_equipment_id_1: number;
  consume_num_1: number;
  condition_equipment_id_2: number;
  consume_num_2: number;
  condition_equipment_id_3: number;
  consume_num_3: number;
  condition_equipment_id_4: number;
  consume_num_4: number;
  condition_equipment_id_5: number;
  consume_num_5: number;
  condition_equipment_id_6: number;
  consume_num_6: number;
  condition_equipment_id_7: number;
  consume_num_7: number;
  condition_equipment_id_8: number;
  consume_num_8: number;
  condition_equipment_id_9: number;
  consume_num_9: number;
  condition_equipment_id_10: number;
  consume_num_10: number;
}

export interface EquipmentData {
  equipment_id: number;
  equipment_name: string;
  description: string;
  promotion_level: number;
  craft_flg: number;
  equipment_enchance_point: number;
  sale_price: number;
  require_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  enable_donation: number;
  accuracy: number;
  display_item: number;
  item_type: number;
}

export interface EquipmentDonation {
  team_level: number;
  donation_num_once: number;
  donation_num_daily: number;
  request_num_once: number;
}

export interface EquipmentEnhanceData {
  promotion_level: number;
  equipment_enhance_level: number;
  needed_point: number;
  total_point: number;
}

export interface EquipmentEnhanceRate {
  equipment_id: number;
  equipment_name: string;
  description: string;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  accuracy: number;
}

export interface EventBgData {
  event_id: number;
  bg_id: number;
  start_date: string;
  end_date: string;
}

export interface EventBossTreasureBox {
  event_boss_treasure_box_id: number;
  treasure_type_1: number;
  event_boss_treasure_content_id_1: number;
  each_odds_1: number;
  treasure_type_2: number;
  event_boss_treasure_content_id_2: number;
  each_odds_2: number;
  treasure_type_3: number;
  event_boss_treasure_content_id_3: number;
  each_odds_3: number;
  treasure_type_4: number;
  event_boss_treasure_content_id_4: number;
  each_odds_4: number;
  treasure_type_5: number;
  event_boss_treasure_content_id_5: number;
  each_odds_5: number;
  treasure_type_6: number;
  event_boss_treasure_content_id_6: number;
  each_odds_6: number;
  treasure_type_7: number;
  event_boss_treasure_content_id_7: number;
  each_odds_7: number;
  treasure_type_8: number;
  event_boss_treasure_content_id_8: number;
  each_odds_8: number;
  treasure_type_9: number;
  event_boss_treasure_content_id_9: number;
  each_odds_9: number;
  treasure_type_10: number;
  event_boss_treasure_content_id_10: number;
  each_odds_10: number;
}

export interface EventBossTreasureContent {
  event_boss_treasure_content_id: number;
  reward_type_1: number;
  reward_id_1: number;
  odds_file_1: any;
  reward_num_1: number;
  odds_1: number;
  reward_type_2: number;
  reward_id_2: number;
  odds_file_2: number;
  reward_num_2: number;
  odds_2: number;
  reward_type_3: number;
  reward_id_3: number;
  odds_file_3: number;
  reward_num_3: number;
  odds_3: number;
  reward_type_4: number;
  reward_id_4: number;
  odds_file_4: number;
  reward_num_4: number;
  odds_4: number;
  reward_type_5: number;
  reward_id_5: number;
  odds_file_5: number;
  reward_num_5: number;
  odds_5: number;
}

export interface EventEffectSetting {
  event_id: number;
  type: number;
  value: number;
}

export interface EventEnemyParameter {
  enemy_id: number;
  unit_id: number;
  level: number;
  rarity: number;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  ex_skill_lv_1: number;
  ex_skill_lv_2: number;
  ex_skill_lv_3: number;
  ex_skill_lv_4: number;
  ex_skill_lv_5: number;
  resist_status_id: number;
  accuracy: number;
}

export interface EventEnemyRewardGroup {
  id: number;
  reward_group_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
  odds: number;
}

export interface EventGachaData {
  gacha_id: number;
  event_id: number;
  gacha_name: string;
  item_type: number;
  item_id: number;
  cost: number;
  repeat_step: number;
}

export interface EventIntroduction {
  id: number;
  event_id: number;
  introduction_number: number;
  start_time: string;
  end_time: string;
  maximum_chunk_size_1: number;
  maximum_chunk_size_loop_1: number;
  maximum_chunk_size_2: number;
  maximum_chunk_size_loop_2: number;
  maximum_chunk_size_3: number;
  maximum_chunk_size_loop_3: number;
  sheet_id: string;
  que_id: string;
}

export interface EventNaviComment {
  comment_id: number;
  where_type: number;
  character_id: number;
  face_type: number;
  character_name: string;
  description: string;
  voice_id: number;
  start_time: string;
  end_time: string;
  pos_x: number;
  pos_y: number;
  change_face_time: number;
  change_face_type: number;
  event_id: number;
}

export interface EventNaviCommentCondition {
  comment_id: number;
  condition_type_1: number;
  condition_value_1: number;
  condition_type_2: number;
  condition_value_2: number;
  condition_type_3: number;
  condition_value_3: number;
}

export interface EventReminder {
  reminder_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
  title_text: string;
  description_text: string;
  notice_text: string;
  thumbnail_id: number;
  btn_text: string;
  target_type: number;
  target_id: number;
}

export interface EventReminderCondition {
  id: number;
  reminder_id: number;
  condition_type: number;
  condition_id: number;
}

export interface EventRevivalWaveGroupData {
  id: number;
  wave_group_id: number;
  difficulty: number;
  wave: number;
  match_lv_min: number;
  match_lv_max: number;
  enemy_id_1: number;
  enemy_id_2: number;
  enemy_id_3: number;
  enemy_id_4: number;
  enemy_id_5: number;
  drop_gold_1: number;
  reward_group_id_1: number;
  disp_reward_type_1: number;
  disp_reward_id_1: number;
  reward_lot_count_1: number;
  reward_odds_1: number;
  drop_gold_2: number;
  reward_group_id_2: number;
  disp_reward_type_2: number;
  disp_reward_id_2: number;
  reward_lot_count_2: number;
  reward_odds_2: number;
  drop_gold_3: number;
  reward_group_id_3: number;
  disp_reward_type_3: number;
  disp_reward_id_3: number;
  reward_lot_count_3: number;
  reward_odds_3: number;
  drop_gold_4: number;
  reward_group_id_4: number;
  disp_reward_type_4: number;
  disp_reward_id_4: number;
  reward_lot_count_4: number;
  reward_odds_4: number;
  drop_gold_5: number;
  reward_group_id_5: number;
  disp_reward_type_5: number;
  disp_reward_id_5: number;
  reward_lot_count_5: number;
  reward_odds_5: number;
}

export interface EventSeriesWaveGroupData {
  id: number;
  wave_group_id: number;
  difficulty: number;
  wave: number;
  match_lv_min: number;
  match_lv_max: number;
  enemy_id_1: number;
  enemy_id_2: number;
  enemy_id_3: number;
  enemy_id_4: number;
  enemy_id_5: number;
  drop_gold_1: number;
  reward_group_id_1: number;
  disp_reward_type_1: number;
  disp_reward_id_1: number;
  reward_lot_count_1: number;
  reward_odds_1: number;
  drop_gold_2: number;
  reward_group_id_2: number;
  disp_reward_type_2: number;
  disp_reward_id_2: number;
  reward_lot_count_2: number;
  reward_odds_2: number;
  drop_gold_3: number;
  reward_group_id_3: number;
  disp_reward_type_3: number;
  disp_reward_id_3: number;
  reward_lot_count_3: number;
  reward_odds_3: number;
  drop_gold_4: number;
  reward_group_id_4: number;
  disp_reward_type_4: number;
  disp_reward_id_4: number;
  reward_lot_count_4: number;
  reward_odds_4: number;
  drop_gold_5: number;
  reward_group_id_5: number;
  disp_reward_type_5: number;
  disp_reward_id_5: number;
  reward_lot_count_5: number;
  reward_odds_5: number;
}

export interface EventStoryData {
  story_group_id: number;
  story_type: number;
  value: number;
  title: string;
  thumbnail_id: number;
  disp_order: number;
  start_time: string;
  end_time: string;
}

export interface EventStoryDetail {
  story_id: number;
  story_group_id: number;
  title: string;
  sub_title: string;
  visible_type: number;
  story_end: number;
  pre_story_id: number;
  love_level: number;
  requirement_id: number;
  unlock_quest_id: number;
  story_quest_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_value_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_value_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_value_3: number;
  start_time: string;
  end_time: string;
}

export interface EventTopAdv {
  event_top_adv_id: number;
  event_id: number;
  type: number;
  value_1: number;
  value_2: number;
  value_3: number;
  story_id: number;
  character_id: number;
  condition_type: number;
  condition_story_id: number;
  start_time: string;
  end_time: string;
}

export interface EventWaveGroupData {
  id: number;
  wave_group_id: number;
  difficulty: number;
  wave: number;
  match_lv_min: number;
  match_lv_max: number;
  enemy_id_1: number;
  enemy_id_2: number;
  enemy_id_3: number;
  enemy_id_4: number;
  enemy_id_5: number;
  drop_gold_1: number;
  reward_group_id_1: number;
  disp_reward_type_1: number;
  disp_reward_id_1: number;
  reward_lot_count_1: number;
  reward_odds_1: number;
  drop_gold_2: number;
  reward_group_id_2: number;
  disp_reward_type_2: number;
  disp_reward_id_2: number;
  reward_lot_count_2: number;
  reward_odds_2: number;
  drop_gold_3: number;
  reward_group_id_3: number;
  disp_reward_type_3: number;
  disp_reward_id_3: number;
  reward_lot_count_3: number;
  reward_odds_3: number;
  drop_gold_4: number;
  reward_group_id_4: number;
  disp_reward_type_4: number;
  disp_reward_id_4: number;
  reward_lot_count_4: number;
  reward_odds_4: number;
  drop_gold_5: number;
  reward_group_id_5: number;
  disp_reward_type_5: number;
  disp_reward_id_5: number;
  reward_lot_count_5: number;
  reward_odds_5: number;
}

export interface ExperienceTeam {
  team_level: number;
  total_exp: number;
  max_stamina: number;
  over_limit_stamina: number;
  recover_stamina_count: number;
}

export interface ExperienceUnit {
  unit_level: number;
  total_exp: number;
}

export interface FixLineupGroupSet {
  lineup_group_set_id: number;
  team_level_from: number;
  team_level_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  price_type_1: number;
  currency_id_1: number;
  price_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  price_type_2: number;
  currency_id_2: number;
  price_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  price_type_3: number;
  currency_id_3: number;
  price_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  price_type_4: number;
  currency_id_4: number;
  price_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
  price_type_5: number;
  currency_id_5: number;
  price_5: number;
  reward_type_6: number;
  reward_id_6: number;
  reward_count_6: number;
  price_type_6: number;
  currency_id_6: number;
  price_6: number;
  reward_type_7: number;
  reward_id_7: number;
  reward_count_7: number;
  price_type_7: number;
  currency_id_7: number;
  price_7: number;
  reward_type_8: number;
  reward_id_8: number;
  reward_count_8: number;
  price_type_8: number;
  currency_id_8: number;
  price_8: number;
  reward_type_9: number;
  reward_id_9: number;
  reward_count_9: number;
  price_type_9: number;
  currency_id_9: number;
  price_9: number;
  reward_type_10: number;
  reward_id_10: number;
  reward_count_10: number;
  price_type_10: number;
  currency_id_10: number;
  price_10: number;
  reward_type_11: number;
  reward_id_11: number;
  reward_count_11: number;
  price_type_11: number;
  currency_id_11: number;
  price_11: number;
  reward_type_12: number;
  reward_id_12: number;
  reward_count_12: number;
  price_type_12: number;
  currency_id_12: number;
  price_12: number;
  reward_type_13: number;
  reward_id_13: number;
  reward_count_13: number;
  price_type_13: number;
  currency_id_13: number;
  price_13: number;
  reward_type_14: number;
  reward_id_14: number;
  reward_count_14: number;
  price_type_14: number;
  currency_id_14: number;
  price_14: number;
  reward_type_15: number;
  reward_id_15: number;
  reward_count_15: number;
  price_type_15: number;
  currency_id_15: number;
  price_15: number;
  reward_type_16: number;
  reward_id_16: number;
  reward_count_16: number;
  price_type_16: number;
  currency_id_16: number;
  price_16: number;
  reward_type_17: number;
  reward_id_17: number;
  reward_count_17: number;
  price_type_17: number;
  currency_id_17: number;
  price_17: number;
  reward_type_18: number;
  reward_id_18: number;
  reward_count_18: number;
  price_type_18: number;
  currency_id_18: number;
  price_18: number;
  reward_type_19: number;
  reward_id_19: number;
  reward_count_19: number;
  price_type_19: number;
  currency_id_19: number;
  price_19: number;
  reward_type_20: number;
  reward_id_20: number;
  reward_count_20: number;
  price_type_20: number;
  currency_id_20: number;
  price_20: number;
}

export interface FkeHappeningList {
  happening_id: number;
  happening_name: string;
}

export interface FkeReward {
  id: number;
  fke_point: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface GachaData {
  gacha_id: number;
  gacha_name: string;
  pick_up_chara_text: string;
  description: string;
  description_2: string;
  description_sp: string;
  parallel_id: number;
  pickup_badge: number;
  gacha_detail: number;
  gacha_cost_type: number;
  price: number;
  free_gacha_type: number;
  free_gacha_interval_time: number;
  free_gacha_count: number;
  discount_price: number;
  gacha_odds: number;
  gacha_odds_star2: string;
  gacha_type: number;
  movie_id: number;
  start_time: string;
  end_time: string;
  ticket_id: number;
  special_id: number;
  exchange_id: number;
  ticket_id_10: number;
  rarity_odds: number;
  chara_odds_star1: number;
  chara_odds_star2: number;
  chara_odds_star3: number;
  gacha10_special_odds_star1: number;
  gacha10_special_odds_star2: number;
  gacha10_special_odds_star3: number;
  prizegacha_id: number;
  gacha_bonus_id: number;
  gacha_times_limit10: number;
}

export interface GachaExchangeLineup {
  id: number;
  exchange_id: number;
  unit_id: number;
  rarity: number;
  gacha_bonus_id: number;
  start_time: string;
  end_time: string;
}

export interface GiftMessage {
  id: number;
  discription: string;
  type_1: number;
  type_2: number;
  type_3: number;
  type_4: number;
}

export interface GlossaryDetail {
  glossary_id: number;
  glossary_category_id: number;
  title: string;
  description: string;
  unlock_story_id: number;
  category_type: number;
  disp_order: number;
}

export interface GoldsetData {
  id: number;
  buy_count: number;
  use_jewel_count: number;
  get_gold_count: number;
  goldset_odds_1: number;
  goldset_odds_2: number;
  goldset_odds_3: number;
  additional_gold_min_rate: number;
  additional_gold_max_rate: number;
}

export interface GoldsetData2 {
  id: number;
  buy_count: number;
  use_jewel_count: number;
  get_gold_count: number;
  goldset_odds_1: number;
  goldset_odds_2: number;
  goldset_odds_3: number;
  additional_gold_min_rate: number;
  additional_gold_max_rate: number;
  training_quest_count: number;
}

export interface GoldsetDataTeamlevel {
  id: number;
  team_level: number;
  initial_get_gold_count: number;
}

export interface GrandArenaDailyRankReward {
  id: number;
  rank_from: number;
  rank_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface GrandArenaDefenceReward {
  id: number;
  limit_count: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface GrandArenaMaxRankReward {
  id: number;
  rank_from: number;
  rank_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface GrandArenaMaxSeasonRankReward {
  id: number;
  rank_from: number;
  rank_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface GrowthParameter {
  growth_id: number;
  growth_type: number;
  is_restriction: number;
  unit_rarity: number;
  unit_level: number;
  skill_level: number;
  promotion_level: number;
  equipment_1: number;
  equipment_2: number;
  equipment_3: number;
  equipment_4: number;
  equipment_5: number;
  equipment_6: number;
  love_level: number;
}

export interface GrowthRestrictionUnit {
  id: number;
  growth_id: number;
  unit_id: number;
}

export interface Guild {
  guild_id: number;
  guild_name: string;
  description: string;
  guild_master: number;
  member1: number;
  member2: number;
  member3: number;
  member4: number;
  member5: number;
  member6: number;
  member7: number;
  member8: number;
  member9: number;
  member10: number;
  member11: number;
  member12: number;
  member13: number;
  member14: number;
  member15: number;
  member16: number;
  member17: number;
  member18: number;
  member19: number;
  member20: number;
  member21: number;
  member22: number;
  member23: number;
  member24: number;
  member25: number;
  member26: number;
  member27: number;
  member28: number;
  member29: number;
  member30: number;
}

export interface GuildAdditionalMember {
  guild_id: number;
  unlock_story_id: number;
  thumb_id: number;
  member1: number;
  member2: number;
  member3: number;
  member4: number;
  member5: number;
  member6: number;
  member7: number;
  member8: number;
  member9: number;
  member10: number;
}

export interface HatsuneBattleMissionData {
  mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_value_4: number;
  condition_value_5: number;
  condition_value_6: number;
  condition_value_7: number;
  condition_value_8: number;
  condition_value_9: number;
  condition_value_10: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
}

export interface HatsuneBgChange {
  area_id: number;
  quest_id_1: number;
  quest_id_2: number;
  quest_id_3: number;
  quest_id_4: number;
  quest_id_5: number;
}

export interface HatsuneBgChangeData {
  id: number;
  area_id: number;
  condition_type: number;
  condition_id: number;
  target_type: number;
  bg_after_change_id: number;
}

export interface HatsuneBoss {
  boss_id: number;
  event_id: number;
  area_id: number;
  difficulty: number;
  quest_name: string;
  position_x: number;
  position_y: number;
  boss_position_x: number;
  boss_position_y: number;
  result_boss_position_y: number;
  icon_id: number;
  icon_display_scale: number;
  icon_collider_scale: number;
  use_ticket_num: number;
  team_exp: number;
  unit_exp: number;
  love: number;
  limit_time: number;
  daily_limit: number;
  clear_reward_group: number;
  event_boss_treasure_box_id_1: number;
  background_1: number;
  wave_group_id_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  story_id_wavestart_1: number;
  story_id_waveend_1: number;
  detail_bg_id: number;
  detail_bg_position: number;
  detail_boss_bg_size: number;
  detail_boss_bg_height: number;
  reward_gold_coefficient: string;
  reward_gold_limit: number;
  start_time: string;
  end_time: string;
  map_position_x: number;
  map_position_y: number;
  map_size: number;
  deatail_aura_size: number;
  map_aura_size: number;
  oneblow_count_of_skip_condition: number;
  required_skip_ticket_count: number;
  retire_flag: number;
  disp_on_bg: number;
}

export interface HatsuneBossCondition {
  boss_id: number;
  event_id: number;
  condition_quest_id_1: number;
  condition_quest_id_2: number;
  condition_boss_id_1: number;
  condition_boss_id_2: number;
  condition_gacha_step: number;
  force_unlock_time: string;
  release_quest_id_1: number;
  release_quest_id_2: number;
  release_boss_id_1: number;
  release_boss_id_2: number;
}

export interface HatsuneBossEnemySetting {
  boss_id: number;
  enemy_identity: number;
  event_id: number;
  must_kill_flag: number;
  event_boss_treasure_box_id: number;
  reward_gold_coefficient: number;
  reward_gold_limit: number;
  detail_offset_x: number;
  detail_offset_y: number;
  detail_scale: number;
  map_offset_x: number;
  map_offset_y: number;
  map_scale: number;
  map_depth: number;
}

export interface HatsuneDailyMissionData {
  daily_mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
}

export interface HatsuneDescription {
  id: number;
  event_id: number;
  type: number;
  description: string;
}

export interface HatsuneDiaryData {
  dialy_id: number;
  contents_type: number;
  diary_date: number;
  sub_title: string;
  forced_release_time: string;
  condition_time: string;
  condition_story_id: number;
  condition_boss_count: number;
}

export interface HatsuneDiaryLetterScript {
  id: number;
  diary_id: number;
  seq_num: number;
  type: number;
  line_num: number;
  start_pos: number;
  end_pos: number;
  seek_time: number;
  sheet_name: string;
  cue_name: string;
  command: number;
  command_param: number;
}

export interface HatsuneDiaryScript {
  id: number;
  diary_id: number;
  seq_num: number;
  type: number;
  diary_text: string;
  text_animation_speed: number;
  sheet_name: string;
  cue_name: string;
  command: number;
  command_param: number;
}

export interface HatsuneDiarySetting {
  event_id: number;
  bgm_sheet_name: string;
  bgm_cue_name: string;
}

export interface HatsuneEmblemMission {
  mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  visible_flag: number;
  start_time: string;
  end_time: string;
}

export interface HatsuneEmblemMissionReward {
  id: number;
  mission_reward_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
  icon_type: number;
}

export interface HatsuneItem {
  event_id: number;
  boss_ticket_id: number;
  gacha_ticket_id: number;
  unit_material_id_1: number;
  unit_material_id_2: number;
  unit_material_id_3: number;
  unit_material_id_4: number;
  unit_material_id_5: number;
  unit_material_id_6: number;
  unit_material_id_7: number;
  unit_material_id_8: number;
  unit_material_id_9: number;
  unit_material_id_10: number;
}

export interface HatsuneMap {
  course_id: number;
  event_id: number;
  name: string;
  map_id: number;
  sheet_id: number;
  que_id: number;
  start_area_id: number;
  end_area_id: number;
}

export interface HatsuneMapEvent {
  id: number;
  target_event_id: number;
  event_type: number;
  condition_id: number;
  param1: number;
  param2: number;
}

export interface HatsuneMissionRewardData {
  id: number;
  mission_reward_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
}

export interface HatsuneMultiRouteParameter {
  id: number;
  quest_id: number;
  type: number;
  param_1: number;
  param_2: number;
  param_3: number;
  text_1: string;
}

export interface HatsunePresent {
  id: number;
  event_id: number;
  dialog_title: string;
  dialog_text: string;
  condition_quest_id: number;
  condition_boss_id: number;
  condition_mission_id: number;
  adv_id: number;
  item_type_1: number;
  item_id_1: number;
  item_num_1: number;
  item_type_2: number;
  item_id_2: number;
  item_num_2: number;
  item_type_3: number;
  item_id_3: number;
  item_num_3: number;
  item_type_4: number;
  item_id_4: number;
  item_num_4: number;
  item_type_5: number;
  item_id_5: number;
  item_num_5: number;
}

export interface HatsuneQuest {
  quest_id: number;
  event_id: number;
  area_id: number;
  quest_seq: number;
  quest_name: string;
  position_x: number;
  position_y: number;
  icon_id: number;
  icon_offset_x: number;
  icon_offset_y: number;
  icon_scale: number;
  stamina: number;
  stamina_start: number;
  team_exp: number;
  unit_exp: number;
  love: number;
  limit_time: number;
  daily_limit: number;
  clear_reward_group: number;
  rank_reward_group: number;
  drop_reward_type: number;
  drop_reward_id: number;
  drop_reward_num: number;
  drop_reward_odds: number;
  background_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  story_id_wavestart_1: number;
  story_id_waveend_1: number;
  background_2: number;
  wave_bgm_sheet_id_2: string;
  wave_bgm_que_id_2: string;
  story_id_wavestart_2: number;
  story_id_waveend_2: number;
  background_3: number;
  wave_bgm_sheet_id_3: string;
  wave_bgm_que_id_3: string;
  story_id_wavestart_3: number;
  story_id_waveend_3: number;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
  start_time: string;
  end_time: string;
}

export interface HatsunequestArea {
  area_id: number;
  event_id: number;
  area_name: string;
  map_type: number;
  sheet_id: string;
  que_id: string;
  start_time: string;
  end_time: string;
  area_disp: number;
  map_id: number;
  scroll_width: number;
  scroll_height: number;
  open_tutorial_id: number;
  tutorial_param_1: string;
  tutorial_param_2: string;
  additional_effect: number;
}

export interface HatsuneQuestCondition {
  quest_id: number;
  event_id: number;
  condition_quest_id_1: number;
  condition_quest_id_2: number;
  condition_boss_id_1: number;
  condition_boss_id_2: number;
  release_quest_id_1: number;
  release_quest_id_2: number;
  release_boss_id_1: number;
  release_boss_id_2: number;
  condition_main_quest_id: number;
}

export interface HatsuneQuiz {
  event_id: number;
  quiz_id: number;
  question_title: string;
  question: number;
  choice_1: string;
  choice_2: string;
  choice_3: string;
  choice_4: string;
  choice_5: string;
  choice_6: string;
  answer: number;
  hint: string;
  resource_id: number;
  release_quest_id: number;
  quiz_position_x: number;
  quiz_position_y: number;
  quiz_icon_id: number;
  quiz_point_name: string;
  adv_id_quiz_start: number;
  adv_id_quiz_end: number;
}

export interface HatsuneQuizCondition {
  id: number;
  event_id: number;
  quiz_id: number;
  condition_quest_id: number;
  condition_quiz_id: number;
  condition_unit_id: number;
  condition_mission_id: number;
  condition_time_from: number;
}

export interface HatsuneQuizReward {
  quiz_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface HatsuneRelayData {
  relay_story_id: number;
  is_enable_read: number;
  condition_quest_id: number;
  story_seq: number;
  sub_title: string;
}

export interface HatsuneSchedule {
  event_id: number;
  teaser_time: string;
  start_time: string;
  end_time: string;
  close_time: string;
  background: number;
  sheet_id: string;
  que_id: string;
  banner_unit_id: number;
  count_start_ime: string;
  background_size_x: number;
  background_size_y: number;
  background_pos_x: number;
  background_pos_y: number;
  original_event_id: number;
  series_event_id: number;
  teaser_dialog_type: number;
}

export interface HatsuneSpecialBattle {
  event_id: number;
  mode: number;
  recommended_level: number;
  purpose_type: number;
  purpose_count: number;
  trigger_hp: number;
  story_id_mode_start: number;
  story_id_mode_end: number;
  wave_group_id: number;
  unnecessary_defeat_chara: number;
  story_start_second: number;
  action_start_second: number;
  hp_gauge_color_flag: number;
  start_idle_trigger: number;
  appear_time: number;
  detail_boss_bg_size: number;
  detail_boss_bg_height: number;
  detail_boss_motion: string;
}

export interface HatsuneSpecialBossTicketCount {
  id: number;
  challenge_count_from: number;
  challenge_count_to: number;
  use_ticket_num: number;
}

export interface HatsuneSpecialEnemy {
  enemy_id: number;
  event_id: number;
  mode: number;
  enemy_point: number;
  initial_position: number;
  order: number;
}

export interface HatsuneSpecialMissionData {
  special_mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  purpose_type: number;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
}

export interface HatsuneStationaryMissionData {
  stationary_mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
}

export interface HatsuneUnlockStoryCondition {
  story_id: number;
  event_id: number;
  condition_entry: number;
  condition_quest_id: number;
  condition_boss_id: number;
  condition_mission_id: number;
  condition_time: string;
  condition_story_id: number;
}

export interface HatsuneUnlockUnitCondition {
  id: number;
  unit_id: number;
  event_id: number;
  condition_mission_id: number;
  top_description: string;
  description_1: string;
  description_2: string;
}

export interface ItemData {
  item_id: number;
  item_name: string;
  description: string;
  promotion_level: number;
  item_type: number;
  value: number;
  price: number;
  limit_num: number;
  gojuon_order: number;
  sell_check_disp: number;
  start_time: string;
  end_time: string;
}

export interface ItemETicketData {
  ticket_id: number;
  exchange_number: number;
  unit_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  start_time: string;
  end_time: string;
}

export interface KaiserAddTimesData {
  id: number;
  add_times: number;
  add_times_time: string;
  duration: number;
}

export interface KaiserExterminationReward {
  extermination_reward_group: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface KaiserQuestData {
  kaiser_boss_id: number;
  name: string;
  map_type: number;
  battle_start_story_id: number;
  battle_finish_story_id: number;
  disappearance_story_id: number;
  limit_time: number;
  restriction_group_id: number;
  reward_image_1: number;
  reward_count_1: number;
  reward_image_2: number;
  reward_count_2: number;
  reward_image_3: number;
  reward_count_3: number;
  reward_image_4: number;
  reward_count_4: number;
  reward_image_5: number;
  reward_count_5: number;
  fix_reward_group_id: number;
  odds_group_id: string;
  chest_id: number;
  extermination_reward_group: number;
  background: number;
  bg_position: number;
  wave_group_id: number;
  enemy_position_x: number;
  enemy_local_position_y: number;
  enemy_size_1: number;
  result_boss_position_y: number;
  wave_bgm: string;
  reward_gold_coefficient: number;
  limited_mana: number;
  clear_story_id_1: number;
  clear_story_id_2: number;
}

export interface KaiserRestrictionGroup {
  restriction_group_id: number;
  unit_id: number;
}

export interface KaiserSchedule {
  id: number;
  teaser_time: string;
  start_time: string;
  end_time: string;
  count_start_time: string;
  close_time: string;
  story_id: number;
  close_story_condition_id: number;
  close_story_id: number;
  top_bgm: string;
  top_bg: string;
  after_bgm: string;
  after_bg: string;
}

export interface KaiserSpecialBattle {
  mode: number;
  recommended_level: number;
  purpose_type: number;
  purpose_count: number;
  trigger_hp: number;
  story_id_mode_start: number;
  story_id_mode_end: number;
  wave_group_id: number;
  unnecessary_defeat_chara: number;
  story_start_second: number;
  action_start_second: number;
  hp_gauge_color_flag: number;
  start_idle_trigger: number;
  appear_time: number;
}

export interface KmkNaviComment {
  comment_id: number;
  where_type: number;
  character_id: number;
  face_type: number;
  character_name: string;
  description: string;
  voice_id: number;
  start_time: string;
  end_time: string;
  pos_x: number;
  pos_y: number;
  change_face_time: number;
  change_face_type: number;
  event_id: number;
}

export interface KmkReward {
  id: number;
  kmk_score: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface LoginBonusAdv {
  id: number;
  login_bonus_id: number;
  start_time: string;
  end_time: string;
  count_key: number;
  adv_id: number;
  read_process_flag: number;
}

export interface LoginBonusData {
  login_bonus_id: number;
  name: string;
  login_bonus_type: number;
  count_num: number;
  start_time: string;
  end_time: string;
  bg_id: number;
  stamp_id: number;
  odds_group_id: number;
  adv_play_type: number;
  count_Type: number;
}

export interface LoginBonusDetail {
  id: number;
  login_bonus_id: number;
  count: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
  character_id: number;
  character_name: string;
  description: string;
  voice_id: number;
  bg_id: number;
}

export interface LoginBonusMessageData {
  id: number;
  login_bonus_id: number;
  type: number;
  day_count: number;
  luck_pattern: number;
  rate: number;
  character_id: number;
  character_name: string;
  message: string;
  voice_id: number;
  additional_type: number;
  additional_pattern: string;
}

export interface LoveChara {
  love_level: number;
  total_love: number;
  unlocked_class: number;
  rarity: number;
}

export interface LtoLetterScript {
  id: number;
  letter_id: number;
  seq_num: number;
  type: number;
  line_num: number;
  start_pos: number;
  end_pos: number;
  seek_time: number;
  sheet_name: string;
  cue_name: string;
  command: number;
  command_param: number;
}

export interface LtoStoryData {
  sub_story_id: number;
  event_id: number;
  title: string;
  condition_story_id: number;
  reward_type: number;
  reward_id: number;
  reward_count: number;
}

export interface Minigame {
  id: number;
  minigame_scheme_id: number;
  event_id: number;
  release_conditions_1: number;
  conditions_id_1: number;
  first_time_story_id: number;
  display_condition_type: number;
  display_condition_id: number;
  result_chat_condition_id: number;
  score_unit: string;
  is_enabled_zero_score: number;
}

export interface MissionRewardData {
  id: number;
  mission_reward_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
  lv_from: number;
  lv_to: number;
  start_time: string;
  end_time: string;
}

export interface Movie {
  movie_id: number;
  story_group_id: number;
  story_id: number;
  bgm_id: string;
  se_id: string;
  my_page_flag: number;
  fade_loop_flag: number;
  bgm_volume_rate: number;
}

export interface MusicContent {
  music_id: number;
  name: string;
  total_playing_time: string;
  listen_start_time: string;
  detail: string;
  sheet_id: string;
  cue_id: string;
}

export interface MusicList {
  music_id: number;
  list_name: string;
  font_size: number;
  pre_shop_start: string;
  shop_start: string;
  shop_end: string;
  story_id: number;
  cost_item_num: number;
  sort: number;
  kana: string;
  ios_url: string;
  android_url: string;
  dmm_url: string;
}

export interface MyprofileContent {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
  disp_order: number;
}

export interface NaviComment {
  comment_id: number;
  where_type: number;
  character_id: number;
  face_type: number;
  character_name: string;
  description: string;
  voice_id: number;
  start_time: string;
  end_time: string;
  pos_x: number;
  pos_y: number;
  change_face_time: number;
  change_face_type: number;
  event_id: number;
}

export interface NotifData {
  unit_id: number;
  notif_type: number;
  comment: string;
}

export interface NyxDramaData {
  drama_id: number;
  story_phase: number;
  title: string;
  sub_title: string;
  condition_unlocked_story_id: number;
  condition_locked_story_id: number;
}

export interface NyxDramaScript {
  command_id: number;
  drama_id: number;
  command_type: number;
  param_01: string;
  param_02: string;
  param_03: string;
  param_04: string;
  param_05: string;
  param_06: string;
  param_07: string;
  param_08: string;
}

export interface NyxPhaseData {
  story_phase: number;
  phase_title: string;
  condition_quest_id: number;
  condition_quest_boss: number;
}

export interface NyxStoryData {
  story_id: number;
  story_seq: number;
  story_phase: number;
  title: string;
  sub_title: string;
  read_condition_time: string;
  condition_quest_id: number;
  condition_boss_count: number;
  adv_flg: number;
  adv_id: number;
}

export interface NyxStoryScript {
  id: number;
  story_id: number;
  seq_num: number;
  type: number;
  line_num: number;
  start_pos: number;
  end_pos: number;
  seek_time: number;
  sheet_name: string;
  cue_name: string;
  command: number;
  command_param: number;
}

export interface OddsNameData {
  id: number;
  odds_file: string;
  name: string;
  icon_type: number;
  description: string;
}

export interface OmpDrama {
  command_id: number;
  drama_id: number;
  command_type: number;
  param_01: string;
  param_02: string;
  param_03: string;
  param_04: string;
  param_05: string;
  param_06: string;
  param_07: string;
  param_08: string;
}

export interface OmpStoryData {
  omp_story_id: number;
  event_id: number;
  condition_quest_id: number;
  condition_boss_id: number;
  story_seq: number;
  is_readable_on_result: number;
  reward_type: number;
  reward_id: number;
  reward_count: number;
  sub_title: string;
}

export interface PctComboCoefficient {
  id: number;
  combo_min: number;
  combo_max: number;
  combo_coefficient: number;
}

export interface PctEvaluation {
  evaluation_id: number;
  evaluation_point: number;
  fever_point: number;
  meet_width: number;
}

export interface PctGamingMotion {
  motion_id: number;
  perfect_count: number;
  good_count: number;
  nice_count: number;
  point: number;
}

export interface PctItempoint {
  id: number;
  item_id: number;
  pct_point_coefficient: number;
}

export interface PctResult {
  id: number;
  character_id: number;
  score_from: number;
  score_to: number;
  comment_id_1: number;
  comment_id_2: number;
  comment_id_3: number;
  comment_id_4: number;
  comment_id_5: number;
}

export interface PctReward {
  id: number;
  pct_point_type: number;
  pct_point: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface PctSystem {
  id: number;
  pct_base_speed: number;
  fever_point_max: number;
  fever_time: number;
  fever_revention_time: number;
  pct_time: number;
  chara1: number;
  chara2: number;
  chara1_gauge_choice: number;
  chara2_gauge_choice: number;
}

export interface PctSystemFruits {
  id: number;
  last_time: number;
  appearance: number;
  bar_split: number;
  appearance_chara_odds: number;
  appearance_pattern: string;
  wait_time: number;
}

export interface PctTapSpeed {
  id: number;
  combo_count: number;
  speed_magnification: number;
}

export interface PkbBatterCondition {
  batter_id: number;
  pkb_score: number;
  name: string;
  detail: string;
  meet: number;
  critical: number;
  power: number;
  ability_name: string;
  ability_detail: string;
  is_playable: number;
}

export interface PkbDrama {
  command_id: number;
  drama_id: number;
  command_type: number;
  param_01: string;
  param_02: string;
  param_03: string;
  param_04: string;
  param_05: string;
  param_06: string;
  param_07: string;
  param_08: string;
}

export interface PkbDramaData {
  drama_id: number;
  condition_pitcher_id_1: number;
  condition_pitcher_id_2: number;
  condition_batter_id_1: number;
  condition_batter_id_2: number;
}

export interface PkbNaviComment {
  comment_id: number;
  where_type: number;
  character_id: number;
  face_type: number;
  character_name: string;
  description: string;
  voice_id: number;
  start_time: string;
  end_time: string;
  pos_x: number;
  pos_y: number;
  change_face_time: number;
  change_face_type: number;
  event_id: number;
}

export interface PkbPitcherBallType {
  pitcher_id: number;
  ball_type: number;
  ball_type_name: string;
}

export interface PkbReward {
  id: number;
  pkb_score: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface PositionSetting {
  position_setting_id: number;
  from: number;
  middle: number;
}

export interface PrizegachaData {
  prizegacha_id: number;
  prize_memory_id_1: number;
  prize_memory_id_2: number;
  prize_memory_id_3: number;
  prize_memory_id_4: number;
  prize_memory_id_5: number;
  prize_memory_id_6: number;
  prize_memory_id_7: number;
  prize_memory_id_8: number;
  prize_memory_id_9: number;
  prize_memory_id_10: number;
  prize_memory_id_11: number;
  prize_memory_id_12: number;
  prize_memory_id_13: number;
  prize_memory_id_14: number;
  prize_memory_id_15: number;
  prize_memory_id_16: number;
  prize_memory_id_17: number;
  prize_memory_id_18: number;
  prize_memory_id_19: number;
  prize_memory_id_20: number;
  gacha_prize1: number;
  gacha_prize10: number;
  prize_fixed_compensation: number;
  prize_fixed_compensation_quantity: number;
  rarity_odds: number;
}

export interface ProfileFrame {
  id: number;
  name: string;
  type: number;
  start_time: string;
  end_time: string;
  disp_order: number;
}

export interface QuestAnnihilation {
  system_id: number;
  quest_id: number;
  effect_type: number;
  quest_effect_position: number;
}

export interface QuestAreaData {
  area_id: number;
  area_name: string;
  area_display_name: string;
  map_type: number;
  sheet_id: string;
  que_id: string;
  start_time: string;
  end_time: string;
}

export interface QuestConditionData {
  quest_id: number;
  condition_quest_id_1: number;
  condition_quest_id_2: number;
  condition_quest_id_3: number;
  condition_quest_id_4: number;
  condition_quest_id_5: number;
  release_quest_id_1: number;
  release_quest_id_2: number;
  release_quest_id_3: number;
  release_quest_id_4: number;
  release_quest_id_5: number;
}

export interface QuestData {
  quest_id: number;
  area_id: number;
  quest_name: string;
  limit_team_level: number;
  position_x: number;
  position_y: number;
  icon_id: number;
  stamina: number;
  stamina_start: number;
  team_exp: number;
  unit_exp: number;
  love: number;
  limit_time: number;
  daily_limit: number;
  clear_reward_group: number;
  rank_reward_group: number;
  background_1: number;
  wave_group_id_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  story_id_wavestart_1: number;
  story_id_waveend_1: number;
  background_2: number;
  wave_group_id_2: number;
  wave_bgm_sheet_id_2: string;
  wave_bgm_que_id_2: string;
  story_id_wavestart_2: number;
  story_id_waveend_2: number;
  background_3: number;
  wave_group_id_3: number;
  wave_bgm_sheet_id_3: string;
  wave_bgm_que_id_3: string;
  story_id_wavestart_3: number;
  story_id_waveend_3: number;
  enemy_image_1: number;
  enemy_image_2: number;
  enemy_image_3: number;
  enemy_image_4: number;
  enemy_image_5: number;
  reward_image_1: number;
  reward_image_2: number;
  reward_image_3: number;
  reward_image_4: number;
  reward_image_5: number;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
  start_time: string;
  end_time: string;
  lv_reward_flag: number;
  add_treasure_num: number;
}

export interface QuestDefeatNotice {
  id: number;
  image_id: number;
  required_team_level: number;
  required_quest_id: number;
}

export interface QuestRewardData {
  reward_group_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface Rarity6QuestData {
  rarity_6_quest_id: number;
  unit_id: number;
  quest_name: string;
  limit_time: number;
  recommended_level: number;
  reward_group_id: number;
  treasure_type: number;
  reward_image_1: number;
  reward_count_1: number;
  reward_image_2: number;
  reward_count_2: number;
  reward_image_3: number;
  reward_count_3: number;
  reward_image_4: number;
  reward_count_4: number;
  reward_image_5: number;
  reward_count_5: number;
  background: number;
  bg_position: number;
  wave_group_id: number;
  enemy_position_x_1: number;
  enemy_local_position_y_1: number;
  enemy_size_1: number;
  enemy_position_x_2: number;
  enemy_local_position_y_2: number;
  enemy_size_2: number;
  enemy_position_x_3: number;
  enemy_local_position_y_3: number;
  enemy_size_3: number;
  enemy_position_x_4: number;
  enemy_local_position_y_4: number;
  enemy_size_4: number;
  enemy_position_x_5: number;
  enemy_local_position_y_5: number;
  enemy_size_5: number;
  wave_bgm: string;
}

export interface ResistData {
  resist_status_id: number;
  ailment_1: number;
  ailment_2: number;
  ailment_3: number;
  ailment_4: number;
  ailment_5: number;
  ailment_6: number;
  ailment_7: number;
  ailment_8: number;
  ailment_9: number;
  ailment_10: number;
  ailment_11: number;
  ailment_12: number;
  ailment_13: number;
  ailment_14: number;
  ailment_15: number;
  ailment_16: number;
  ailment_17: number;
  ailment_18: number;
  ailment_19: number;
  ailment_20: number;
  ailment_21: number;
  ailment_22: number;
  ailment_23: number;
  ailment_24: number;
  ailment_25: number;
  ailment_26: number;
  ailment_27: number;
  ailment_28: number;
  ailment_29: number;
  ailment_30: number;
  ailment_31: number;
  ailment_32: number;
  ailment_33: number;
  ailment_34: number;
  ailment_35: number;
  ailment_36: number;
  ailment_37: number;
  ailment_38: number;
  ailment_39: number;
  ailment_40: number;
  ailment_41: number;
  ailment_42: number;
  ailment_43: number;
  ailment_44: number;
  ailment_45: number;
  ailment_46: number;
  ailment_47: number;
  ailment_48: number;
  ailment_49: number;
  ailment_50: number;
}

export interface ReturnSpecialfesBanner {
  gacha_id: number;
  banner_id_1: number;
  banner_id_2: number;
  banner_id_3: number;
  banner_id_4: number;
  banner_id_5: number;
  banner_id_6: number;
  banner_id_7: number;
  banner_id_8: number;
  banner_id_9: number;
  banner_id_10: number;
}

export interface RewardCollectGuide {
  object_id: number;
  quest_id_1: number;
  quest_id_2: number;
  quest_id_3: number;
  quest_id_4: number;
  quest_id_5: number;
  quest_id_6: number;
  quest_id_7: number;
  quest_id_8: number;
  quest_id_9: number;
  quest_id_10: number;
  system_id_1: number;
  system_id_2: number;
  system_id_3: number;
  system_id_4: number;
  system_id_5: number;
}

export interface RoomChange {
  room_item_id: number;
  change_id: number;
  change_start: string;
  change_end: string;
}

export interface RoomCharacterPersonality {
  character_id: number;
  personality_id: number;
}

export interface RoomCharacterSkinColor {
  character_id: number;
  skin_color_id: number;
}

export interface RoomChatFormation {
  id: number;
  unit_1_x: number;
  unit_1_y: number;
  unit_1_dir: number;
  unit_2_x: number;
  unit_2_y: number;
  unit_2_dir: number;
  unit_3_x: number;
  unit_3_y: number;
  unit_3_dir: number;
  unit_4_x: number;
  unit_4_y: number;
  unit_4_dir: number;
  unit_5_x: number;
  unit_5_y: number;
  unit_5_dir: number;
  unit_num: number;
  unit_id1: number;
  unit_id2: number;
  unit_id3: number;
  unit_id4: number;
  unit_id5: number;
  ignore_unit_id1: number;
  ignore_unit_id2: number;
  ignore_unit_id3: number;
  ignore_unit_id4: number;
  ignore_unit_id5: number;
}

export interface RoomChatInfo {
  id: number;
  formation_id: number;
  scenario_id: number;
}

export interface RoomChatScenario {
  id: number;
  scenario_idx: number;
  unit_pos_no: number;
  delay: number;
  affect_type: number;
  anime_id: number;
  icon_id: number;
}

export interface RoomEffect {
  id: number;
  reward_get: number;
  jukebox: number;
  nebbia: number;
  arcade: number;
  vegetable: number;
  poster: number;
}

export interface RoomEffectRewardGet {
  id: number;
  level: number;
  reward_type: number;
  reward_id: number;
  max_count: number;
  inc_step: number;
  interval_second: number;
}

export interface RoomEmotionIcon {
  id: number;
  enable_auto: number;
  enable_tap: number;
}

export interface RoomItem {
  id: number;
  item_type: number;
  category: number;
  name: string;
  max_level: number;
  enable_remove: number;
  max_possession_num: number;
  effect_id_1: number;
  shop_start: string;
  shop_end: string;
  shop_new_disp_end: string;
  cost_item_num: number;
  shop_open_type: number;
  shop_open_id: number;
  shop_open_value: number;
  sold_price: number;
  sort: number;
  condition_quest_id: number;
}

export interface RoomItemAnnouncement {
  id: number;
  announcement_start: string;
  announcement_end: string;
  announcement_text: string;
}

export interface RoomItemDetail {
  room_item_id: number;
  level: number;
  item_detail: string;
  lvup_tigger_type: number;
  lvup_trigger_id: number;
  lvup_trigger_value: number;
  lvup_tigger_type_2: number;
  lvup_trigger_id_2: number;
  lvup_trigger_value_2: number;
  lvup_item1_type: number;
  lvup_item1_id: number;
  lvup_item1_num: number;
  lvup_time: number;
}

export interface RoomItemGetAnnouncement {
  id: number;
  room_item_id: number;
  start_date: string;
  end_date: string;
  get_date: string;
}

export interface RoomReleaseData {
  system_id: number;
  story_id: number;
  pre_story_id: number;
}

export interface RoomSetup {
  room_item_id: number;
  grid_height: number;
  grid_width: number;
  unit_id: number;
}

export interface RoomSkinColor {
  skin_color_id: number;
  color_red: number;
  color_green: number;
  color_blue: number;
}

export interface RoomUnitComments {
  id: number;
  unit_id: number;
  trigger: number;
  voice_id: number;
  beloved_step: number;
  time: number;
  face_id: number;
  description: string;
  insert_word_type: number;
}

export interface SdNaviComment {
  comment_id: number;
  where_type: number;
  character_id: number;
  motion_type: number;
  description: string;
  voice_id: number;
  start_time: string;
  end_time: string;
}

export interface SeasonPack {
  id: number;
  mission_id: number;
  disp_order: number;
  category_icon: number;
  receive_text: string;
  after_text: string;
  gift_message_id: number;
  term: number;
  repurchase_day: number;
  group_id: number;
  system_id_1: number;
  add_num_1: number;
  item_record_id: number;
  condition_flg: number;
  reward_rate_1: number;
}

export interface SekaiAddTimesData {
  id: number;
  sekai_id: number;
  add_times: number;
  add_times_limit: number;
  add_times_time: string;
  duration: number;
}

export interface SekaiBossDamageRankReward {
  id: number;
  damage_rank_id: number;
  ranking_from: number;
  ranking_to: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
}

export interface SekaiBossFixReward {
  sekai_id: number;
  fix_reward_group_id: number;
  fix_reward_id: number;
  boss_total_damage: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
  reward_type_6: number;
  reward_id_6: number;
  reward_num_6: number;
  reward_type_7: number;
  reward_id_7: number;
  reward_num_7: number;
  reward_type_8: number;
  reward_id_8: number;
  reward_num_8: number;
  reward_type_9: number;
  reward_id_9: number;
  reward_num_9: number;
  reward_type_10: number;
  reward_id_10: number;
  reward_num_10: number;
}

export interface SekaiBossMode {
  sekai_boss_mode_id: number;
  sekai_enemy_id: number;
  sekai_enemy_level: string;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
  quest_detail_monster_size: number;
  quest_detail_monster_height: number;
  limit_time: number;
  background: number;
  sheet_id: string;
  que_id: string;
  result_boss_position_y: number;
  reward_gold_coefficient: number;
  limited_mana: number;
  score_coefficient: number;
}

export interface SekaiEnemyParameter {
  sekai_enemy_id: number;
  unit_id: number;
  name: string;
  level: number;
  rarity: number;
  promotion_level: number;
  hp: string;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  ex_skill_lv_1: number;
  ex_skill_lv_2: number;
  ex_skill_lv_3: number;
  ex_skill_lv_4: number;
  ex_skill_lv_5: number;
  resist_status_id: number;
  accuracy: number;
}

export interface SekaiSchedule {
  sekai_id: number;
  last_sekai_id: number;
  fix_reward_group_id: number;
  damage_rank_id: number;
  teaser_time: string;
  start_time: string;
  count_start_time: string;
  end_time: string;
  end_losstime: string;
  result_end: string;
}

export interface SekaiTopData {
  id: number;
  sekai_id: number;
  name: string;
  description: string;
  top_bg: number;
  position_x: number;
  position_y: number;
  scale_ratio: number;
  sheet_id: string;
  que_id: string;
  boss_mode: number;
  sekai_boss_mode_id: number;
  boss_hp_from: string;
  boss_hp_to: string;
  boss_time_from: string;
  boss_time_to: string;
  duration: number;
  story_id: number;
}

export interface SekaiTopStoryData {
  sekai_id: number;
  story_id: number;
  boss_time_from: string;
  boss_time_to: string;
}

export interface SekaiUnlockStoryCondition {
  story_id: number;
  sekai_id: number;
  condition_entry: number;
  condition_fix_reward_id: number;
  condition_time: string;
}

export interface SerialCodeData {
  serial_code_data: number;
  serial_group_id: number;
  campaign_name: string;
  start_time: string;
  end_time: string;
  limit_num: number;
}

export interface SerialGroupData {
  serial_group_id: number;
  campaign_name: string;
  serial_campaign_id_1: number;
  serial_campaign_id_2: number;
  serial_campaign_id_3: number;
  serial_campaign_id_4: number;
  serial_campaign_id_5: number;
  serial_campaign_id_6: number;
  start_time: string;
  end_time: string;
}

export interface ShioriBattleMissionData {
  mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_value_4: number;
  condition_value_5: number;
  condition_value_6: number;
  condition_value_7: number;
  condition_value_8: number;
  condition_value_9: number;
  condition_value_10: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
}

export interface ShioriBoss {
  boss_id: number;
  event_id: number;
  area_id: number;
  difficulty: number;
  quest_name: string;
  position_x: number;
  position_y: number;
  boss_position_x: number;
  boss_position_y: number;
  result_boss_position_y: number;
  icon_id: number;
  icon_display_scale: number;
  icon_collider_scale: number;
  limit_time: number;
  clear_reward_group: number;
  background_1: number;
  wave_group_id_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  story_id_wavestart_1: number;
  story_id_waveend_1: number;
  detail_bg_id: number;
  detail_bg_position: number;
  detail_boss_bg_size: number;
  detail_boss_bg_height: number;
  map_position_x: number;
  map_position_y: number;
  map_size: number;
  deatail_aura_size: number;
  map_aura_size: number;
  disp_on_bg: number;
}

export interface ShioriBossCondition {
  boss_id: number;
  event_id: number;
  condition_quest_id: number;
  condition_boss_id: number;
  release_quest_id: number;
  release_boss_id: number;
}

export interface ShioriDescription {
  id: number;
  type: number;
  description: number;
}

export interface ShioriEnemyParameter {
  enemy_id: number;
  unit_id: number;
  level: number;
  rarity: number;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  ex_skill_lv_1: number;
  ex_skill_lv_2: number;
  ex_skill_lv_3: number;
  ex_skill_lv_4: number;
  ex_skill_lv_5: number;
  resist_status_id: number;
  accuracy: number;
}

export interface ShioriEventList {
  event_id: number;
  start_time: string;
  end_time: string;
  condition_story_id: number;
  condition_chara_id: number;
  condition_main_quest_id: number;
  conditon_shiori_quest_id: number;
  original_event_id: number;
  original_start_time: string;
  gojuon_order: number;
  help_index: string;
}

export interface ShioriItem {
  event_id: number;
  unit_material_id_1: number;
  unit_material_id_2: number;
}

export interface ShioriMissionRewardData {
  id: number;
  mission_reward_id: number;
  reward_type: number;
  reward_id: number;
  reward_num: number;
}

export interface ShioriQuest {
  quest_id: number;
  event_id: number;
  area_id: number;
  quest_seq: number;
  quest_name: string;
  position_x: number;
  position_y: number;
  icon_id: number;
  icon_offset_x: number;
  icon_offset_y: number;
  icon_scale: number;
  stamina: number;
  stamina_start: number;
  team_exp: number;
  unit_exp: number;
  love: number;
  limit_time: number;
  daily_limit: number;
  clear_reward_group: number;
  rank_reward_group: number;
  drop_reward_type: number;
  drop_reward_id: number;
  drop_reward_num: number;
  drop_reward_odds: number;
  wave_group_id_1: number;
  background_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  story_id_wavestart_1: number;
  story_id_waveend_1: number;
  wave_group_id_2: number;
  background_2: number;
  wave_bgm_sheet_id_2: string;
  wave_bgm_que_id_2: string;
  story_id_wavestart_2: number;
  story_id_waveend_2: number;
  wave_group_id_3: number;
  background_3: number;
  wave_bgm_sheet_id_3: string;
  wave_bgm_que_id_3: string;
  story_id_wavestart_3: number;
  story_id_waveend_3: number;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
}

export interface ShioriQuestData {
  area_id: number;
  event_id: number;
  area_name: string;
  map_type: number;
  sheet_id: string;
  que_id: string;
  area_disp: number;
  map_id: number;
  scroll_width: number;
  scroll_height: number;
  open_tutorial_id: number;
  tutorial_param_1: string;
  tutorial_param_2: string;
  additional_effect: number;
}

export interface ShioriQuestCondition {
  quest_id: number;
  event_id: number;
  condition_quest_id: number;
  condition_boss_id: number;
  release_quest_id: number;
  release_boss_id: number;
  condition_main_quest_id: number;
}
export interface ShioriStationaryMissionData {
  stationary_mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  event_id: number;
  start_time: string;
  end_time: string;
}

export interface ShioriUnlockUnitCondition {
  id: number;
  unit_id: number;
  event_id: number;
  condition_mission_id: number;
  top_description: string;
  description_1: string;
  description_2: string;
}

export interface ShioriWaveGroupData {
  wave_group_id: number;
  difficulty: number;
  wave: number;
  enemy_id_1: number;
  enemy_id_2: number;
  enemy_id_3: number;
  enemy_id_4: number;
  enemy_id_5: number;
  drop_gold_1: number;
  reward_group_id_1: number;
  disp_reward_type_1: number;
  disp_reward_id_1: number;
  reward_lot_count_1: number;
  reward_odds_1: number;
  reward_group_id_2: number;
  disp_reward_type_2: number;
  disp_reward_id_2: number;
  reward_lot_count_2: number;
  reward_odds_2: number;
  reward_group_id_3: number;
  disp_reward_type_3: number;
  disp_reward_id_3: number;
  reward_lot_count_3: number;
  reward_odds_3: number;
  reward_group_id_4: number;
  disp_reward_type_4: number;
  disp_reward_id_4: number;
  reward_lot_count_4: number;
  reward_odds_4: number;
  reward_group_id_5: number;
  disp_reward_type_5: number;
  disp_reward_id_5: number;
  reward_lot_count_5: number;
  reward_odds_5: number;
}

export interface ShopStaticPriceGroup {
  id: number;
  price_group_id: number;
  buy_count_from: number;
  buy_count_to: number;
  count: number;
}

export interface SkeStoryData {
  sub_story_id: number;
  original_event_id: number;
  title: string;
  unlock_condition_quest_id: number;
  unlock_condition_boss_id: number;
  read_condition_event_story_id: number;
}

export interface SkeStoryScript {
  id: number;
  story_id: number;
  seq_num: number;
  type: number;
  line_num: number;
  start_pos: number;
  end_pos: number;
  seek_time: number;
  sheet_name: string;
  cue_name: string;
  command: number;
  command_param: number;
}

export interface SkillAction {
  action_id: number;
  class_id: number;
  action_type: number;
  action_detail_1: number;
  action_detail_2: number;
  action_detail_3: number;
  action_value_1: number;
  action_value_2: number;
  action_value_3: number;
  action_value_4: number;
  action_value_5: number;
  action_value_6: number;
  action_value_7: number;
  target_assignment: number;
  target_area: number;
  target_range: number;
  target_type: number;
  target_number: number;
  target_count: number;
  description: string;
  level_up_disp: string;
}

export interface SkillCost {
  target_level: number;
  cost: number;
}

export interface SkillData {
  skill_id: number;
  name: string;
  skill_type: number;
  skill_area_width: number;
  skill_cast_time: number;
  action_1: number;
  action_2: number;
  action_3: number;
  action_4: number;
  action_5: number;
  action_6: number;
  action_7: number;
  depend_action_1: number;
  depend_action_2: number;
  depend_action_3: number;
  depend_action_4: number;
  depend_action_5: number;
  depend_action_6: number;
  depend_action_7: number;
  description: string;
  icon_type: number;
}

export interface SkipBossData {
  boss_id: number;
  skip_motion_id: number;
  skip_bg_id: number;
  skip_position_x: number;
  skip_position_y: number;
  skip_scale_x: number;
  skip_scale_y: number;
}

export interface SkipMonsterData {
  quest_id: number;
  area_id: number;
  quest_name: string;
  wave_group_id_1: number;
  bg_skip_id: number;
}

export interface SpaceBattleData {
  space_battle_id: number;
  space_enemy_id: number;
  limit_time: number;
  clear_reward_group: number;
  background: number;
  sheet_id: string;
  que_id: string;
  result_boss_position_y: number;
  quest_detail_bg_id: number;
  quest_detail_bg_position: number;
  quest_name: string;
}

export interface SpaceSchedule {
  space_id: number;
  teaser_time: string;
  start_time: string;
  count_start_time: string;
  count_end_time: string;
  end_time: string;
  sid: number;
  pre_story_id: number;
}

export interface SpaceTopData {
  id: number;
  space_id: number;
  space_battle_id: number;
  part_flag: number;
  story_id: number;
  time_from: string;
  time_to: string;
  skip_battle_time: string;
  name: string;
}

export interface SpecialStill {
  still_id: number;
  type: number;
  back_momory_type: number;
  value: number;
}

export interface SpecialStoryBanner {
  id: number;
  story_group_id: number;
  start_time: string;
  end_time: string;
}

export interface SpecialfesBanner {
  gacha_id: number;
  banner_id_1: number;
  banner_id_2: number;
  banner_id_3: number;
  banner_id_4: number;
  banner_id_5: number;
  banner_id_6: number;
  banner_id_7: number;
  banner_id_8: number;
  banner_id_9: number;
  banner_id_10: number;
}

export interface SpskillLabelData {
  unit_id: number;
  normal_label_text: string;
  sp_label_text: string;
}

export interface SpskillLvInitializeData {
  initialize_skill_id: number;
  base_skill_id: number;
}

export interface SqliteStat1 {
  tbl: "tbl";
  idx: "idx";
  stat: "stat";
}

export interface SrtAction {
  action_name: string;
  inori_action: string;
  dragon_action: string;
  kaya_action: string;
  homare_action: string;
  talk_text_type: number;
  talk_text: string;
  voice_list: string;
}

export interface SrtPanel {
  reading_id: number;
  reading: string;
  read_type: number;
  panel_id: number;
  detail_text: string;
}

export interface SrtReward {
  id: number;
  srt_score: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface SrtScore {
  difficulty_level: number;
  coefficient_read_type_1: number;
  coefficient_read_type_2: number;
  coefficient_read_type_3: number;
  coefficient_count_priconne_panel: number;
  coefficient_fever: number;
  constant_turn_bonus: number;
  coefficient_turn_bonus: number;
  coefficient_avg_answer_time: number;
  constant_wrong_num: number;
  coefficient_wrong_num: number;
}

export interface SrtTopTalk {
  id: number;
  talk_id: number;
  chara_index: number;
  talk_text: string;
  sheet_name: string;
  cue_name: string;
  direction: number;
}

export interface Stamp {
  stamp_id: number;
  disp_order: number;
  description: string;
  start_date: string;
  end_date: string;
}

export interface StationaryMissionData {
  stationary_mission_id: number;
  disp_group: number;
  category_icon: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_value_4: number;
  condition_value_5: number;
  condition_value_6: number;
  condition_value_7: number;
  condition_value_8: number;
  condition_value_9: number;
  condition_value_10: number;
  condition_num: number;
  mission_reward_id: number;
  system_id: number;
  start_time: string;
  end_time: string;
  min_level: number;
  max_level: number;
  title_color_id: number;
  visible_flag: number;
}

export interface Still {
  still_id: number;
  story_group_id: number;
  story_id: number;
  still_group_id: number;
  vertical_still_flg: number;
  position_y: number;
  unit_id_1: number;
  unit_id_2: number;
  unit_id_3: number;
  unit_id_4: number;
  unit_id_5: number;
  unit_id_6: number;
  unit_id_7: number;
  unit_id_8: number;
  unit_id_9: number;
  unit_id_10: number;
  facial_id: number;
  album_ignore: number;
  my_page_flag: number;
  scroll_direction: number;
}

export interface StoryCharacterMask {
  chara_id: number;
  offset: number;
  size: number;
  softness: number;
}

export interface StoryData {
  story_group_id: number;
  story_type: number;
  value: number;
  title: string;
  thumbnail_id: number;
  disp_order: number;
  start_time: string;
  end_time: string;
  order: number;
  condition_free_flag: number;
  gojuon_order: number;
}

export interface StoryDetail {
  story_id: number;
  story_group_id: number;
  title: string;
  sub_title: string;
  visible_type: number;
  story_end: number;
  pre_story_id: number;
  force_unlock_time: string;
  pre_story_id_2: number;
  force_unlock_time_2: string;
  love_level: number;
  requirement_id: number;
  unlock_quest_id: number;
  story_quest_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_value_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_value_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_value_3: number;
  start_time: string;
  end_time: string;
}

export interface StoryQuestData {
  story_quest_id: number;
  story_id: number;
  quest_name: string;
  limit_time: number;
  background_1: number;
  wave_group_id_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  background_2: number;
  wave_group_id_2: number;
  wave_bgm_sheet_id_2: string;
  wave_bgm_que_id_2: string;
  background_3: number;
  wave_group_id_3: number;
  wave_bgm_sheet_id_3: string;
  wave_bgm_que_id_3: string;
  guest_unit_1: number;
  guest_unit_2: number;
  guest_unit_3: number;
  guest_unit_4: number;
  guest_unit_5: number;
}

export interface TicketGachaData {
  gacha_id: number;
  gacha_name: string;
  gacha_type: number;
  ticket_id: number;
  gacha_times: number;
  gacha_detail: number;
  guarantee_rarity: string;
  rarity_odds: string;
  chara_odds_star1: string;
  chara_odds_star2: string;
  chara_odds_star3: string;
  staging_type: number;
}

export interface Tips {
  id: number;
  value: number;
  tips_index: number;
  title: string;
}

export interface TmeMapdata {
  tme_object_id: number;
  event_id: number;
  condition_story_id: number;
  area_difficulty_type: number;
  release_effect: number;
  tap_effect: number;
}

export interface TowerAreaData {
  tower_area_id: number;
  max_floor_num: number;
  area_bg: number;
  tower_bgm: string;
  cloister_quest_id: number;
}

export interface TowerCloisterQuestData {
  tower_cloister_quest_id: number;
  daily_limit: number;
  limit_time: number;
  recovery_hp_rate: number;
  recovery_tp_rate: number;
  start_tp_rate: number;
  fix_reward_group_id: number;
  drop_reward_group_id: number;
  background_1: number;
  wave_group_id_1: number;
  background_2: number;
  wave_group_id_2: number;
  background_3: number;
  wave_group_id_3: number;
  wave_bgm: string;
  reward_image_1: number;
  reward_image_2: number;
  reward_image_3: number;
  reward_image_4: number;
  reward_image_5: number;
  w1_enemy_position_x_1: number;
  w1_enemy_local_position_y_1: number;
  w1_enemy_size_1: number;
  w1_enemy_position_x_2: number;
  w1_enemy_local_position_y_2: number;
  w1_enemy_size_2: number;
  w1_enemy_position_x_3: number;
  w1_enemy_local_position_y_3: number;
  w1_enemy_size_3: number;
  w1_enemy_position_x_4: number;
  w1_enemy_local_position_y_4: number;
  w1_enemy_size_4: number;
  w1_enemy_position_x_5: number;
  w1_enemy_local_position_y_5: number;
  w1_enemy_size_5: number;
  w2_enemy_position_x_1: number;
  w2_enemy_local_position_y_1: number;
  w2_enemy_size_1: number;
  w2_enemy_position_x_2: number;
  w2_enemy_local_position_y_2: number;
  w2_enemy_size_2: number;
  w2_enemy_position_x_3: number;
  w2_enemy_local_position_y_3: number;
  w2_enemy_size_3: number;
  w2_enemy_position_x_4: number;
  w2_enemy_local_position_y_4: number;
  w2_enemy_size_4: number;
  w2_enemy_position_x_5: number;
  w2_enemy_local_position_y_5: number;
  w2_enemy_size_5: number;
  w3_enemy_position_x_1: number;
  w3_enemy_local_position_y_1: number;
  w3_enemy_size_1: number;
  w3_enemy_position_x_2: number;
  w3_enemy_local_position_y_2: number;
  w3_enemy_size_2: number;
  w3_enemy_position_x_3: number;
  w3_enemy_local_position_y_3: number;
  w3_enemy_size_3: number;
  w3_enemy_position_x_4: number;
  w3_enemy_local_position_y_4: number;
  w3_enemy_size_4: number;
  w3_enemy_position_x_5: number;
  w3_enemy_local_position_y_5: number;
  w3_enemy_size_5: number;
  background: number;
  bg_position: number;
}

export interface TowerEnemyParameter {
  enemy_id: number;
  unit_id: number;
  name: string;
  level: number;
  rarity: number;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  union_burst_level: number;
  main_skill_lv_1: number;
  main_skill_lv_2: number;
  main_skill_lv_3: number;
  main_skill_lv_4: number;
  main_skill_lv_5: number;
  main_skill_lv_6: number;
  main_skill_lv_7: number;
  main_skill_lv_8: number;
  main_skill_lv_9: number;
  main_skill_lv_10: number;
  ex_skill_lv_1: number;
  ex_skill_lv_2: number;
  ex_skill_lv_3: number;
  ex_skill_lv_4: number;
  ex_skill_lv_5: number;
  resist_status_id: number;
  accuracy: number;
  enemy_color: number;
}

export interface TowerExQuestData {
  tower_ex_quest_id: number;
  tower_area_id: number;
  floor_num: number;
  stamina: number;
  stamina_start: number;
  team_exp: number;
  limit_time: number;
  reward_image_1: number;
  reward_count_1: number;
  reward_image_2: number;
  reward_count_2: number;
  reward_image_3: number;
  reward_count_3: number;
  reward_image_4: number;
  reward_count_4: number;
  reward_image_5: number;
  reward_count_5: number;
  additional_reward_type: number;
  additional_reward_id: number;
  fix_reward_group_id: number;
  chest_id: number;
  background: number;
  bg_position: number;
  wave_group_id: number;
  enemy_position_x_1: number;
  enemy_local_position_y_1: number;
  enemy_size_1: number;
  enemy_position_x_2: number;
  enemy_local_position_y_2: number;
  enemy_size_2: number;
  enemy_position_x_3: number;
  enemy_local_position_y_3: number;
  enemy_size_3: number;
  enemy_position_x_4: number;
  enemy_local_position_y_4: number;
  enemy_size_4: number;
  enemy_position_x_5: number;
  enemy_local_position_y_5: number;
  enemy_size_5: number;
  wave_bgm: string;
  clp_flag: number;
  skip_level: number;
}

export interface TowerQuestData {
  tower_quest_id: number;
  tower_area_id: number;
  floor_num: number;
  floor_image_type: number;
  floor_image_add_type: number;
  open_tower_ex_quest_id: number;
  boss_floor_flg: number;
  stamina: number;
  stamina_start: number;
  team_exp: number;
  limit_time: number;
  recovery_hp_rate: number;
  recovery_tp_rate: number;
  start_tp_rate: number;
  reward_image_1: number;
  reward_count_1: number;
  reward_image_2: number;
  reward_count_2: number;
  reward_image_3: number;
  reward_count_3: number;
  reward_image_4: number;
  reward_count_4: number;
  reward_image_5: number;
  reward_count_5: number;
  additional_reward_type: number;
  additional_reward_id: number;
  fix_reward_group_id: number;
  odds_group_id: number;
  chest_id: number;
  background: number;
  bg_position: number;
  wave_group_id: number;
  enemy_position_x_1: number;
  enemy_local_position_y_1: number;
  enemy_size_1: number;
  enemy_position_x_2: number;
  enemy_local_position_y_2: number;
  enemy_size_2: number;
  enemy_position_x_3: number;
  enemy_local_position_y_3: number;
  enemy_size_3: number;
  enemy_position_x_4: number;
  enemy_local_position_y_4: number;
  enemy_size_4: number;
  enemy_position_x_5: number;
  enemy_local_position_y_5: number;
  enemy_size_5: number;
  wave_bgm: string;
  clp_flag: number;
  skip_level: number;
}

export interface TowerQuestFixRewardGroup {
  fix_reward_group_id: number;
  treasure_type_1: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  treasure_type_2: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  treasure_type_3: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  treasure_type_4: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  treasure_type_5: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
  treasure_type_6: number;
  reward_type_6: number;
  reward_id_6: number;
  reward_num_6: number;
  treasure_type_7: number;
  reward_type_7: number;
  reward_id_7: number;
  reward_num_7: number;
  treasure_type_8: number;
  reward_type_8: number;
  reward_id_8: number;
  reward_num_8: number;
  treasure_type_9: number;
  reward_type_9: number;
  reward_id_9: number;
  reward_num_9: number;
  treasure_type_10: number;
  reward_type_10: number;
  reward_id_10: number;
  reward_num_10: number;
}

export interface TowerQuestOddsGroup {
  odds_group_id: number;
  team_level_from: number;
  team_level_to: number;
  treasure_type_1: number;
  odds_csv_1: string;
  treasure_type_2: number;
  odds_csv_2: string;
  treasure_type_3: number;
  odds_csv_3: string;
  treasure_type_4: number;
  odds_csv_4: string;
  treasure_type_5: number;
  odds_csv_5: string;
  treasure_type_6: number;
  odds_csv_6: string;
  treasure_type_7: number;
  odds_csv_7: string;
  treasure_type_8: number;
  odds_csv_8: string;
  treasure_type_9: number;
  odds_csv_9: string;
  treasure_type_10: number;
  odds_csv_10: string;
}

export interface TowerSchedule {
  tower_schedule_id: number;
  max_tower_area_id: number;
  opening_story_id: number;
  count_start_time: string;
  recovery_disable_time: string;
  start_time: string;
  end_time: string;
}

export interface TowerStoryData {
  story_group_id: number;
  story_type: number;
  value: number;
  title: string;
  thumbnail_id: number;
  disp_order: number;
  start_time: string;
  end_time: string;
}

export interface TowerStoryDetail {
  story_id: number;
  story_group_id: number;
  title: string;
  sub_title: string;
  visible_type: number;
  story_end: number;
  pre_story_id: number;
  love_level: number;
  requirement_id: number;
  unlock_quest_id: number;
  story_quest_id: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_value_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_value_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_value_3: number;
  start_time: string;
  end_time: string;
}

export interface TowerWaveGroupData {
  id: number;
  wave_group_id: number;
  odds: number;
  enemy_id_1: number;
  enemy_id_2: number;
  enemy_id_3: number;
  enemy_id_4: number;
  enemy_id_5: number;
}

export interface TrainingQuestData {
  quest_id: number;
  area_id: number;
  quest_name: string;
  limit_team_level: number;
  unlock_quest_id_1: number;
  unlock_quest_id_2: number;
  stamina: number;
  stamina_start: number;
  team_exp: number;
  unit_exp: number;
  limit_time: number;
  rank_reward_group: number;
  background_1: number;
  wave_group_id_1: number;
  wave_bgm_sheet_id_1: string;
  wave_bgm_que_id_1: string;
  background_2: number;
  wave_group_id_2: number;
  wave_bgm_sheet_id_2: string;
  wave_bgm_que_id_2: string;
  background_3: number;
  wave_group_id_3: number;
  wave_bgm_sheet_id_3: string;
  wave_bgm_que_id_3: string;
  enemy_image_1: number;
  enemy_image_2: number;
  enemy_image_3: number;
  enemy_image_4: number;
  enemy_image_5: number;
  reward_image_1: number;
  reward_image_2: number;
  reward_image_3: number;
  reward_image_4: number;
  reward_image_5: number;
  training_quest_detail_bg_id: number;
  training_quest_detail_bg_position: number;
  start_time: string;
  end_time: string;
}

export interface TtkDrama {
  command_id: number;
  drama_id: number;
  command_type: number;
  param_01: string;
  param_02: string;
  param_03: string;
  param_04: string;
  param_05: string;
  param_06: string;
  param_07: string;
  param_08: string;
}

export interface TtkEnemy {
  enemy_id: number;
  score: number;
  coin: number;
  max: number;
}

export interface TtkNaviComment {
  comment_id: number;
  where_type: number;
  character_id: number;
  face_type: number;
  character_name: string;
  description: string;
  voice_id: number;
  start_time: string;
  end_time: string;
  pos_x: number;
  pos_y: number;
  change_face_time: number;
  change_face_type: number;
  event_id: number;
}

export interface TtkReward {
  id: number;
  ttk_score: number;
  mission_detail: string;
  reward_type_1: number;
  reward_id_1: number;
  reward_count_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_count_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_count_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_count_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_count_5: number;
}

export interface TtkScore {
  difficulty_level: number;
  coefficient_difficulty: number;
  coefficient_coin_score: number;
  life: number;
  coefficient_wrong_num: number;
}

export interface TtkStory {
  ttk_story_id: number;
  ttk_score: number;
  title: string;
}

export interface TtkStoryScript {
  id: number;
  story_id: number;
  seq_num: number;
  type: number;
  line_num: number;
  start_pos: number;
  end_pos: number;
  seek_time: number;
  sheet_name: string;
  cue_name: string;
  command: number;
  command_param: number;
}

export interface TtkWeapon {
  ttk_weapon_id: number;
  ttk_score: number;
  name: string;
}

export interface UekBoss {
  area: number;
  quest_name: string;
  limit_time: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
  background: number;
  enemy_id: number;
  bgm_sheet_id: string;
  bgm_que_id: string;
  detail_bg_id: number;
  detail_bg_position: number;
  detail_boss_bg_size: number;
  detail_boss_bg_height: number;
  result_boss_position_y: number;
  result_movie: number;
}

export interface UekDrama {
  command_id: number;
  drama_id: number;
  command_type: number;
  param_01: string;
  param_02: string;
  param_03: string;
  param_04: string;
  param_05: string;
  param_06: string;
  param_07: string;
  param_08: string;
}

export interface UekMission {
  mission_id: number;
  area: number;
  description: string;
  mission_condition: number;
  condition_value_1: number;
  condition_value_2: number;
  condition_value_3: number;
  condition_value_4: number;
  condition_value_5: number;
  condition_num: number;
  reward_type_1: number;
  reward_id_1: number;
  reward_num_1: number;
  reward_type_2: number;
  reward_id_2: number;
  reward_num_2: number;
  reward_type_3: number;
  reward_id_3: number;
  reward_num_3: number;
  reward_type_4: number;
  reward_id_4: number;
  reward_num_4: number;
  reward_type_5: number;
  reward_id_5: number;
  reward_num_5: number;
  system_id: number;
  event_id: number;
}

export interface UekSpineAnimLink {
  spine_id: number;
  anim_num: number;
}

export interface UniqueEquipmentCraft {
  equip_id: number;
  crafted_cost: number;
  reward_type_1: number;
  item_id_1: number;
  consume_num_1: number;
  reward_type_2: number;
  item_id_2: number;
  consume_num_2: number;
  reward_type_3: number;
  item_id_3: number;
  consume_num_3: number;
  reward_type_4: number;
  item_id_4: number;
  consume_num_4: number;
  reward_type_5: number;
  item_id_5: number;
  consume_num_5: number;
  reward_type_6: number;
  item_id_6: number;
  consume_num_6: number;
  reward_type_7: number;
  item_id_7: number;
  consume_num_7: number;
  reward_type_8: number;
  item_id_8: number;
  consume_num_8: number;
  reward_type_9: number;
  item_id_9: number;
  consume_num_9: number;
  reward_type_10: number;
  item_id_10: number;
  consume_num_10: number;
}

export interface UniqueEquipmentData {
  equipment_id: number;
  equipment_name: string;
  description: string;
  promotion_level: number;
  craft_flg: number;
  equipment_enhance_point: number;
  sale_price: number;
  require_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  enable_donation: number;
  accuracy: number;
}

export interface UniqueEquipmentEnhanceData {
  equip_slot: number;
  enhance_level: number;
  needed_point: number;
  total_point: number;
  needed_mana: number;
  rank: number;
}

export interface UniqueEquipmentEnhanceRate {
  equipment_id: number;
  equipment_name: string;
  description: string;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  accuracy: number;
}

export interface UniqueEquipmentRankup {
  equip_id: number;
  unique_equip_rank: number;
  unit_level: number;
  crafted_cost: number;
  reward_type_1: number;
  item_id_1: number;
  consume_num_1: number;
  reward_type_2: number;
  item_id_2: number;
  consume_num_2: number;
  reward_type_3: number;
  item_id_3: number;
  consume_num_3: number;
  reward_type_4: number;
  item_id_4: number;
  consume_num_4: number;
  reward_type_5: number;
  item_id_5: number;
  consume_num_5: number;
  reward_type_6: number;
  item_id_6: number;
  consume_num_6: number;
  reward_type_7: number;
  item_id_7: number;
  consume_num_7: number;
  reward_type_8: number;
  item_id_8: number;
  consume_num_8: number;
  reward_type_9: number;
  item_id_9: number;
  consume_num_9: number;
  reward_type_10: number;
  item_id_10: number;
  consume_num_10: number;
}

export interface UnitAttackPattern {
  pattern_id: number;
  unit_id: number;
  loop_start: number;
  loop_end: number;
  atk_pattern_1: number;
  atk_pattern_2: number;
  atk_pattern_3: number;
  atk_pattern_4: number;
  atk_pattern_5: number;
  atk_pattern_6: number;
  atk_pattern_7: number;
  atk_pattern_8: number;
  atk_pattern_9: number;
  atk_pattern_10: number;
  atk_pattern_11: number;
  atk_pattern_12: number;
  atk_pattern_13: number;
  atk_pattern_14: number;
  atk_pattern_15: number;
  atk_pattern_16: number;
  atk_pattern_17: number;
  atk_pattern_18: number;
  atk_pattern_19: number;
  atk_pattern_20: number;
}

export interface UnitBackground {
  unit_id: number;
  unit_name: string;
  bg_id: number;
  bg_name: string;
  position: number;
  face_type: number;
}

export interface UnitComments {
  id: number;
  unit_id: number;
  use_type: number;
  voice_id: number;
  face_id: number;
  change_time: number;
  change_face: number;
  description: string;
}

export interface UnitData {
  unit_id: number;
  unit_name: string;
  kana: string;
  prefab_id: number;
  prefab_id_battle: number;
  is_limited: number;
  rarity: number;
  motion_type: number;
  se_type: number;
  move_speed: number;
  search_area_width: number;
  atk_type: number;
  normal_atk_cast_time: number;
  cutin_1: number;
  cutin_2: number;
  cutin1_star6: number;
  cutin2_star6: number;
  guild_id: number;
  exskill_display: number;
  comment: string;
  only_disp_owned: number;
  start_time: string;
  end_time: string;
}

export interface UnitEnemyData {
  unit_id: number;
  unit_name: string;
  prefab_id: number;
  motion_type: number;
  se_type: number;
  move_speed: number;
  search_area_width: number;
  atk_type: number;
  normal_atk_cast_time: number;
  cutin: number;
  cutin_star6: number;
  visual_change_flag: number;
  comment: string;
}

export interface UnitIntroduction {
  id: number;
  gacha_id: number;
  introduction_number: number;
  start_time: string;
  end_time: string;
  maximum_chunk_size_1: number;
  maximum_chunk_size_loop_1: number;
  maximum_chunk_size_2: number;
  maximum_chunk_size_loop_2: number;
  maximum_chunk_size_3: number;
  maximum_chunk_size_loop_3: number;
}

export interface UnitMotionList {
  unit_id: number;
  sp_motion: number;
}

export interface UnitMypagePos {
  id: number;
  pos_x: number;
  pos_y: number;
  scale: number;
}

export interface UnitProfile {
  unit_id: number;
  unit_name: string;
  age: string;
  guild: string;
  race: string;
  height: string;
  weight: string;
  birth_month: string;
  birth_day: string;
  blood_type: string;
  favorite: string;
  voice: string;
  voice_id: number;
  catch_copy: string;
  self_text: string;
  guild_id: string;
}

export interface UnitPromotion {
  unit_id: number;
  promotion_level: number;
  equip_slot_1: number;
  equip_slot_2: number;
  equip_slot_3: number;
  equip_slot_4: number;
  equip_slot_5: number;
  equip_slot_6: number;
}

export interface UnitPromotionStatus {
  unit_id: number;
  promotion_level: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
}

export interface UnitRarity {
  unit_id: number;
  rarity: number;
  hp: number;
  hp_growth: number;
  atk: number;
  atk_growth: number;
  magic_str: number;
  magic_str_growth: number;
  def: number;
  def_growth: number;
  magic_def: number;
  magic_def_growth: number;
  physical_critical: number;
  physical_critical_growth: number;
  magic_critical: number;
  magic_critical_growth: number;
  wave_hp_recovery: number;
  wave_hp_recovery_growth: number;
  wave_energy_recovery: number;
  wave_energy_recovery_growth: number;
  dodge: number;
  dogde_growth: number;
  physical_penetrate: number;
  physical_penetrate_growth: number;
  magic_penetrate: number;
  magic_penetrate_growth: number;
  life_steal: number;
  life_steal_growth: number;
  hp_recovery_rate: number;
  hp_recovery_rate_growth: number;
  energy_recovery_rate: number;
  energy_recovery_rate_growth: number;
  energy_reduce_rate: number;
  energy_reduce_rate_growth: number;
  unit_material_id: number;
  consume_num: number;
  consume_gold: number;
  accuracy: number;
  accuracy_growth: number;
}

export interface UnitSkillData {
  unit_id: number;
  union_burst: number;
  main_skill_1: number;
  main_skill_2: number;
  main_skill_3: number;
  main_skill_4: number;
  main_skill_5: number;
  main_skill_6: number;
  main_skill_7: number;
  main_skill_8: number;
  main_skill_9: number;
  main_skill_10: number;
  ex_skill_1: number;
  ex_skill_evolution_1: number;
  ex_skill_2: number;
  ex_skill_evolution_2: number;
  ex_skill_3: number;
  ex_skill_evolution_3: number;
  ex_skill_4: number;
  ex_skill_evolution_4: number;
  ex_skill_5: number;
  ex_skill_evolution_5: number;
  sp_skill_1: number;
  sp_skill_2: number;
  sp_skill_3: number;
  sp_skill_4: number;
  sp_skill_5: number;
  union_burst_evolution: number;
  main_skill_evolution_1: number;
  main_skill_evolution_2: number;
  sp_skill_evolution_1: number;
  sp_skill_evolution_2: number;
}

export interface UnitStatusCoefficient {
  coefficient_id: number;
  hp_coefficient: number;
  atk_coefficient: number;
  magic_str_coefficient: number;
  def_coefficient: number;
  magic_def_coefficient: number;
  physical_critical_coefficient: number;
  magic_critical_coefficient: number;
  wave_hp_recovery_coefficient: number;
  wave_energy_recovery_coefficient: number;
  dodge_coefficient: number;
  physical_penetrate_coefficient: number;
  magic_penetrate_coefficient: number;
  life_steal_coefficient: number;
  hp_recovery_rate_coefficient: number;
  energy_recovery_rate_coefficient: number;
  energy_reduce_rate_coefficient: number;
  skill_lv_coefficient: number;
  exskill_evolution_coefficient: number;
  overall_coefficient: number;
  accuracy_coefficient: number;
  skill1_evolution_coefficient: number;
  skill1_evolution_slv_coefficient: number;
  ub_evolution_coefficient: number;
  ub_evolution_slv_coefficient: number;
}

export interface UnitUniqueEquip {
  unit_id: number;
  equip_slot: number;
  equip_id: number;
}

export interface UnlockRarity6 {
  unit_id: number;
  slot_id: number;
  unlock_level: number;
  unlock_flag: number;
  consume_gold: number;
  material_type: number;
  material_id: number;
  material_count: number;
  hp: number;
  atk: number;
  magic_str: number;
  def: number;
  magic_def: number;
  physical_critical: number;
  magic_critical: number;
  wave_hp_recovery: number;
  wave_energy_recovery: number;
  dodge: number;
  physical_penetrate: number;
  magic_penetrate: number;
  life_steal: number;
  hp_recovery_rate: number;
  energy_recovery_rate: number;
  energy_reduce_rate: number;
  accuracy: number;
}

export interface UnlockSkillData {
  promotion_level: number;
  unlock_skill: number;
}

export interface UnlockUnitCondition {
  unit_id: number;
  unit_name: string;
  class_id: number;
  pre_unit_id: number;
  condition_type_1: number;
  condition_type_detail_1: number;
  condition_id_1: number;
  count_1: number;
  condition_type_2: number;
  condition_type_detail_2: number;
  condition_id_2: number;
  count_2: number;
  condition_type_3: number;
  condition_type_detail_3: number;
  condition_id_3: number;
  count_3: number;
  condition_type_4: number;
  condition_type_detail_4: number;
  condition_id_4: number;
  count_4: number;
  condition_type_5: number;
  condition_type_detail_5: number;
  condition_id_5: number;
  count_5: number;
  release_effect_type: number;
}

export interface VisualCustomize {
  id: number;
  title_prefab: number;
  title_movie: number;
  title_voice: number;
  story_top_movie: number;
  quest_top_movie: number;
  profile_logo: number;
  watched_story_id: number;
  start_time: string;
  end_time: string;
}

export interface VoiceGroup {
  group_id: number;
  group_id_comment: string;
  group_unit_id_01: number;
  group_unit_id_02: number;
  group_unit_id_03: number;
  group_unit_id_04: number;
  group_unit_id_05: number;
}

export interface VoiceGroupChara {
  group_unit_id: number;
  group_unit_id_comment: string;
  unit_id_01: number;
  unit_id_02: number;
  unit_id_03: number;
  unit_id_04: number;
  unit_id_05: number;
  unit_id_06: number;
  unit_id_07: number;
  unit_id_08: number;
  unit_id_09: number;
  unit_id_10: number;
}

export interface VoteData {
  vote_id: number;
  vote_start_time: string;
  vote_end_time: string;
  result_start_time: string;
  result_end_time: string;
  start_story_id: number;
  result_story_id: number;
}

export interface VoteInfo {
  vote_id: number;
  vote_help_index: number;
  vote_title: string;
  vote_help: string;
}

export interface VoteUnit {
  vote_id: number;
  unit_id: number;
  unit_rarity: number;
}

export interface WaveGroupData {
  id: number;
  wave_group_id: number;
  odds: number;
  enemy_id_1: number;
  drop_gold_1: number;
  drop_reward_id_1: number;
  enemy_id_2: number;
  drop_gold_2: number;
  drop_reward_id_2: number;
  enemy_id_3: number;
  drop_gold_3: number;
  drop_reward_id_3: number;
  enemy_id_4: number;
  drop_gold_4: number;
  drop_reward_id_4: number;
  enemy_id_5: number;
  drop_gold_5: number;
  drop_reward_id_5: number;
  guest_enemy_id: number;
}

export interface Worldmap {
  course_id: number;
  name: string;
  map_id: number;
  sheet_id: string;
  que_id: string;
  start_area_id: number;
  end_area_id: number;
}
