import { DayTwo } from "./day-two";
import { Inputs } from "../lib/inputs";

describe("day two tests", () => {
  it("should resolve part one test input", () => {
    const solution = new DayTwo(new Inputs().dayTwoPractice()).solvePartOne();
    expect(solution).toEqual("15");
  });

  it("should resolve part one real input", () => {
    const solution = new DayTwo(new Inputs().dayTwoReal()).solvePartOne();
    expect(solution).toEqual("12679");
  });

  it("should resolve part two test input", () => {
    const solution = new DayTwo(new Inputs().dayTwoPractice()).solvePartTwo();
    expect(solution).toEqual("12");
  });

  it("should resolve part two real input", () => {
    const solution = new DayTwo(new Inputs().dayTwoReal()).solvePartTwo();
    expect(solution).toEqual("14470");
  });
});
