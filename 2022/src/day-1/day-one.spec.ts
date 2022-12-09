import { DayOne } from "./day-one";
import { Inputs } from "../lib/inputs";

describe("day one tests", () => {
  it("should resolve the example input for part one", () => {
    const solution: string = new DayOne(new Inputs().dayOnePractice()).solvePartOne();
    expect(solution).toEqual("24000");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DayOne(new Inputs().dayOneReal()).solvePartOne();
    expect(solution).toEqual("68787");
  });

  it("should resolve the example input for part two", () => {
    const solution: string = new DayOne(new Inputs().dayOnePractice()).solvePartTwo();
    expect(solution).toEqual("45000");
  });

  it("should resolve the real input for part two", () => {
    const solution: string = new DayOne(new Inputs().dayOneReal()).solvePartTwo();
    expect(solution).toEqual("198041");
  });
});
