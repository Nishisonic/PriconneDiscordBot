import { billingCampaignChannel } from "./discordClient.js";
export async function dmmCreditCardCampaignRemind() {
    return await billingCampaignChannel.send("【10%還元】DMMカード会員様限定! 3Daysキャンペーン開催中(1~3日まで)\n" +
        "https://payment.dmm.com/creditcard/campaign/3days/");
}
