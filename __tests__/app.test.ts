import { config } from "dotenv";

config({ path: "./.env.test" });

const mockAppStart = jest.fn();
jest.mock("../src/utils/initialize", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    start: mockAppStart,
  })),
}));

jest.spyOn(console, "log").mockImplementation(() => {});

describe("app", () => {
  it("should start", async () => {
    await import("../src/app");

    expect(mockAppStart).toHaveBeenCalledTimes(1);
  });
});
