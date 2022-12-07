import { Inputs } from "../lib/inputs";
import { DayFive } from "./day-five";

describe("day four tests", () => {
  it("should resolve part one test input", () => {
    const solution = new DayFive(new Inputs().dayFivePractice()).solvePartOne();
    expect(solution).toEqual("CMZ");
  });

  it("should resolve part one real input", () => {
    const solution = new DayFive(new Inputs().dayFiveReal()).solvePartOne();
    expect(solution).toEqual("WSFTMRHPP");
  });

  it("should resolve part two test input", () => {
    const solution = new DayFive(new Inputs().dayFivePractice()).solvePartTwo();
    expect(solution).toEqual("MCD");
  });

  it("should resolve part two real input", () => {
    const solution = new DayFive(new Inputs().dayFiveReal()).solvePartTwo();
    expect(solution).toEqual("GSLCMFBRP");
  });
});
