import { Inputs } from "../lib/inputs";
import { DayEleven } from "./day-eleven";

describe("day eleven tests", () => {
  it("after one round", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice()).executeRounds(1).readMonkeysWorryLevels();
    expect(monkeys).toEqual([[20, 23, 27, 26], [2080, 25, 167, 207, 401, 1046], [], []]);
  });

  it("should resolve the example input for part one", () => {
    const solution: string = new DayEleven(new Inputs().dayElevenPractice()).solvePartOne();
    expect(solution).toEqual("10605");
  });

  it("should resolve the real input for part one", () => {
    const solution: string = new DayEleven(new Inputs().dayElevenReal()).solvePartOne();
    expect(solution).toEqual("55944");
  });

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
