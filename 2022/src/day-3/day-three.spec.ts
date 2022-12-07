import { Inputs } from "../lib/inputs";
import { DayThree } from "./day-three";

describe("day three tests", () => {
  it("should resolve part one test input", () => {
    const solution = new DayThree(new Inputs().dayThreePractice()).solvePartOne();
    expect(solution).toEqual("157");
  });

  it("should resolve part one real input", () => {
    const solution = new DayThree(new Inputs().dayThreePrReal()).solvePartOne();
    expect(solution).toEqual("8298");
  });

  it("should resolve part two test input", () => {
    const solution = new DayThree(new Inputs().dayThreePractice()).solvePartTwo();
    expect(solution).toEqual("70");
  });

  it("should resolve part two real input", () => {
    const solution = new DayThree(new Inputs().dayThreePrReal()).solvePartTwo();
    expect(solution).toEqual("2708");
  });
});
