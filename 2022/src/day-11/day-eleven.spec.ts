import { Inputs } from "../lib/inputs";
import { DayEleven, WorryLevel } from "./day-eleven";

describe("day eleven tests", () => {
  it("after one round", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice())
      .executeRounds(1, WorryLevel.DIVIDE)
      .readMonkeysWorryLevels();
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

  it("should calculate lowest common factor", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice());
    const lcf = monkeys.lowestCommonFactor([20, 30, 60]);
    expect(lcf).toEqual(60);
  });

  it("should calculate lowest common factor 2", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice());
    const lcf = monkeys.lowestCommonFactor([36, 30, 60, 360]);
    expect(lcf).toEqual(360);
  });

  it("should calculate lowest common factor for monkeys", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice());
    const lcf = monkeys.monkeysLowestTestFactor();
    expect(lcf).toEqual(180);
  });

  it("part 2 after 1 rounds", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice()).executeRounds(1, WorryLevel.PANICK);
    const answer = monkeys.countMonkeyBusiness(monkeys.pickMostActive(2));
    expect(answer).toEqual(24);
  });

  it("part 2 after 20 rounds", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice()).executeRounds(20, WorryLevel.PANICK);
    const answer = monkeys.countMonkeyBusiness(monkeys.pickMostActive(2));
    expect(answer).toEqual(10197);
  });

  it("part 2 after 1000 rounds", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice()).executeRounds(1000, WorryLevel.PANICK);
    const answer = monkeys.countMonkeyBusiness(monkeys.pickMostActive(2));
    expect(answer).toEqual(27019168);
  });

  it("part 2 after 3000 rounds", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice()).executeRounds(3000, WorryLevel.PANICK);
    const answer = monkeys.countMonkeyBusiness(monkeys.pickMostActive(2));
    expect(answer).toEqual(243843334);
  });

  it("part 2 after 5000 rounds", () => {
    const monkeys = new DayEleven(new Inputs().dayElevenPractice()).executeRounds(5000, WorryLevel.PANICK);
    const answer = monkeys.countMonkeyBusiness(monkeys.pickMostActive(2));
    expect(answer).toEqual(677950000);
  });

  it("should resolve the example input for part two", () => {
    const solution: string = new DayEleven(new Inputs().dayElevenPractice()).solvePartTwo();
    expect(solution).toEqual("2713310158");
  });

  // it("should resolve the real input for part two", () => {
  //   const solution: string = new DayEleven(new Inputs().dayElevenReal()).solvePartTwo();
  //   expect(solution).toEqual("198041");
  // });
});
