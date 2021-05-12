import format from "date-fns/format/index.js";
import { Message } from "discord.js";
import { master } from "./db.js";
import {
  CampaignSchedule,
  CampaignFreegacha,
  CharaFortuneSchedule,
  ClanBattlePeriod,
  TowerSchedule,
  HatsuneSchedule,
  EventStoryData,
} from "./master";

const CampaignCategory = new Map([
  [0, ""],
  // スタミナ半減
  [11, "ノーマル（スタミナ半減）"],
  [12, "ハード（スタミナ半減）"],
  [13, ""],
  [14, "聖跡（スタミナ半減）"],
  [15, "神殿（スタミナ半減）"],
  [16, "ベリーハード（スタミナ半減）"],
  // レアドロップ率
  [21, "ノーマル（レアドロップ率）%s倍"],
  [22, "ハード（レアドロップ率）%s倍"],
  [23, ""],
  [24, "ベリーハード（レアドロップ率）%s倍"],
  // ドロップ
  [31, "ノーマル（ドロップ）%s倍"],
  [32, "ハード（ドロップ）%s倍"],
  [33, ""],
  [34, "探索（ドロップ）%s倍"],
  [35, "ダンジョン（ドロップ）%s倍"],
  [36, "クランバトル（ドロップ）%s倍"],
  [37, "聖跡（ドロップ）%s倍"],
  [38, "神殿（ドロップ）%s倍"],
  [39, "ベリーハード（ドロップ）%s倍"],
  // マナ
  [41, "ノーマル（マナ）%s倍"],
  [42, "ハード（マナ）%s倍"],
  [43, ""],
  [44, "探索（マナ）%s倍"],
  [45, "ダンジョン（マナ）%s倍"],
  [46, "クランバトル（マナ）%s倍"],
  // [47, ""],
  [48, "神殿（マナ）%s倍"],
  [49, "ベリーハード（マナ）%s倍"],
  // ダンジョンコイン
  [51, "ダンジョンコイン%s倍"],
  // クールタイム
  [61, "アリーナ（クールタイム）%s倍"],
  [62, "プリンセスアリーナ（クールタイム）%s倍"],
  // プレイヤーEXP
  [81, "ノーマル（プレイヤーEXP）%s倍"],
  [82, "ハード（プレイヤーEXP）%s倍"],
  [83, "ベリーハード（プレイヤーEXP）%s倍"],
  [84, ""], // playerExpAmountUniqueEquip
  [85, ""], // playerExpAmountHightRarityEquip
  // マスターコイン
  [90, "マスターコイン%s倍"],
  [91, "ノーマル（マスターコイン）%s倍"],
  [92, "ハード（マスターコイン）%s倍"],
  [93, "ベリーハード（マスターコイン）%s倍"],
  [94, "聖跡（マスターコイン）%s倍"],
  [95, "神殿（マスターコイン）%s倍"],
  [96, "[イベント]ノーマル（マスターコイン）%s倍"],
  [97, "[イベント]ハード（マスターコイン）%s倍"],
  [98, "[復刻イベント]ノーマル（マスターコイン）%s倍"],
  [99, "[復刻イベント]ハード（マスターコイン）%s倍"],
  [100, "[サイドストーリー]ノーマル（マスターコイン）%s倍"],
  [101, "[サイドストーリー]ハード（マスターコイン）%s倍"],
  // イベント
  [111, "[イベント]ノーマル（スタミナ半減）"],
  [112, "[イベント]ハード（スタミナ半減）"],
  [113, ""],
  [121, "[イベント]ノーマル（レアドロップ率）%s倍"],
  [122, "[イベント]ハード（レアドロップ率）%s倍"],
  [123, ""],
  [131, "[イベント]ノーマル（ドロップ）%s倍"],
  [132, "[イベント]ハード（ドロップ）%s倍"],
  [133, ""],
  [141, "[イベント]ノーマル（マナ）%s倍"],
  [142, "[イベント]ハード（マナ）%s倍"],
  [143, ""],
  [151, "[イベント]ノーマル（プレイヤーEXP）%s倍"],
  [152, "[イベント]ハード（プレイヤーEXP）%s倍"],
  // 復刻イベント
  [211, "[復刻イベント]ノーマル（スタミナ半減）"],
  [212, "[復刻イベント]ハード（スタミナ半減）"],
  [221, "[復刻イベント]ノーマル（レアドロップ率）%s倍"],
  [222, "[復刻イベント]ハード（レアドロップ率）%s倍"],
  [231, "[復刻イベント]ノーマル（ドロップ）%s倍"],
  [232, "[復刻イベント]ハード（ドロップ）%s倍"],
  [241, "[復刻イベント]ノーマル（マナ）%s倍"],
  [242, "[復刻イベント]ハード（マナ）%s倍"],
  [251, "[復刻イベント]ノーマル（プレイヤーEXP）%s倍"],
  [252, "[復刻イベント]ハード（プレイヤーEXP）%s倍"],
  [351, "[サイドストーリー]ノーマル（プレイヤーEXP）%s倍"],
  [352, "[サイドストーリー]ハード（プレイヤーEXP）%s倍"],
]);

