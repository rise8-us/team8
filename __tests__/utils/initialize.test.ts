import { config } from "dotenv";
import initialize from "../../src/utils/initialize";
import { App } from "@slack/bolt";

config({ path: "./.env.test" });

jest.mock("@slack/bolt");

describe("initialize", () => {
  it("should instantiate a new App", () => {
    const app = initialize();

    expect(app).toBeInstanceOf(App);
    expect(App).toHaveBeenCalledWith({
      token: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
    });
  });
});
