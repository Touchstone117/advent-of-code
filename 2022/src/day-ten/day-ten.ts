import { ScreenCpu } from "./screen-cpu";
import { countAllValuesInArray } from "../lib/count-values-in-array";

interface ScreenCpuInstruction {
  instruction: string;
  value: number;
}

export class DayTen {
  readonly screenCpu: ScreenCpu = new ScreenCpu();
  readonly instructions: ScreenCpuInstruction[];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Ten, puzzle input: \n" + this.puzzleInput);

    this.instructions = this.parseInstructions();
    this.executeInstructions();
  }

  private parseInstructions(): ScreenCpuInstruction[] {
    return this.puzzleInput.split("\n").map((value) => {
      const split = value.split(" ");
      return { instruction: split[0], value: Number.parseInt(split[1]) };
    });
  }

  private executeInstructions() {
    this.instructions.forEach((cmd) => {
      switch (cmd.instruction) {
        case "addx": {
          this.screenCpu.addX(cmd.value);
          break;
        }
        case "noop": {
          this.screenCpu.noop();
          break;
        }
      }
    });
  }

  addSignalStrengths(): number {
    console.log(this.screenCpu.signal());
    const strengthArray: number[] = this.screenCpu.signal().map((value) => value.strength);
    return countAllValuesInArray(strengthArray);
  }

  solvePartOne(): string {
    return this.addSignalStrengths().toString();
  }

  solvePartTwo(): string {
    return this.screenCpu.displayScreen();
  }
}