export async function schedule(message: Message) {
  if (message.content === ".schedule") {
    await message.channel.send(
      `${await getSessionScheduleMessageAsync()}\n\n${await getNextScheduleMessageAsync()}`
    );
  }
}

async function getSessionScheduleMessageAsync() {
  const nowTime = Date.now();
  const schedule = (await master.allAsync(`
        SELECT *
        FROM campaign_schedule
        WHERE NOT campaign_category IN (84, 85)
      `)) as Readonly<CampaignSchedule[]>;
  const freegacha = (await master.allAsync(`
        SELECT *
        FROM campaign_freegacha
        WHERE relation_id = 0
      `)) as Readonly<CampaignFreegacha[]>;
  const fortuneSchedule = (await master.allAsync(`
      SELECT *
      FROM chara_fortune_schedule
    `)) as Readonly<CharaFortuneSchedule[]>;
  const clanBattlePeriod = (await master.allAsync(`
      SELECT *
      FROM clan_battle_period
    `)) as Readonly<ClanBattlePeriod[]>;
  const towerSchedule = (await master.allAsync(`
      SELECT *
      FROM tower_schedule
    `)) as Readonly<TowerSchedule[]>;
  const hatsuneSchedule = (await master.allAsync(`
        SELECT *
        FROM hatsune_schedule
    `)) as Readonly<HatsuneSchedule[]>;

  const freegachaMessages = freegacha
    .filter(
      ({ start_time, end_time }) =>
        new Date(end_time).getTime() >= nowTime &&
        nowTime >= new Date(start_time).getTime()
    )
    .map(({ freegacha_1, freegacha_10 }) => {
      return `・無料${
        freegacha_1 === 1 ? 1 : freegacha_10 === 1 ? 10 : "?"
      }連ガチャ`;
    });

  const fortuneMessages = fortuneSchedule
    .filter(
      ({ start_time, end_time }) =>
        new Date(end_time).getTime() >= nowTime &&
        nowTime >= new Date(start_time).getTime()
    )
    .map(({ name }) => `・${name}`);

  const clanBattleMessages = clanBattlePeriod
    .filter(
      ({ start_time, end_time }) =>
        new Date(end_time).getTime() >= nowTime &&
        nowTime >= new Date(start_time).getTime()
    )
    .map(() => "・クランバトル");

  const towerScheduleMessages = towerSchedule
    .filter(
      ({ start_time, end_time }) =>
        new Date(end_time).getTime() >= nowTime &&
        nowTime >= new Date(start_time).getTime()
    )
    .map(() => "・ルナの塔");

  const hatsuneScheduleMessages = await Promise.all(
    hatsuneSchedule
      .filter(
        ({ start_time, end_time }) =>
          new Date(end_time).getTime() >= nowTime &&
          nowTime >= new Date(start_time).getTime()
      )
      .map(async ({ event_id }) => {
        const eventStoryData = (await master.getAsync(`
            SELECT *
            FROM event_story_data
            WHERE value = ${event_id}
        `)) as Readonly<EventStoryData>;
        return `・${eventStoryData.title}`;
      })
  );

  const sessionMessage = [
    ...uniqueWrap(
      schedule
        .filter(
          ({ start_time, end_time }) =>
            new Date(end_time).getTime() >= nowTime &&
            nowTime >= new Date(start_time).getTime()
        )
        .sort(
          (
            { campaign_category: ac, start_time: at }: CampaignSchedule,
            { campaign_category: bc, start_time: bt }: CampaignSchedule
          ) => {
            const aTime = new Date(at).getTime();
            const bTime = new Date(bt).getTime();
            if (aTime > bTime) return 1;
            if (aTime < bTime) return -1;
            if (ac > bc) return 1;
            if (ac < bc) return -1;
            return 0;
          }
        )
        .reduce((p: string, campaign) => {
          const text =
            CampaignCategory.get(campaign.campaign_category)?.replace(
              "%s",
              String(campaign.value / 1000)
            ) ?? "不明";
          p = compileMessage(p, text);
          return p;
        }, "")
    )
      .split("・")
      .filter((str) => str.length > 0)
      .map((v) => `・${v}`),
    ...towerScheduleMessages,
    ...clanBattleMessages,
    ...freegachaMessages,
    ...fortuneMessages,
    ...hatsuneScheduleMessages,
  ].join("\n");

  return `__**【開催中】**__\n${sessionMessage}`;
}

