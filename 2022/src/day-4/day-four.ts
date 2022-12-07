class AssignedSections {
  readonly rangeStart: number;
  readonly rangeEnd: number;
  constructor(rangeStart: string, rangeEnd: string) {
    this.rangeStart = Number.parseInt(rangeStart);
    this.rangeEnd = Number.parseInt(rangeEnd);
  }
}

interface ElfAssignmentPair {
  firstElf: AssignedSections;
  secondElf: AssignedSections;
}

export class DayFour {
  private readonly assignmentPairs: ElfAssignmentPair[];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Four, puzzle input: \n" + this.puzzleInput);

    this.assignmentPairs = this.splitElfPairs();
  }

  private splitElfPairs(): ElfAssignmentPair[] {
    return this.puzzleInput.split("\n").map((elf) => {
      const split = elf.split(",");

      return { firstElf: this.splitAssignmentPairs(split[0]), secondElf: this.splitAssignmentPairs(split[1]) };
    });
  }

  private splitAssignmentPairs(assignment: string): AssignedSections {
    const split = assignment.split("-");
    return new AssignedSections(split[0], split[1]);
  }

  private doRangesOverlapCompletely(pairOfRanges: ElfAssignmentPair): boolean {
    const firstStart = pairOfRanges.firstElf.rangeStart;
    const firstEnd = pairOfRanges.firstElf.rangeEnd;
    const secondStart = pairOfRanges.secondElf.rangeStart;
    const secondEnd = pairOfRanges.secondElf.rangeEnd;

    if (firstStart >= secondStart && firstEnd <= secondEnd) {
      return true;
    }

    if (secondStart >= firstStart && secondEnd <= firstEnd) {
      return true;
    }

    return false;
  }

  private doRangesOverlapPartially(pairOfRanges: ElfAssignmentPair) {
    const firstStart = pairOfRanges.firstElf.rangeStart;
    const firstEnd = pairOfRanges.firstElf.rangeEnd;
    const secondStart = pairOfRanges.secondElf.rangeStart;
    const secondEnd = pairOfRanges.secondElf.rangeEnd;

    if (firstStart >= secondStart && firstStart <= secondEnd) {
      return true;
    }

    if (secondStart >= firstStart && secondStart <= firstEnd) {
      return true;
    }

    return false;
  }

  private checkRangesCompleteOverlap() {
    let problemPairs: ElfAssignmentPair[] = [];
    this.assignmentPairs.forEach((pair) => {
      if (this.doRangesOverlapCompletely(pair)) {
        problemPairs.push(pair);
      }
    });

    return problemPairs;
  }

  private checkRangesPartialOverlap() {
    let problemPairs: ElfAssignmentPair[] = [];
    this.assignmentPairs.forEach((pair) => {
      if (this.doRangesOverlapPartially(pair)) {
        problemPairs.push(pair);
      }
    });

    return problemPairs;
  }

  solvePartOne(): string {
    return this.checkRangesCompleteOverlap().length.toString();
  }

  solvePartTwo(): string {
    return this.checkRangesPartialOverlap().length.toString();
  }
}
