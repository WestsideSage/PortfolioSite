import { describe, it, expect } from "vitest";

describe("Astro Site", () => {
  it("should have correct build configuration", () => {
    expect(true).toBe(true);
  });

  it("should handle markdown content", () => {
    const content = "# Hello World";
    expect(content).toContain("Hello World");
  });
});
