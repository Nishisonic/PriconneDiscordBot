var _a, _b, _c, _d;
import twitter from "twitter";
import retryPromise from "ts-retry-promise";
import { chatChannel, officialChannel } from "./discordClient.js";
const twConfig = {
    consumer_key: (_a = process.env.CONSUMER_KEY) !== null && _a !== void 0 ? _a : "",
    consumer_secret: (_b = process.env.CONSUMER_SECRET) !== null && _b !== void 0 ? _b : "",
    access_token_key: (_c = process.env.ACCESS_TOKEN_KEY) !== null && _c !== void 0 ? _c : "",
    access_token_secret: (_d = process.env.ACCESS_TOKEN_SECRET) !== null && _d !== void 0 ? _d : "",
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
        return await chatChannel.send(tweet.text.replace(/^【生放送】(.*) を開始しました。.* #(.*)$/, "$1\nhttps://live2.nicovideo.jp/watch/$2"));
    }));
}
export async function priconneTweetProcess(lastUpdateTime) {
    const params = { screen_name: "priconne_redive" };
    const tweets = (await getUserTimelineRetryAsync(params));
    return Promise.allSettled(tweets
        .filter(({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime)
        .map(async (tweet) => {
        return await officialChannel.send(`https://twitter.com/${params.screen_name}/status/${tweet.id_str}`);
    }));
}
