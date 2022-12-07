import { CraneType, CrateStack } from "./crate-stack";

export class DayFive {
  private crates: CrateStack;
  private readonly instructions;

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Four, puzzle input: \n" + this.puzzleInput);
    const split = this.split();

    this.crates = new CrateStack(split.boxStack);

    this.instructions = split.instructions;
  }

  private split() {
    const initialSplit = this.puzzleInput.split("\n\n");

    return { boxStack: initialSplit[0], instructions: initialSplit[1] };
  }

  private parseInstructions(instructions: string, crane: CraneType): this {
    instructions
      .split("\n")
      .map((instruction) => {
        return instruction.match(/(\d+)/g)!.map((value) => Number.parseInt(value));
      })
      .forEach((instruction) => {
        this.crates.move(instruction[0], instruction[1], instruction[2], crane);
      });
    return this;
  }

  private joinStacks(): string {
    return Object.values(this.crates.topOfStack()).join("");
  }

  solvePartOne(): string {
    this.parseInstructions(this.instructions, CraneType.CRANE_9000);
    return this.joinStacks();
  }

  solvePartTwo(): string {
    this.parseInstructions(this.instructions, CraneType.CRANE_9001);
    return this.joinStacks();
  }
}
