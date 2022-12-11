import fs from "fs";
import * as path from "path";

export class Inputs {
  load(filePath: string): string {
    const resolvedPath = path.join(__dirname, filePath);

    if (!fs.existsSync(resolvedPath)) {
      throw new Error("Directory Doesn't Exist");
    }

    return fs.readFileSync(resolvedPath).toString();
  }

  dayOnePractice(): string {
    return this.load("inputs/1-practice.txt");
  }

  dayOneReal() {
    return this.load("inputs/1-real.txt");
  }

  dayTwoPractice(): string {
    return this.load("inputs/2-practice.txt");
  }

  dayTwoReal() {
    return this.load("inputs/2-real.txt");
  }

  dayThreePractice() {
    return this.load("inputs/3-practice.txt");
  }

  dayThreePrReal() {
    return this.load("inputs/3-real.txt");
  }

  dayFourPractice() {
    return this.load("inputs/4-practice.txt");
  }

  dayFourReal() {
    return this.load("inputs/4-real.txt");
  }

  dayFivePractice() {
    return this.load("inputs/5-practice.txt");
  }

  dayFiveReal() {
    return this.load("inputs/5-real.txt");
  }

  daySixReal() {
    return this.load("inputs/6-real.txt");
  }

  daySevenPractice() {
    return this.load("inputs/7-practice.txt");
  }

  daySevenReal() {
    return this.load("inputs/7-real.txt");
  }

  dayEightPractice() {
    return this.load("inputs/8-practice.txt");
  }

  dayEightReal() {
    return this.load("inputs/8-real.txt");
  }

  dayNinePractice() {
    return this.load("inputs/9-practice.txt");
  }

  dayNineReal() {
    return this.load("inputs/9-real.txt");
  }

  dayTenPractice() {
    return this.load("inputs/10-practice.txt");
  }

  dayTenReal() {
    return this.load("inputs/10-real.txt");
  }
}
