import { Inputs } from "../lib/inputs";
import { DayFour } from "./day-four";

describe("day four tests", () => {
  it("should resolve part one test input", () => {
    const solution = new DayFour(new Inputs().dayFourPractice()).solvePartOne();
    expect(solution).toEqual("2");
  });

  it("should resolve part one real input", () => {
    const solution = new DayFour(new Inputs().dayFourReal()).solvePartOne();
    expect(solution).toEqual("518");
  });

  it("should resolve part two test input", () => {
    const solution = new DayFour(new Inputs().dayFourPractice()).solvePartTwo();
    expect(solution).toEqual("4");
  });

  it("should resolve part two real input", () => {
    const solution = new DayFour(new Inputs().dayFourReal()).solvePartTwo();
    expect(solution).toEqual("909");
  });
});