async function getNextScheduleMessageAsync() {
  const nowTime = Date.now();
  const schedule = (await master.allAsync(`
          SELECT *
          FROM campaign_schedule
          WHERE NOT campaign_category IN (84, 85)
        `)) as Readonly<CampaignSchedule[]>;
  const freegacha = (await master.allAsync(`
        SELECT *
        FROM campaign_freegacha
        WHERE relation_id = 0
        `)) as Readonly<CampaignFreegacha[]>;
  const fortuneSchedule = (await master.allAsync(`
        SELECT *
        FROM chara_fortune_schedule
    `)) as Readonly<CharaFortuneSchedule[]>;
  const clanBattlePeriod = (await master.allAsync(`
        SELECT *
        FROM clan_battle_period
      `)) as Readonly<ClanBattlePeriod[]>;
  const towerSchedule = (await master.allAsync(`
        SELECT *
        FROM tower_schedule
      `)) as Readonly<TowerSchedule[]>;
  const hatsuneSchedule = (await master.allAsync(`
          SELECT *
          FROM hatsune_schedule
      `)) as Readonly<HatsuneSchedule[]>;

  const freegachaMessages = freegacha
    .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
    .reduce((p: { [name: string]: string }, freegacha) => {
      const dateString = `${format(
        new Date(freegacha.start_time),
        "yyyy-MM-dd"
      )} ~ ${format(new Date(freegacha.end_time), "yyyy-MM-dd")}`;
      const count = (() => {
        if (freegacha.freegacha_1 === 1) {
          return 1;
        }
        if (freegacha.freegacha_10 === 1) {
          return 10;
        }
        return "?";
      })();
      p[dateString] = compileMessage(
        p[dateString] ?? "",
        `無料${count}連ガチャ`
      );
      return p;
    }, {});

  const fortuneMessages = fortuneSchedule
    .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
    .reduce((p: { [name: string]: string }, fortune) => {
      const dateString = `${format(
        new Date(fortune.start_time),
        "yyyy-MM-dd"
      )} ~ ${format(new Date(fortune.end_time), "yyyy-MM-dd")}`;
      p[dateString] = compileMessage(p[dateString] ?? "", fortune.name);
      return p;
    }, {});

  const clanBattleMessages = clanBattlePeriod
    .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
    .reduce((p: { [name: string]: string }, clan) => {
      const dateString = `${format(
        new Date(clan.start_time),
        "yyyy-MM-dd"
      )} ~ ${format(new Date(clan.end_time), "yyyy-MM-dd")}`;
      p[dateString] = compileMessage(p[dateString] ?? "", "クランバトル");
      return p;
    }, {});

  const towerScheduleMessages = towerSchedule
    .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
    .reduce((p: { [name: string]: string }, tower) => {
      const dateString = `${format(
        new Date(tower.start_time),
        "yyyy-MM-dd"
      )} ~ ${format(new Date(tower.end_time), "yyyy-MM-dd")}`;
      p[dateString] = compileMessage(p[dateString] ?? "", "ルナの塔");
      return p;
    }, {});

  const hatsuneScheduleMessages = (
    await Promise.all(
      hatsuneSchedule
        .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
        .map(async ({ start_time, end_time, event_id }) => {
          const eventStoryData = (await master.getAsync(`
              SELECT *
              FROM event_story_data
              WHERE value = ${event_id}
          `)) as Readonly<EventStoryData>;
          return {
            start_time,
            end_time,
            title: eventStoryData.title,
          };
        })
    )
  ).reduce((p: { [name: string]: string }, hatsune) => {
    const dateString = `${format(
      new Date(hatsune.start_time),
      "yyyy-MM-dd"
    )} ~ ${format(new Date(hatsune.end_time), "yyyy-MM-dd")}`;

    p[dateString] = compileMessage(p[dateString] ?? "", hatsune.title);
    return p;
  }, {});

  const scheduleMessages = schedule
    .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
    .reduce((p: { [name: string]: string }, campaign) => {
      const dateString = `${format(
        new Date(campaign.start_time),
        "yyyy-MM-dd"
      )} ~ ${format(new Date(campaign.end_time), "yyyy-MM-dd")}`;
      const text =
        CampaignCategory.get(campaign.campaign_category)?.replace(
          "%s",
          String(campaign.value / 1000)
        ) ?? "不明";
      p[dateString] = compileMessage(p[dateString] ?? "", text);
      return p;
    }, {});

  const scheduleMessage = Object.entries(
    assign(
      scheduleMessages,
      towerScheduleMessages,
      clanBattleMessages,
      hatsuneScheduleMessages,
      freegachaMessages,
      fortuneMessages
    )
  )
    .map(([key, value]) => `**${key}**\n${uniqueWrap(value)}`)
    .join("\n\n");
  return `__**【今後の予定】**__\n${scheduleMessage}`;
}

