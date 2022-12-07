import { DaySix } from "./day-six";
import { Inputs } from "../lib/inputs";

describe("day six tests", () => {
  it("should resolve the example input for part one - 1", () => {
    const solution: string = new DaySix("mjqjpqmgbljsphdztnvjfqwrcgsmlb").solvePartOne();
    expect(solution).toEqual("7");
  });

  it("should resolve the example input for part one - 2", () => {
    const solution: string = new DaySix("bvwbjplbgvbhsrlpgdmjqwftvncz").solvePartOne();
    expect(solution).toEqual("5");
  });

  it("should resolve the example input for part one - 3", () => {
    const solution: string = new DaySix("nppdvjthqldpwncqszvftbrmjlhg").solvePartOne();
    expect(solution).toEqual("6");
  });

  it("should resolve the example input for part one - 4", () => {
    const solution: string = new DaySix("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg").solvePartOne();
    expect(solution).toEqual("10");
  });

  it("should resolve the example input for part one", () => {
    const solution: string = new DaySix("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw").solvePartOne();
    expect(solution).toEqual("11");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DaySix(new Inputs().daySixReal()).solvePartOne();
    expect(solution).toEqual("1566");
  });

  it("should resolve the example input for part one - 1", () => {
    const solution: string = new DaySix("mjqjpqmgbljsphdztnvjfqwrcgsmlb").solvePartTwo();
    expect(solution).toEqual("19");
  });

  it("should resolve the example input for part one - 2", () => {
    const solution: string = new DaySix("bvwbjplbgvbhsrlpgdmjqwftvncz").solvePartTwo();
    expect(solution).toEqual("23");
  });

  it("should resolve the example input for part one - 3", () => {
    const solution: string = new DaySix("nppdvjthqldpwncqszvftbrmjlhg").solvePartTwo();
    expect(solution).toEqual("23");
  });

  it("should resolve the example input for part one - 4", () => {
    const solution: string = new DaySix("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg").solvePartTwo();
    expect(solution).toEqual("29");
  });

  it("should resolve the example input for part one", () => {
    const solution: string = new DaySix("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw").solvePartTwo();
    expect(solution).toEqual("26");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DaySix(new Inputs().daySixReal()).solvePartTwo();
    expect(solution).toEqual("2265");
  });
});
