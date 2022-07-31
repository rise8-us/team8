import { App } from "@slack/bolt";

const initialize = () =>
  new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });

export default initialize;