function uniqueWrap(mes: string) {
  return mes
    .replace(
      "ノーマル（プレイヤーEXP）1.5倍・ハード（プレイヤーEXP）1.5倍・ベリーハード（プレイヤーEXP）1.5倍・[サイドストーリー]ノーマル（プレイヤーEXP）1.5倍・[サイドストーリー]ハード（プレイヤーEXP）1.5倍",
      "全マップ（プレイヤーEXP）1.5倍"
    )
    .replace(
      "[イベント]ノーマル（プレイヤーEXP）1.5倍・[イベント]ハード（プレイヤーEXP）1.5倍",
      "[イベント]全マップ（プレイヤーEXP）1.5倍"
    )
    .replace(
      "[復刻イベント]ノーマル（プレイヤーEXP）1.5倍・[復刻イベント]ハード（プレイヤーEXP）1.5倍",
      "[復刻イベント]全マップ（プレイヤーEXP）1.5倍"
    );
}

function compileMessage(mes: string, text: string) {
  if (mes === "") {
    return text;
  }

  const result = mes.split("・").map((message) => {
    if (
      message.replace(/(.*)（.*）.*/, "$1") ===
        text.replace(/(.*)（.*）.*/, "$1") &&
      message.replace(/.*（.*）(.*)/, "$1") ===
        text.replace(/.*（.*）(.*)/, "$1")
    ) {
      return message.replace(
        /(.*)（(.*)）(.*)/,
        `$1（$2/${text.replace(/.*（(.*)）.*/, "$1")}）$3`
      );
    }
    return message;
  });

  const wraped = mes
    .split("・")
    .some(
      (message) =>
        message.replace(/(.*)（.*）.*/, "$1") ===
          text.replace(/(.*)（.*）.*/, "$1") &&
        message.replace(/.*（.*）(.*)/, "$1") ===
          text.replace(/.*（.*）(.*)/, "$1")
    );

  if (!wraped) {
    result.push(text);
  }

  return result.join("・");
}

function assign(...arrays: { [name: string]: string }[]): {
  [name: string]: string;
} {
  const result: { [name: string]: string } = {};

  for (const array of arrays) {
    for (const [key, value] of Object.entries(array)) {
      result[key] = result[key] ? `${result[key]}・${value}` : value;
    }
  }

  return Object.entries(result)
    .sort((a, b) => {
      const startA = new Date(a[0].replace(/^(.*) ~ (.*)$/, "$1")).getTime();
      const endA = new Date(a[0].replace(/^(.*) ~ (.*)$/, "$2")).getTime();
      const startB = new Date(b[0].replace(/^(.*) ~ (.*)$/, "$1")).getTime();
      const endB = new Date(b[0].replace(/^(.*) ~ (.*)$/, "$2")).getTime();

      if (startA > startB) {
        return 1;
      }
      if (startA < startB) {
        return -1;
      }
      if (endA > endB) {
        return 1;
      }
      if (endA < endB) {
        return -1;
      }
      return 0;
    })
    .reduce(
      (p: { [name: string]: string }, [key, value]) =>
        Object.assign(p, { [key]: value }),
      {}
    );
}
