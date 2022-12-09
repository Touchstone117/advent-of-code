import { Inputs } from "../lib/inputs";
import { DayEight } from "./day-eight";

describe("day one tests", () => {
  it("should resolve the example input for part one", () => {
    const solution: string = new DayEight(new Inputs().dayEightPractice()).solvePartOne();
    expect(solution).toEqual("21");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DayEight(new Inputs().dayEightReal()).solvePartOne();
    expect(solution).toEqual("1789");
  });

  it("should resolve the example input for part two", () => {
    const solution: string = new DayEight(new Inputs().dayEightPractice()).solvePartTwo();
    expect(solution).toEqual("8");
  });

  it("should resolve the real input for part two", () => {
    const solution: string = new DayEight(new Inputs().dayEightReal()).solvePartTwo();
    expect(solution).toEqual("314820");
  });
});
