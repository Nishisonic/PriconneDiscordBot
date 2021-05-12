import cron from "node-cron";
import fetch from "node-fetch";
import sqlite3 from "sqlite3";
import { chatChannel } from "./discordClient.js";
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
    "skill_action",
    "hatsune_schedule",
    "event_story_data",
    "chara_identity",
];
class Database extends sqlite3.Database {
    async allAsync(sql) {
        return new Promise((resolve, reject) => this.all(sql, (err, rows) => (err ? reject(err) : resolve(rows))));
    }
    async getAsync(sql) {
        return new Promise((resolve, reject) => this.get(sql, (err, rows) => (err ? reject(err) : resolve(rows))));
    }
}
const fetchDB = async () => {
    const db = new Database(":memory:", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    return await Promise.allSettled(TABLE_LIST.map(async (table) => {
        db.exec(await (await fetch(`${URL}/${table}.sql`)).text());
    })).then(() => db);
};
const fetchVersion = async () => (await (await fetch(`${URL}/!TruthVersion.txt`)).text()).replace(/\n/, "");
async function updateMaster() {
    const newVersion = await fetchVersion();
    if (version !== newVersion) {
        await chatChannel.send(`マスタDBが更新されました[\`${version}\`->\`${newVersion}\`]`);
        version = newVersion;
        master = await fetchDB();
    }
    return master;
}
cron.schedule("* * * * *", async () => await updateMaster());
export let master = await fetchDB();
export let version = await fetchVersion();
