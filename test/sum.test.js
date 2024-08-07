import { sum } from "../src/sum";

test("Test sum function", () => {
  const result = sum(2, 5);
  expect(result).toBe(7);
});
