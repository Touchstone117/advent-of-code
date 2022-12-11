import { Instruction, Rope } from "./rope";

export class DayNine {
  private rope: Rope = new Rope();
  private instructions: Instruction[] = [];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Nine, puzzle input: \n" + this.puzzleInput);
    this.parseInstructions();
    this.executeInstructions();
  }

  private parseInstructions() {
    this.instructions = this.puzzleInput.split("\n").map((instruction) => {
      const split = instruction.split(" ");
      return { direction: split[0], distance: Number.parseInt(split[1]) };
    });
  }

  private executeInstructions() {
    this.instructions.forEach((instruction) => {
      this.rope.moveHead(instruction);
    });
  }

  solvePartOne(): string {
    // console.log(this.rope.tail.visitedPositions);
    // console.log(this.rope.tail.uniqueVisited());
    console.log(this.rope.head.visitedPositions);
    console.log(this.rope.tail.visitedPositions);
    return this.rope.tail.uniqueVisited().length.toString();
  }

  solvePartTwo(): string {
    return "nope";
  }
}
