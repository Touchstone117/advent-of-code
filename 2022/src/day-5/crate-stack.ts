export enum CraneType {
  CRANE_9000,
  CRANE_9001,
}

interface StackOfCrates {
  [key: string]: string[];
}

export class CrateStack {
  private readonly inputArray: string[];
  private readonly crateStacks: StackOfCrates;
  // crateStacks: any;
  private stackCount: number = 0;

  constructor(crateString: string) {
    this.inputArray = crateString.split("\n").reverse();

    this.crateStacks = this.stacks();

    this.prepCreatesPartOne();
  }

  private stacks(): StackOfCrates {
    const boxArray = this.inputArray
      .shift()!
      .split("")
      .filter((value) => (value == " " ? false : true));

    const stack = boxArray.reduce((map: any, name: string) => {
      return (map[name] = []), map;
    }, {});

    this.stackCount = Object.keys(stack).length;

    return stack;
  }

  private prepCreatesPartOne() {
    this.inputArray
      .map((layer) => {
        let layerOut = layer.replaceAll("    ", " ").replaceAll("[", "").replaceAll("]", "").split(" ");

        if (layerOut.length < this.stackCount) {
          layerOut = layerOut.concat(Array(this.stackCount - layerOut.length).fill(""));
        }

        return layerOut;
      })
      .forEach((value) => {
        value.forEach((value, index) => {
          this.crateStacks[index + 1].push(value);
        });
      });

    Object.keys(this.crateStacks).forEach((key) => {
      this.crateStacks[Number.parseInt(key)] = this.trimEmptyTops(this.crateStacks[Number.parseInt(key)]);
    });
  }

  private trimEmptyTops(stack: string[]): string[] {
    const value = stack.pop();

    if (value) {
      stack.push(value);
      return stack;
    }

    return this.trimEmptyTops(stack);
  }

  private moveOne9000(from: number, to: number) {
    const toMove = this.crateStacks[from].pop();

    if (!toMove) {
      throw "nothing to move";
    }

    this.crateStacks[to].push(toMove);
  }

  private moveOne9001(numberOfBoxes: number, from: number, to: number) {
    const startPosition = this.crateStacks[from].length - numberOfBoxes;
    const toMove = this.crateStacks[from].splice(startPosition, numberOfBoxes);

    if (!toMove) {
      throw "nothing to move";
    }

    this.crateStacks[to] = this.crateStacks[to].concat(toMove);
  }

  move(numberOfTimes: number, from: number, to: number, craneType: CraneType = CraneType.CRANE_9000) {
    switch (craneType) {
      case CraneType.CRANE_9000:
        for (let times = 0; times < numberOfTimes; times++) {
          this.moveOne9000(from, to);
        }
        break;
      case CraneType.CRANE_9001:
        this.moveOne9001(numberOfTimes, from, to);
    }
  }

  topOfStack() {
    let output: any = {};
    Object.keys(this.crateStacks).forEach((key) => {
      output[Number.parseInt(key)] =
        this.crateStacks[Number.parseInt(key)][this.crateStacks[Number.parseInt(key)].length - 1];
    });
    return output;
  }
}
