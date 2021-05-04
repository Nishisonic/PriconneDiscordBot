var _a, _b, _c, _d, _e, _f;
import twitter from "twitter";
import retryPromise from "ts-retry-promise";
import client from "./discordClient.js";
const CHAT = (_a = process.env.CHAT) !== null && _a !== void 0 ? _a : "";
const OFFICIAL = (_b = process.env.OFFICIAL) !== null && _b !== void 0 ? _b : "";
const twConfig = {
    consumer_key: (_c = process.env.CONSUMER_KEY) !== null && _c !== void 0 ? _c : "",
    consumer_secret: (_d = process.env.CONSUMER_SECRET) !== null && _d !== void 0 ? _d : "",
    access_token_key: (_e = process.env.ACCESS_TOKEN_KEY) !== null && _e !== void 0 ? _e : "",
    access_token_secret: (_f = process.env.ACCESS_TOKEN_SECRET) !== null && _f !== void 0 ? _f : "",
};
const twClient = new twitter(twConfig);
const getUserTimelineAsync = (params) => new Promise((resolve, reject) => twClient.get("statuses/user_timeline", params, (error, tweets) => error ? reject(error) : resolve(tweets)));
const getUserTimelineRetryAsync = async (params, retries = 5) => await retryPromise.retryDecorator(async () => await getUserTimelineAsync(params), {
    timeout: 1000,
    retries,
})();
const NICO_LEPO = '<a href="http://www.nicovideo.jp/" rel="nofollow">niconico ニコレポ連携</a>';
export async function nishikumaBroadcastTweetProcess(lastUpdateTime) {
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
}
export async function priconneTweetProcess(lastUpdateTime) {
    const params = { screen_name: "priconne_redive" };
    const tweets = (await getUserTimelineRetryAsync(params));
    return Promise.allSettled(tweets
        .filter(({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime)
        .map(async (tweet) => {
        const channel = (await client.channels.fetch(OFFICIAL));
        return await channel.send(`https://twitter.com/${params.screen_name}/status/${tweet.id_str}`);
    }));
}
