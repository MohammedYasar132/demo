import sum from "./sum.js";

describe("Sum Function Tests", () => {

  test("adds 2 + 3 to equal 5", () => {
    expect(sum(2,3)).toBe(5);
  });

  test("adds -3 + -5 to equal 15", () => {
    expect(sum(-3,-5)).toBe(-8);
  });

});