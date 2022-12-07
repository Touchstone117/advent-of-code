import { DaySeven } from "./day-seven";
import { Inputs } from "../lib/inputs";

describe("day seven tests", () => {
  it("should resolve the example input for part one folder a", () => {
    const solution: string = new DaySeven(new Inputs().daySevenPractice()).directoryASize();
    expect(solution).toEqual("94853");
  });

  it("should resolve the example input for part one", () => {
    const solution: string = new DaySeven(new Inputs().daySevenPractice()).solvePartOne();
    expect(solution).toEqual("95437");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DaySeven(new Inputs().daySevenReal()).solvePartOne();
    expect(solution).toEqual("1477771");
  });

  it("should resolve the example input for part two", () => {
    const solution: string = new DaySeven(new Inputs().daySevenPractice()).solvePartTwo();
    expect(solution).toEqual("24933642");
  });

  it("should resolve the real input for part two", () => {
    const solution: string = new DaySeven(new Inputs().daySevenReal()).solvePartTwo();
    expect(solution).toEqual("3579501");
  });
});
