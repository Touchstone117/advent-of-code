import fs from 'fs';
import * as path from 'path';

export class Inputs {
  load(filePath: string): string {
    const resolvedPath = path.join(__dirname, filePath);

    if (!fs.existsSync(resolvedPath)) {
      throw new Error("Directory Doesn't Exist");
    }

    return fs.readFileSync(resolvedPath).toString();
  }

  dayOnePractice(): string {
    return this.load('inputs/1-practice.txt');
  }
}
