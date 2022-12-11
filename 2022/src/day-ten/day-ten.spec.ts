import { Inputs } from "../lib/inputs";
import { DayTen } from "./day-ten";

describe("day one tests", () => {
  it("should resolve the example input for part one", () => {
    const solution: string = new DayTen(new Inputs().dayTenPractice()).solvePartOne();
    expect(solution).toEqual("13140");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DayTen(new Inputs().dayTenReal()).solvePartOne();
    expect(solution).toEqual("13520");
  });

  it("should resolve the example input for part two", () => {
    const solution: string = new DayTen(new Inputs().dayTenPractice()).solvePartTwo();
    expect(solution).toEqual(
      "##..##..##..##..##..##..##..##..##..##..\n" +
        "###...###...###...###...###...###...###.\n" +
        "####....####....####....####....####....\n" +
        "#####.....#####.....#####.....#####.....\n" +
        "######......######......######......####\n" +
        "#######.......#######.......#######.....",
    );
  });

  it("should resolve the real input for part two", () => {
    const solution: string = new DayTen(new Inputs().dayTenReal()).solvePartTwo();
    expect(solution).toEqual(
      "###...##..###..#..#.###..####..##..###..\n" +
        "#..#.#..#.#..#.#..#.#..#.#....#..#.#..#.\n" +
        "#..#.#....#..#.####.###..###..#..#.###..\n" +
        "###..#.##.###..#..#.#..#.#....####.#..#.\n" +
        "#....#..#.#....#..#.#..#.#....#..#.#..#.\n" +
        "#.....###.#....#..#.###..####.#..#.###..",
    );
  });
});
