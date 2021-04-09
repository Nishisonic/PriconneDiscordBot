var _a, _b, _c, _d, _e, _f, _g;
import twitter from "twitter";
import http from "http";
import discord from "discord.js";
import cron from "node-cron";
import sqlite3 from "sqlite3";
import format from "date-fns/format/index.js";
import getMonth from "date-fns/getMonth/index.js";
import getDate from "date-fns/getDate/index.js";
import retryPromise from "ts-retry-promise";
import fetch from "node-fetch";
const client = new discord.Client();
const server = http.createServer();
class Database extends sqlite3.Database {
    async allAsync(sql) {
        return new Promise((resolve, reject) => this.all(sql, (err, rows) => (err ? reject(err) : resolve(rows))));
    }
    async getAsync(sql) {
        return new Promise((resolve, reject) => this.get(sql, (err, rows) => (err ? reject(err) : resolve(rows))));
    }
}
const DISCORD_BOT_TOKEN = (_a = process.env.DISCORD_BOT_TOKEN) !== null && _a !== void 0 ? _a : "";
const OFFICIAL = (_b = process.env.OFFICIAL) !== null && _b !== void 0 ? _b : "";
const CHAT = (_c = process.env.CHAT) !== null && _c !== void 0 ? _c : "";
const twConfig = {
    consumer_key: (_d = process.env.CONSUMER_KEY) !== null && _d !== void 0 ? _d : "",
    consumer_secret: (_e = process.env.CONSUMER_SECRET) !== null && _e !== void 0 ? _e : "",
    access_token_key: (_f = process.env.ACCESS_TOKEN_KEY) !== null && _f !== void 0 ? _f : "",
    access_token_secret: (_g = process.env.ACCESS_TOKEN_SECRET) !== null && _g !== void 0 ? _g : "",
};
const twClient = new twitter(twConfig);
const URL = "https://raw.githubusercontent.com/esterTion/redive_master_db_diff/master";
const TABLE_LIST = [
    "unit_profile",
    "unit_attack_pattern",
    "skill_data",
    "unit_skill_data",
    "unit_data",
    "campaign_schedule",
    "campaign_freegacha",
    "chara_fortune_schedule",
    "clan_battle_period",
    "tower_schedule",
];
const fetchDB = async () => {
    const db = new Database(":memory:", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    return await Promise.allSettled(TABLE_LIST.map(async (table) => {
        db.exec(await (await fetch(`${URL}/${table}.sql`)).text());
    })).then(() => db);
};
const fetchVersion = async () => await (await fetch(`${URL}/!TruthVersion.txt`)).text();
let master = await fetchDB();
let version = await fetchVersion();
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
    [84, ""],
    [85, ""],
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
const getUserTimelineAsync = (params) => new Promise((resolve, reject) => twClient.get("statuses/user_timeline", params, (error, tweets) => error ? reject(error) : resolve(tweets)));
const getUserTimelineRetryAsync = async (params, retries = 5) => await retryPromise.retryDecorator(async () => await getUserTimelineAsync(params), {
    timeout: 1000,
    retries,
})();
const NICO_LEPO = '<a href="http://www.nicovideo.jp/" rel="nofollow">niconico ニコレポ連携</a>';
const nishikumaBroadcastTweetProcess = async (lastUpdateTime) => {
    const params = { screen_name: "nishikkuma" };
    const tweets = (await getUserTimelineRetryAsync(params));
    return Promise.allSettled(tweets
        .filter(({ source }) => source === NICO_LEPO)
        .filter(({ text }) => /^【生放送】.* を開始しました。.*$/.test(text))
        .filter(({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime)
        .map(async (tweet) => {
        const channel = (await client.channels.fetch(CHAT));
        return await channel.send(tweet.text.replace(/^【生放送】(.*) を開始しました。.* #(.*)$/, "$1\nhttps://live2.nicovideo.jp/watch/$2"));
    }));
};
const priconneTweetProcess = async (lastUpdateTime) => {
    const params = { screen_name: "priconne_redive" };
    const tweets = (await getUserTimelineRetryAsync(params));
    return Promise.allSettled(tweets
        .filter(({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime)
        .map(async (tweet) => {
        const channel = (await client.channels.fetch(OFFICIAL));
        return await channel.send(`https://twitter.com/${params.screen_name}/status/${tweet.id_str}`);
    }));
};
const birthdayProcess = async () => {
    const date = Date.now();
    const unitNames = (await master.allAsync(`
    SELECT unit_name
    FROM (SELECT MIN(unit_id) AS unit_id FROM chara_identity GROUP BY chara_type) AS C
    LEFT JOIN unit_profile AS P
    ON C.unit_id = P.unit_id
    WHERE birth_month = '${getMonth(date) + 1}'
    AND birth_day = '${getDate(date)}'
  `));
    if (unitNames.length > 0) {
        const channel = (await client.channels.fetch(CHAT));
        return await channel.send(`【Happy Birthday♪】**${unitNames
            .map(({ unit_name }) => unit_name)
            .join(", ")}**`);
    }
    return null;
};
const presenceProcess = async () => {
    var _a;
    const date = Date.now();
    return await ((_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        activity: {
            name: `${format(date, "HH:mm")} JST`,
            type: "LISTENING",
        },
    }));
};
const arenaRemind = async (minutes = 0) => {
    const channel = (await client.channels.fetch(CHAT));
    return await channel.send(minutes > 0
        ? `アリーナ締切まで【${minutes}】分前`
        : "-----アリーナ締切-----");
};
const updateActivity = async () => {
    // 一日毎
    cron.schedule("0 0 * * *", async () => await Promise.allSettled([birthdayProcess()]));
    // 14:30
    cron.schedule("30 14 * * *", async () => await Promise.allSettled([arenaRemind(30)]));
    // 14:55
    cron.schedule("55 14 * * *", async () => await Promise.allSettled([arenaRemind(5)]));
    // 15:00
    cron.schedule("0 15 * * *", async () => await Promise.allSettled([arenaRemind()]));
    // 一分毎
    let lastUpdateTime = Date.now();
    cron.schedule("* * * * *", async () => await Promise.allSettled([
        nishikumaBroadcastTweetProcess(lastUpdateTime),
        priconneTweetProcess(lastUpdateTime),
        presenceProcess(),
        updateMaster(),
    ]).then(() => {
        lastUpdateTime = Date.now();
    }));
};
async function updateMaster() {
    const newVersion = await fetchVersion();
    console.log(`${version}`);
    if (version !== newVersion) {
        console.log(`${version} → ${newVersion}`);
        master = await fetchDB();
    }
    return master;
}
server.on("request", function (_, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
});
server.listen(process.env.PORT || 5000);
client.on("ready", async () => {
    var _a;
    await ((_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: "online",
    }));
    await updateActivity();
});
client.on("message", async (message) => {
    var _a;
    if (message.author.bot) {
        return;
    }
    if (message.mentions.has((_a = client.user) !== null && _a !== void 0 ? _a : "")) {
        await message.reply("呼びましたか？");
        return;
    }
    if (message.content.match(/・。・ｖ/)) {
        await message.channel.send("・。・ｖ");
        return;
    }
    await birthday(message);
    await schedule(message);
    await skill(message);
});
if (DISCORD_BOT_TOKEN == undefined) {
    console.log("DISCORD_BOT_TOKENが設定されていません。");
    process.exit(0);
}
client.login(DISCORD_BOT_TOKEN);
async function birthday(message) {
    if (message.content.match(/^\.birthday .+$/)) {
        const name = message.content.replace(/^\.birthday (.+)$/, "$1");
        const unit = (await master.getAsync(`
      SELECT *
      FROM unit_profile
      WHERE unit_name = '${name}'
    `));
        if (unit) {
            await message.channel.send(`「${unit.unit_name}」の誕生日は${unit.birth_month}月${unit.birth_day}日です。`);
        }
        else {
            await message.channel.send(`「${name}」のキャラ情報が見つかりませんでした。`);
        }
    }
}
async function schedule(message) {
    if (message.content === ".schedule") {
        const nowTime = Date.now();
        const schedule = (await master.allAsync(`
        SELECT *
        FROM campaign_schedule
        WHERE NOT campaign_category IN (84, 85)
      `));
        const freegacha = (await master.allAsync(`
        SELECT *
        FROM campaign_freegacha
        WHERE relation_id = 0
      `));
        const fortuneSchedule = (await master.allAsync(`
      SELECT *
      FROM chara_fortune_schedule
    `));
        const clanBattlePeriod = (await master.allAsync(`
      SELECT *
      FROM clan_battle_period
    `));
        const towerSchedule = (await master.allAsync(`
      SELECT *
      FROM tower_schedule
    `));
        const freegachaMessages = freegacha
            .filter(({ start_time, end_time }) => new Date(end_time).getTime() >= nowTime &&
            nowTime >= new Date(start_time).getTime())
            .map(({ freegacha_1, freegacha_10 }) => {
            return `・無料${freegacha_1 === 1 ? 1 : freegacha_10 === 1 ? 10 : "?"}連ガチャ`;
        });
        const fortuneMessages = fortuneSchedule
            .filter(({ start_time, end_time }) => new Date(end_time).getTime() >= nowTime &&
            nowTime >= new Date(start_time).getTime())
            .map(({ name }) => `・${name}`);
        const clanBattleMessages = clanBattlePeriod
            .filter(({ start_time, end_time }) => new Date(end_time).getTime() >= nowTime &&
            nowTime >= new Date(start_time).getTime())
            .map(() => "・クランバトル");
        const nextClanBattleMessages = clanBattlePeriod
            .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
            .reduce((p, clan) => {
            var _a;
            const dateString = `${format(new Date(clan.start_time), "yyyy-MM-dd")} ~ ${format(new Date(clan.end_time), "yyyy-MM-dd")}`;
            p[dateString] = compileMessage((_a = p[dateString]) !== null && _a !== void 0 ? _a : "", "クランバトル");
            return p;
        }, {});
        const towerScheduleMessages = towerSchedule
            .filter(({ start_time, end_time }) => new Date(end_time).getTime() >= nowTime &&
            nowTime >= new Date(start_time).getTime())
            .map(() => "・ルナの塔");
        const nextTowerScheduleMessages = towerSchedule
            .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
            .reduce((p, clan) => {
            var _a;
            const dateString = `${format(new Date(clan.start_time), "yyyy-MM-dd")} ~ ${format(new Date(clan.end_time), "yyyy-MM-dd")}`;
            p[dateString] = compileMessage((_a = p[dateString]) !== null && _a !== void 0 ? _a : "", "ルナの塔");
            return p;
        }, {});
        const sessionMessage = [
            ...uniqueWrap(schedule
                .filter(({ start_time, end_time }) => new Date(end_time).getTime() >= nowTime &&
                nowTime >= new Date(start_time).getTime())
                .sort(({ campaign_category: ac, start_time: at }, { campaign_category: bc, start_time: bt }) => {
                const aTime = new Date(at).getTime();
                const bTime = new Date(bt).getTime();
                if (aTime > bTime)
                    return 1;
                if (aTime < bTime)
                    return -1;
                if (ac > bc)
                    return 1;
                if (ac < bc)
                    return -1;
                return 0;
            })
                .reduce((p, campaign) => {
                var _a, _b;
                const text = (_b = (_a = CampaignCategory.get(campaign.campaign_category)) === null || _a === void 0 ? void 0 : _a.replace("%s", String(campaign.value / 1000))) !== null && _b !== void 0 ? _b : "不明";
                p = compileMessage(p, text);
                return p;
            }, ""))
                .split("・")
                .filter((str) => str.length > 0)
                .map((v) => `・${v}`),
            ...towerScheduleMessages,
            ...clanBattleMessages,
            ...freegachaMessages,
            ...fortuneMessages,
        ].join("\n");
        const scheduleMessages = schedule
            .filter(({ start_time }) => new Date(start_time).getTime() >= nowTime)
            .reduce((p, campaign) => {
            var _a, _b, _c;
            const dateString = `${format(new Date(campaign.start_time), "yyyy-MM-dd")} ~ ${format(new Date(campaign.end_time), "yyyy-MM-dd")}`;
            const text = (_b = (_a = CampaignCategory.get(campaign.campaign_category)) === null || _a === void 0 ? void 0 : _a.replace("%s", String(campaign.value / 1000))) !== null && _b !== void 0 ? _b : "不明";
            p[dateString] = compileMessage((_c = p[dateString]) !== null && _c !== void 0 ? _c : "", text);
            return p;
        }, {});
        const scheduleMessage = Object.entries(assign(scheduleMessages, nextTowerScheduleMessages, nextClanBattleMessages))
            .map(([key, value]) => `**${key}**\n${uniqueWrap(value)}`)
            .join("\n\n");
        await message.channel.send(`__**【開催中】**__\n${sessionMessage}\n\n__**【今後の予定】**__\n${scheduleMessage}`);
    }
}
function uniqueWrap(mes) {
    return mes
        .replace("ノーマル（プレイヤーEXP）1.5倍・ハード（プレイヤーEXP）1.5倍・ベリーハード（プレイヤーEXP）1.5倍・[サイドストーリー]ノーマル（プレイヤーEXP）1.5倍・[サイドストーリー]ハード（プレイヤーEXP）1.5倍", "全マップ（プレイヤーEXP）1.5倍")
        .replace("[イベント]ノーマル（プレイヤーEXP）1.5倍・[イベント]ハード（プレイヤーEXP）1.5倍", "[イベント]全マップ（プレイヤーEXP）1.5倍")
        .replace("[復刻イベント]ノーマル（プレイヤーEXP）1.5倍・[復刻イベント]ハード（プレイヤーEXP）1.5倍", "[復刻イベント]全マップ（プレイヤーEXP）1.5倍");
}
function compileMessage(mes, text) {
    if (mes === "") {
        return text;
    }
    const result = mes.split("・").map((message) => {
        if (message.replace(/(.*)（.*）.*/, "$1") ===
            text.replace(/(.*)（.*）.*/, "$1") &&
            message.replace(/.*（.*）(.*)/, "$1") ===
                text.replace(/.*（.*）(.*)/, "$1")) {
            return message.replace(/(.*)（(.*)）(.*)/, `$1（$2/${text.replace(/.*（(.*)）.*/, "$1")}）$3`);
        }
        return message;
    });
    const wraped = mes
        .split("・")
        .some((message) => message.replace(/(.*)（.*）.*/, "$1") ===
        text.replace(/(.*)（.*）.*/, "$1") &&
        message.replace(/.*（.*）(.*)/, "$1") ===
            text.replace(/.*（.*）(.*)/, "$1"));
    if (!wraped) {
        result.push(text);
    }
    return result.join("・");
}
function assign(...arrays) {
    const result = {};
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
        .reduce((p, [key, value]) => Object.assign(p, { [key]: value }), {});
}
async function skill(message) {
    if (message.content.match(/^\.skill .+$/)) {
        const name = message.content
            .replace(/^\.skill (.+)$/, "$1")
            .replace(/\(/g, "（")
            .replace(/\)/g, "）");
        const unit = (await master.getAsync(`
      SELECT *
      FROM unit_data
      WHERE unit_name = '${name}'
    `));
        if (unit) {
            const unitSkillData = await findUnitSkillDataAsync(unit.unit_id);
            await message.channel.send(`${name}\n\n**攻撃パターン**\n${await getAttackPatternStringAsync(unit.unit_id)}\n\n${skillFormat(await findSkillDataAsync(unitSkillData.union_burst), "UB")}${skillFormat(await findSkillDataAsync(unitSkillData.union_burst_evolution), "UB+", false)}${skillFormat(await findSkillDataAsync(unitSkillData.main_skill_1), "スキル1")}${skillFormat(await findSkillDataAsync(unitSkillData.main_skill_evolution_1), "スキル1+", false)}${skillFormat(await findSkillDataAsync(unitSkillData.main_skill_2), "スキル2")}${skillFormat(await findSkillDataAsync(unitSkillData.main_skill_evolution_2), "スキル2+", false)}${skillFormat(await findSkillDataAsync(unitSkillData.ex_skill_1), "EXスキル")}${skillFormat(await findSkillDataAsync(unitSkillData.ex_skill_evolution_1), "EXスキル+", false)}`);
        }
        else {
            await message.channel.send(`「${name}」のキャラ情報が見つかりませんでした。`);
        }
    }
}
async function findUnitSkillDataAsync(unitId) {
    return (await master.getAsync(`
    SELECT *
    FROM unit_skill_data
    WHERE unit_id = '${unitId}'
  `));
}
async function findSkillDataAsync(skillId) {
    return (await master.getAsync(`
    SELECT *
    FROM skill_data
    WHERE skill_id = '${skillId}'
  `));
}
async function getAttackPatternStringAsync(unitId) {
    const pattern = await findUnitAttackPatternAsync(unitId);
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
    return atkPatternList.reduce((p, v, i) => {
        const attack = `${i + 1 === loopStart ? "[" : ""}${v === 1001 ? "１" : v === 1002 ? "２" : "通"}${i + 1 === loopEnd ? "]" : ""}`;
        return i > 0 ? `${p}→${attack}` : `${attack}`;
    }, "");
}
async function findUnitAttackPatternAsync(unitId) {
    return (await master.getAsync(`
    SELECT *
    FROM unit_attack_pattern
    WHERE unit_id = '${unitId}'
  `));
}
function skillFormat(skillData, kind, disp = true) {
    if (skillData) {
        return `**[${kind}]** ${skillData.name}\n${skillData.description}\n\n`;
    }
    if (!disp) {
        return "";
    }
    return `**[${kind}]** なし\n\n\n`;
}
