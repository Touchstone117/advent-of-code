interface Visibility {
  visible: boolean;
  scenicScore: number;
}

export class DayEight {
  private readonly treeMap: number[][];
  private readonly transposedTreeMap: number[][];
  readonly visibleTrees: number[] = [];
  bestScenicScore: number = 0;

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Eight, puzzle input: \n" + this.puzzleInput);

    this.treeMap = this.puzzleInput.split("\n").map((row) => {
      return row.split("").map((value) => Number.parseInt(value));
    });

    this.transposedTreeMap = this.treeMap[0].map((_row, index) => {
      return this.treeMap.map((value) => {
        return value[index];
      });
    });

    this.iterate();
  }

  private visibleLeft(row: number[], testIndex: number): Visibility {
    // looking right
    if (row.length < testIndex + 1 || testIndex < 0) {
      throw "bad index";
    }

    row = row.slice(testIndex);
    const testTree = row[0];
    row = row.slice(1);

    let visibleDistance = 0;

    const isVisible = row.every((tree, index) => {
      visibleDistance = index + 1;
      return testTree > tree;
    });

    return { visible: isVisible, scenicScore: visibleDistance };
  }

  private visibleRight(row: number[], testIndex: number): Visibility {
    // looking left
    if (row.length < testIndex + 1 || testIndex < 0) {
      throw "bad index";
    }

    const testTree = row[testIndex];

    let visibleDistance = 0;

    const isVisible = row
      .slice(0, testIndex)
      .reverse()
      .every((tree, index) => {
        visibleDistance = index + 1;
        return testTree > tree;
      });

    return { visible: isVisible, scenicScore: visibleDistance };
  }

  isEdge(rowIndex: number, colIndex: number): boolean {
    if (rowIndex == 0 || colIndex == 0 || rowIndex == this.treeMap.length - 1 || colIndex == this.treeMap.length - 1) {
      return true;
    }
    return false;
  }

  private iterate() {
    this.treeMap.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        const isEdge = this.isEdge(rowIndex, colIndex);
        const visibleLeft = this.visibleLeft(row, colIndex);
        const visibleDown = this.visibleLeft(this.transposedTreeMap[colIndex], rowIndex);
        const visibleRight = this.visibleRight(row, colIndex);
        const visibleUp = this.visibleRight(this.transposedTreeMap[colIndex], rowIndex);

        if (isEdge || visibleLeft.visible || visibleDown.visible || visibleRight.visible || visibleUp.visible) {
          this.visibleTrees.push(value);
          if (!isEdge) {
            const score =
              visibleLeft.scenicScore * visibleRight.scenicScore * visibleUp.scenicScore * visibleDown.scenicScore;
            if (score > this.bestScenicScore) {
              this.bestScenicScore = score;
            }
          }
        }
      });
    });
  }

  solvePartOne(): string {
    return this.visibleTrees.length.toString();
  }

  solvePartTwo(): string {
    return this.bestScenicScore.toString();
  }
}
