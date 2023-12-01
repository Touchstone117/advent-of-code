export class DayOne {
  private readonly inputLines: string[];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day One, puzzle input: \n" + this.puzzleInput);
    this.inputLines = this.puzzleInput.split("\n");
  }

  detectNumbers(line: string): string[] {
    let replacedLine = line;
    const numbers = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    let positions: string[][] = [];

    numbers.forEach((number, index) => {
      let start = 0;

      do {
        const position = replacedLine.slice(start).indexOf(number);

        positions[position + start] = [number, (index + 1).toString()];

        start += position + 1;
      } while (replacedLine.slice(start).indexOf(number) != -1);
    });

    positions = positions.filter((value) => {
      if (value) {
        return true;
      } else {
        return false;
      }
    });

    const first = positions[0];

    const last = positions.reverse()[0];

    let firstReplacedLine: string = replacedLine;
    let secondReplaceLine: string = replacedLine;

    if (first) {
      firstReplacedLine = replacedLine.replace(first[0], first[1]);
    }

    if (last) {
      const n = replacedLine.lastIndexOf(last[0]);

      secondReplaceLine =
        replacedLine.slice(0, n) +
        replacedLine.slice(n).replace(last[0], last[1]);
    }

    return [firstReplacedLine, secondReplaceLine];
  }

  solvePartOne(): string {
    let answer = 0;
    this.inputLines.forEach((line) => {
      const splitLine = line.split("").filter((entry) => {
        return Number.parseInt(entry);
      });
      answer +=
        Number.parseInt(splitLine[0] + splitLine[splitLine.length - 1]);
    });
    return answer.toString();
  }

  solvePartTwo(): string {
    let answer = 0;
    this.inputLines.forEach((line) => {
      const convertedLine = this.detectNumbers(line);

      const splitLineOne = convertedLine[0].split("").filter((entry) => {
        return Number.parseInt(entry);
      });

      const splitLineTwo = convertedLine[1].split("").filter((entry) => {
        return Number.parseInt(entry);
      });

      answer +=
        Number.parseInt(
          splitLineOne[0] + splitLineTwo[splitLineTwo.length - 1],
        );
    });

    return answer.toString();
  }
}
