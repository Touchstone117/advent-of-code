import { ScreenCrt } from "./screen-crt";

interface SignalStrength {
  interval: number;
  strength: number;
}

export class ScreenCpu {
  private cycleCount: number = 0;
  private register: number = 1;
  private signalStrength: SignalStrength[] = [];
  private screen: ScreenCrt = new ScreenCrt();

  addX(value: number) {
    this.increaseCycleCount();
    this.increaseCycleCount();
    this.register += value;
  }

  noop() {
    this.increaseCycleCount();
  }

  private increaseCycleCount() {
    this.cycleCount += 1;
    this.screen.increaseCycleCount(this);
    this.updateSignalStrength();
  }

  private updateSignalStrength() {
    if ((this.cycleCount - 20) % 40 == 0 || this.cycleCount == 20) {
      const strength = this.register * this.cycleCount;
      this.signalStrength.push({
        interval: this.cycleCount,
        strength: strength,
      });
    }
  }

  currentCpuCycle(): number {
    return this.cycleCount;
  }

  currentSpritePosition(): number {
    return this.register;
  }

  displayScreen(): string {
    return this.screen.viewScreen();
  }

  signal(): SignalStrength[] {
    return this.signalStrength;
  }
}
