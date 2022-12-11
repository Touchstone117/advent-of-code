import { Inputs } from "../lib/inputs";
import { DayNine } from "./day-nine";

describe("day nine tests", () => {
  it("should resolve the example input for part one", () => {
    const solution: string = new DayNine(new Inputs().dayNinePractice()).solvePartOne();
    expect(solution).toEqual("13");
  });
  //
  // it("should resolve the real input for part one", () => {
  //   const solution: string = new DayNine(new Inputs().dayNineReal()).solvePartOne();
  //   expect(solution).toEqual("68787");
  // });
  //
  // it("should resolve the example input for part two", () => {
  //   const solution: string = new DayNine(new Inputs().dayNinePractice()).solvePartTwo();
  //   expect(solution).toEqual("45000");
  // });
  //
  // it("should resolve the real input for part two", () => {
  //   const solution: string = new DayNine(new Inputs().dayNineReal()).solvePartTwo();
  //   expect(solution).toEqual("198041");
  // });
});
