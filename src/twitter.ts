import twitter, { RequestParams, ResponseData } from "twitter";
import retryPromise from "ts-retry-promise";
import { chatChannel, officialChannel } from "./discordClient.js";

const twConfig = {
  consumer_key: process.env.CONSUMER_KEY ?? "",
  consumer_secret: process.env.CONSUMER_SECRET ?? "",
  access_token_key: process.env.ACCESS_TOKEN_KEY ?? "",
  access_token_secret: process.env.ACCESS_TOKEN_SECRET ?? "",
};

const twClient = new twitter(twConfig);

type Tweet = {
  source: string;
  text: string;
  created_at: string;
  id_str: string;
};

const getUserTimelineAsync = (params: RequestParams): Promise<ResponseData> =>
  new Promise((resolve, reject) =>
    twClient.get("statuses/user_timeline", params, (error, tweets) =>
      error ? reject(error) : resolve(tweets)
    )
  );

const getUserTimelineRetryAsync = async (params: RequestParams, retries = 5) =>
  await retryPromise.retryDecorator(
    async () => await getUserTimelineAsync(params),
    {
      timeout: 1000,
      retries,
    }
  )();

const NICO_LEPO =
  '<a href="http://www.nicovideo.jp/" rel="nofollow">niconico ニコレポ連携</a>';

export async function nishikumaBroadcastTweetProcess(lastUpdateTime: number) {
  const params: RequestParams = { screen_name: "nishikkuma" };
  const tweets = (await getUserTimelineRetryAsync(params)) as Tweet[];

  return Promise.allSettled(
    tweets
      .filter(({ source }) => source === NICO_LEPO)
      .filter(({ text }) => /^【生放送】.* を開始しました。.*$/.test(text))
      .filter(
        ({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime
      )
      .map(async (tweet) => {
        return await chatChannel.send(
          tweet.text.replace(
            /^【生放送】(.*) を開始しました。.* #(.*)$/,
            "$1\nhttps://live2.nicovideo.jp/watch/$2"
          )
        );
      })
  );
}

export async function priconneTweetProcess(lastUpdateTime: number) {
  const params: RequestParams = { screen_name: "priconne_redive" };
  const tweets = (await getUserTimelineRetryAsync(params)) as Tweet[];

  return Promise.allSettled(
    tweets
      .filter(
        ({ created_at }) => new Date(created_at).getTime() >= lastUpdateTime
      )
      .map(async (tweet) => {
        return await officialChannel.send(
          `https://twitter.com/${params.screen_name}/status/${tweet.id_str}`
        );
      })
  );
}
