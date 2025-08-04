import { describe, it, expect } from "vitest";
import { Hono } from "hono";

describe("Hono API", () => {
  it("should create app instance", () => {
    const app = new Hono();
    expect(app).toBeDefined();
  });

  it("should handle health check", async () => {
    const app = new Hono();
    app.get("/healthz", (c) => c.json({ status: "healthy" }));

    const res = await app.request("/healthz");
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.status).toBe("healthy");
  });
});
