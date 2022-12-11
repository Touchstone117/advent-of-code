// interface Display {
//
// }

import { ScreenCpu } from "./screen-cpu";

export class ScreenCrt {
  private readonly display: string[];
  private crtCycle: number = 0;
  private readonly rowLength: number = 40;
  private readonly screenSize: number = this.rowLength * 6;

  constructor() {
    this.display = [];
  }

  increaseCycleCount(cpu: ScreenCpu) {
    this.crtCycle += 1;
    console.log("Start Cycle: " + cpu.currentCpuCycle());
    this.drawPixel(cpu.currentSpritePosition(), cpu.currentCpuCycle());
  }

  private spritePosition(registerX: number): number[] {
    return [registerX - 1, registerX, registerX + 1];
  }

  private nextLine() {
    if (this.crtCycle == 40) {
      this.crtCycle = 0;
    }
  }

  private drawPixel(registerX: number, _clockCycle: number) {
    console.log(this.crtCycle);
    // this.nextLine()
    const pixelPosition = this.crtCycle - 1;
    console.log("working on pixel; " + pixelPosition);
    if (this.crtCycle == 40) {
      console.log(
        "crtcyle:" + this.crtCycle + " sprite: " + this.spritePosition(registerX) + " pixel: " + pixelPosition,
      );
      if (this.spritePosition(registerX).indexOf(pixelPosition) != -1) {
        console.log("#");
      } else {
        console.log(".");
      }
    }

    if (this.spritePosition(registerX).indexOf(pixelPosition) != -1) {
      this.display.push("#");
    } else {
      this.display.push(".");
    }
    this.nextLine();
    // this.display[spritePosition-1]
    // this.display[spritePosition]
    // this.display[spritePosition+1]
  }

  viewScreen(): string {
    const finalDisplay = this.display.slice(this.display.length - this.screenSize);

    let output: string[] = [];
    for (let i = 0; i < finalDisplay.length; i += this.rowLength) {
      output.push(finalDisplay.slice(i, this.rowLength + i).join(""));
    }

    return output.join("\n");
  }
}
