import { Inputs } from "../lib/inputs";
import { DayEleven } from "./day-eleven";

describe("day eleven tests", () => {
  it("should parse correctly", () => {
    const parserTest = new DayEleven(new Inputs().dayElevenPractice());
    expect(parserTest);
  });

  it("should resolve the example input for part one", () => {
    const solution: string = new DayEleven(new Inputs().dayElevenPractice()).solvePartOne();
    expect(solution).toEqual("24000");
  });

  // it("should resolve the real input for part one", () => {
  //   const solution: string = new DayEleven(new Inputs().dayElevenReal()).solvePartOne();
  //   expect(solution).toEqual("68787");
  // });
  //
  // it("should resolve the example input for part two", () => {
  //   const solution: string = new DayEleven(new Inputs().dayElevenPractice()).solvePartTwo();
  //   expect(solution).toEqual("45000");
  // });
  //
  // it("should resolve the real input for part two", () => {
  //   const solution: string = new DayEleven(new Inputs().dayElevenReal()).solvePartTwo();
  //   expect(solution).toEqual("198041");
  // });
});
