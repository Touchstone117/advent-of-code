export class DaySix {
  readonly partOneOutput;
  readonly partTwoOutput;

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Six, puzzle input: \n" + this.puzzleInput);

    this.partOneOutput = this.processInputs(this.puzzleInput, 4);
    this.partTwoOutput = this.processInputs(this.puzzleInput, 14);
  }

  private processInputs(input: string, size: number): number {
    for (let i = size; i < input.length; i++) {
      if (this.identifyDuplicateLetters(input.slice(i - size, i))) {
        return i;
      }
    }
    return -1;
  }

  private identifyDuplicateLetters(input: string): boolean {
    return input
      .split("")
      .sort()
      .every((value: string, index: number, array: string[]) => {
        if (value == array[index - 1]) {
          return false;
        }
        return true;
      });
  }

  solvePartOne(): string {
    return this.partOneOutput.toString();
  }

  solvePartTwo(): string {
    return this.partTwoOutput.toString();
  }
}
