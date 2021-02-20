var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const client = new discord.Client();
const server = http.createServer();
class Database extends sqlite3.Database {
    allAsync(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => this.all(sql, (err, rows) => (err ? reject(err) : resolve(rows))));
        });
    }
    getAsync(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => this.get(sql, (err, rows) => (err ? reject(err) : resolve(rows))));
        });
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
const master = new Database("./PriconneResource/master.db");
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
const getUserTimelineRetryAsync = (params, retries = 5) => __awaiter(void 0, void 0, void 0, function* () {
    return yield retryPromise.retryDecorator(() => __awaiter(void 0, void 0, void 0, function* () { return yield getUserTimelineAsync(params); }), {
        timeout: 1000,
        retries,
    })();
});
const NICO_LEPO = '<a href="http://www.nicovideo.jp/" rel="nofollow">niconico ニコレポ連携</a>';
const nishikumaBroadcastTweetProcess = (lastUpdateTime) => __awaiter(void 0, void 0, void 0, function* () {
    const params = { screen_name: "nishikkuma" };
    const tweets = (yield getUserTimelineRetryAsync(params));
    return Promise.allSettled(tweets
        .filter(({ source }) => source === NICO_LEPO)
        .filter(({ text }) => /^【生放送】.* を開始しました。.*$/.test(text))
        .filter(({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime)
        .map((tweet) => __awaiter(void 0, void 0, void 0, function* () {
        const channel = (yield client.channels.fetch(CHAT));
        return yield channel.send(tweet.text.replace(/^【生放送】(.*) を開始しました。.* #(.*)$/, "$1\nhttps://live2.nicovideo.jp/watch/$2"));
    })));
});
const priconneTweetProcess = (lastUpdateTime) => __awaiter(void 0, void 0, void 0, function* () {
    const params = { screen_name: "priconne_redive" };
    const tweets = (yield getUserTimelineRetryAsync(params));
    return Promise.allSettled(tweets
        .filter(({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime)
        .map((tweet) => __awaiter(void 0, void 0, void 0, function* () {
        const channel = (yield client.channels.fetch(OFFICIAL));
        return yield channel.send(`https://twitter.com/${params.screen_name}/status/${tweet.id_str}`);
    })));
});
const birthdayProcess = () => __awaiter(void 0, void 0, void 0, function* () {
    const date = Date.now();
    const unitNames = (yield master.allAsync(`
    SELECT unit_name
    FROM (SELECT MIN(unit_id) AS unit_id FROM chara_identity GROUP BY chara_type) AS C
    LEFT JOIN unit_profile AS P
    ON C.unit_id = P.unit_id
    WHERE birth_month = '${getMonth(date) + 1}'
    AND birth_day = '${getDate(date)}'
  `));
    if (unitNames.length > 0) {
        const channel = (yield client.channels.fetch(CHAT));
        return yield channel.send(`【Happy Birthday♪】**${unitNames
            .map(({ unit_name }) => unit_name)
            .join(", ")}**`);
    }
    return null;
});
const presenceProcess = () => __awaiter(void 0, void 0, void 0, function* () {
    var _h;
    const date = Date.now();
    return yield ((_h = client.user) === null || _h === void 0 ? void 0 : _h.setPresence({
        activity: {
            name: `${format(date, "HH:mm")} JST`,
            type: "LISTENING",
        },
    }));
});
const arenaRemind = (minutes = 0) => __awaiter(void 0, void 0, void 0, function* () {
    const channel = (yield client.channels.fetch(CHAT));
    return yield channel.send(minutes > 0
        ? `アリーナ締切まで【${minutes}】分前`
        : "-----アリーナ締切-----");
});
const updateActivity = () => __awaiter(void 0, void 0, void 0, function* () {
    // 一日毎
    cron.schedule("0 0 * * *", () => __awaiter(void 0, void 0, void 0, function* () { return yield Promise.allSettled([birthdayProcess()]); }));
    // 14:30
    cron.schedule("30 14 * * *", () => __awaiter(void 0, void 0, void 0, function* () { return yield Promise.allSettled([arenaRemind(30)]); }));
    // 14:55
    cron.schedule("55 14 * * *", () => __awaiter(void 0, void 0, void 0, function* () { return yield Promise.allSettled([arenaRemind(5)]); }));
    // 15:00
    cron.schedule("0 15 * * *", () => __awaiter(void 0, void 0, void 0, function* () { return yield Promise.allSettled([arenaRemind()]); }));
    // 一分毎
    let lastUpdateTime = Date.now();
    cron.schedule("* * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
        return yield Promise.allSettled([
            nishikumaBroadcastTweetProcess(lastUpdateTime),
            priconneTweetProcess(lastUpdateTime),
            presenceProcess(),
        ]).then(() => {
            lastUpdateTime = Date.now();
        });
    }));
});
server.on("request", function (_, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
});
server.listen(process.env.PORT || 5000);
client.on("ready", () => __awaiter(void 0, void 0, void 0, function* () {
    var _j;
    console.log("Bot準備完了");
    yield ((_j = client.user) === null || _j === void 0 ? void 0 : _j.setPresence({
        status: "online",
    }));
    yield updateActivity();
}));
client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _k;
    if (message.author.bot) {
        return;
    }
    if (message.mentions.has((_k = client.user) !== null && _k !== void 0 ? _k : "")) {
        yield message.reply("呼びましたか？");
        return;
    }
    if (message.content.match(/・。・ｖ/)) {
        yield message.channel.send("・。・ｖ");
        return;
    }
    yield birthday(message);
    yield schedule(message);
    yield skill(message);
}));
if (DISCORD_BOT_TOKEN == undefined) {
    console.log("DISCORD_BOT_TOKENが設定されていません。");
    process.exit(0);
}
client.login(DISCORD_BOT_TOKEN);
function birthday(message) {
    return __awaiter(this, void 0, void 0, function* () {
        if (message.content.match(/^\.birthday .+$/)) {
            const name = message.content.replace(/^\.birthday (.+)$/, "$1");
            const unit = (yield master.getAsync(`
      SELECT *
      FROM unit_profile
      WHERE unit_name = '${name}'
    `));
            if (unit) {
                yield message.channel.send(`「${unit.unit_name}」の誕生日は${unit.birth_month}月${unit.birth_day}日です。`);
            }
            else {
                yield message.channel.send(`「${name}」のキャラ情報が見つかりませんでした。`);
            }
        }
    });
}
function schedule(message) {
    return __awaiter(this, void 0, void 0, function* () {
        if (message.content === ".schedule") {
            const nowTime = Date.now();
            const schedule = (yield master.allAsync(`
        SELECT *
        FROM campaign_schedule
        WHERE NOT campaign_category IN (84, 85)
      `));
            const freegacha = (yield master.allAsync(`
        SELECT *
        FROM campaign_freegacha
        WHERE relation_id = 0
      `));
            const fortuneSchedule = (yield master.allAsync(`
      SELECT *
      FROM chara_fortune_schedule
    `));
            const clanBattlePeriod = (yield master.allAsync(`
      SELECT *
      FROM clan_battle_period
    `));
            const towerSchedule = (yield master.allAsync(`
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
                .map(({ name }) => name);
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
            yield message.channel.send(`__**【開催中】**__\n${sessionMessage}\n\n__**【今後の予定】**__\n${scheduleMessage}`);
        }
    });
}
function uniqueWrap(mes) {
    console.log(mes.replace("ノーマル（プレイヤーEXP）1.5倍・ハード（プレイヤーEXP）1.5倍・ベリーハード（プレイヤーEXP）1.5倍・[サイドストーリー]ノーマル（プレイヤーEXP）1.5倍・[サイドストーリー]ハード（プレイヤーEXP）1.5倍", "全マップ（プレイヤーEXP）1.5倍"));
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
function skill(message) {
    return __awaiter(this, void 0, void 0, function* () {
        if (message.content.match(/^\.skill .+$/)) {
            const name = message.content
                .replace(/^\.skill (.+)$/, "$1")
                .replace(/\(/g, "（")
                .replace(/\)/g, "）");
            const unit = (yield master.getAsync(`
      SELECT *
      FROM unit_data
      WHERE unit_name = '${name}'
    `));
            if (unit) {
                const unitSkillData = yield findUnitSkillDataAsync(unit.unit_id);
                yield message.channel.send(`${name}\n\n**攻撃パターン**\n${yield getAttackPatternStringAsync(unit.unit_id)}\n\n${skillFormat(yield findSkillDataAsync(unitSkillData.union_burst), "UB")}${skillFormat(yield findSkillDataAsync(unitSkillData.union_burst_evolution), "UB+", false)}${skillFormat(yield findSkillDataAsync(unitSkillData.main_skill_1), "スキル1")}${skillFormat(yield findSkillDataAsync(unitSkillData.main_skill_evolution_1), "スキル1+", false)}${skillFormat(yield findSkillDataAsync(unitSkillData.main_skill_2), "スキル2")}${skillFormat(yield findSkillDataAsync(unitSkillData.main_skill_evolution_2), "スキル2+", false)}${skillFormat(yield findSkillDataAsync(unitSkillData.ex_skill_1), "EXスキル")}${skillFormat(yield findSkillDataAsync(unitSkillData.ex_skill_evolution_1), "EXスキル+", false)}`);
            }
            else {
                yield message.channel.send(`「${name}」のキャラ情報が見つかりませんでした。`);
            }
        }
    });
}
function findUnitSkillDataAsync(unitId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield master.getAsync(`
    SELECT *
    FROM unit_skill_data
    WHERE unit_id = '${unitId}'
  `));
    });
}
function findSkillDataAsync(skillId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield master.getAsync(`
    SELECT *
    FROM skill_data
    WHERE skill_id = '${skillId}'
  `));
    });
}
function getAttackPatternStringAsync(unitId) {
    return __awaiter(this, void 0, void 0, function* () {
        const pattern = yield findUnitAttackPatternAsync(unitId);
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
    });
}
function findUnitAttackPatternAsync(unitId) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield master.getAsync(`
    SELECT *
    FROM unit_attack_pattern
    WHERE unit_id = '${unitId}'
  `));
    });
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
