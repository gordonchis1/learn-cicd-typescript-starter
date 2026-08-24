import { getAPIKey } from "../api/auth.js";
import { describe, expect, it } from "vitest";

describe("Test getAPIKey function", () => {
  it("Send valid apiKey header", () => {
    const headers = {
      authorization: "ApiKey 123",
    };

    const key = getAPIKey(headers);

    expect(key).toBe("123");
  });
  it("Send invalid token header", () => {
    const headers = {
      authorization: "123",
    };

    const key = getAPIKey(headers);

    expect(key).toBe(null);
  });
});
