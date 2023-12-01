import { DayOne } from "./day-one";
import { Inputs } from "../lib/inputs";

describe("day one tests", () => {
  it("should resolve the example input for part one", () => {
    const solution: string = new DayOne(
      new Inputs().dayOnePractice(),
    ).solvePartOne();
    expect(solution).toEqual("142");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DayOne(
      new Inputs().dayOneReal(),
    ).solvePartOne();
    expect(solution).toEqual("55712");
  });

  it("should resolve the example input for part two", () => {
    const solution: string = new DayOne(
      new Inputs().dayOnePartTwoPractice(),
    ).solvePartTwo();
    expect(solution).toEqual("281");
  });

  it("should resolve the real input for part two", () => {
    const solution: string = new DayOne(
      new Inputs().dayOneReal(),
    ).solvePartTwo();
    expect(solution).toEqual("55413");
  });

  it("should resolve dummy input", () => {
    const solution: string = new DayOne(
      "tdszrfzspthree2ttzseven5seven",
    ).solvePartTwo();
    expect(solution).toEqual("37");

    const solution2: string = new DayOne(
      "5sjnnfivefourzxxfpfivenine7five",
    ).solvePartTwo();
    expect(solution2).toEqual("55");

    const solution3: string = new DayOne("eighthree").solvePartTwo();
    expect(solution3).toEqual("83");

    const solution4: string = new DayOne("sevenine").solvePartTwo();
    expect(solution4).toEqual("79");

    const solution5: string = new DayOne("7pqrstsixteen").solvePartTwo();
    expect(solution5).toEqual("76");
  });
});
