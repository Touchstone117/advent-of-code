import { countAllValuesInArray } from "../lib/count-values-in-array";

export class DayOne {
  private perElf: string[][];
  private perElfTotals: number[];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day One, puzzle input: \n" + this.puzzleInput);

    this.perElf = this.splitElves();
    this.perElfTotals = this.countCalories();
  }

  private splitElves() {
    return this.puzzleInput.split("\n\n").map((elf) => elf.split("\n"));
  }

  private countCalories() {
    return this.perElf.map((elf) => {
      return countAllValuesInArray(elf);
    });
  }

  private topCalories(numberToCount: number): number {
    const sorted = this.perElfTotals
      .sort((a, b) => {
        return b - a;
      })
      .slice(0, numberToCount);

    return countAllValuesInArray(sorted);
  }

  solvePartOne(): string {
    return this.topCalories(1).toString();
  }

  solvePartTwo(): string {
    return this.topCalories(3).toString();
  }
}
