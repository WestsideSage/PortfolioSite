import { describe, it, expect, vi } from "vitest";

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    };
  },
}));

describe("Dashboard", () => {
  it("should pass basic test", () => {
    expect(true).toBe(true);
  });

  it("should have correct environment", () => {
    expect(process.env.NODE_ENV).toBeDefined();
  });
});
