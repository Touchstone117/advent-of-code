import { Monkey, Test } from "./monkey";
import { multiplyAllValuesInArray } from "../lib/count-values-in-array";

export enum WorryLevel {
  DIVIDE,
  PANICK,
}

export class DayEleven {
  private monkeys: Monkey[] = [];

  constructor(private readonly puzzleInput: string) {
    console.log("Day Eleven, puzzle input: \n" + this.puzzleInput);

    this.parser();
  }

  private parser() {
    const splitInput = this.puzzleInput.split("\n\n").map((monkey) => monkey.split("\n"));

    const testStrings: string[][] = [];

    splitInput.forEach((monkey) => {
      // const id: number = this.parseId(monkey);
      const items: number[] = this.parseItems(monkey);
      const operation: string = this.parseOperation(monkey);
      testStrings.push(monkey.slice(3));
      this.monkeys.push(new Monkey(items, operation));
    });

    this.monkeys.forEach((monkey: Monkey, index: number) => {
      monkey.setTests(this.parseTest(testStrings[index]));
    });
  }

  // private parseId(monkey: string[]): number {
  //   const idString = monkey[0].match(/Monkey (\d+)\:/);
  //   if (!idString) {
  //     throw "no monkey";
  //   }
  //   return Number.parseInt(idString[1]);
  // }

  private parseItems(monkey: string[]): number[] {
    const itemsString = monkey[1]
      .split("items: ")[1]
      .split(", ")
      .map((value) => Number.parseInt(value));

    return itemsString;
  }

  private parseOperation(monkey: string[]): string {
    const operation = monkey[2].split("new = ")[1];

    return operation;
  }

  private parseTest(test: string[]): Test {
    const testNumber = test[0].match(/by (\d+)/);
    if (!testNumber) {
      throw "no test";
    }

    const falseValue = test[2].match(/monkey (\d+)/);
    if (!falseValue) {
      throw "no false value";
    }

    const trueValue = test[1].match(/monkey (\d+)/);
    if (!trueValue) {
      throw "no true value";
    }

    return {
      divisibleValue: Number.parseInt(testNumber[1]),
      ifFalse: this.monkeys[Number.parseInt(falseValue[1])],
      ifTrue: this.monkeys[Number.parseInt(trueValue[1])],
    };
  }

  executeRounds(numberOfRounds: number, worryLevel: WorryLevel): this {
    for (let i = 0; i < numberOfRounds; i++) {
      this.monkeys.forEach((monkey) => {
        monkey.evaluateItems(worryLevel);
        this.readMonkeysWorryLevels();
      });
    }

    return this;
  }

  readMonkeys(): Monkey[] {
    return this.monkeys;
  }

  readMonkeysWorryLevels(): number[][] {
    return this.monkeys.map((monkey) => monkey.showItems());
  }

  pickMostActive(number: number): Monkey[] {
    this.monkeys.forEach((monkey) => {
      console.log(monkey.showInspectedItemsCount());
    });

    return this.monkeys
      .sort((a, b) => {
        return b.showInspectedItemsCount() - a.showInspectedItemsCount();
      })
      .slice(0, number);
  }

  countMonkeyBusiness(monkeys: Monkey[]): number {
    return multiplyAllValuesInArray(monkeys.map((monkey) => monkey.showInspectedItemsCount()));
  }



  lowestCommonFactor(arr: number[]): number {
    let potentials: number[] = [];

    for (let i = 1; i <= 10000; i++) {
      arr.forEach((value) => {
        potentials.push(value * i);
      });
    }

    const winner = potentials
      .sort((a, b) => a - b)
      .filter((value: number, index: number, array: number[]) => {
        // console.log(`${ value } == ${array[index-1]}`)
        if (value == array[index - 1] && value == array[index - 2]) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => a - b);

    if (!winner[0]) {
      throw "couldn't find a lcf"
    }

    // console.log(winner)
    return winner[0];
  }

  monkeysLowestTestFactor(): number {
    const monkeyTestNumbers: number[] = this.monkeys.map(monkey => monkey.getTest().divisibleValue)
    console.log(monkeyTestNumbers)
    return this.lowestCommonFactor(monkeyTestNumbers)
  }

  solvePartOne(): string {
    this.executeRounds(20, WorryLevel.DIVIDE);
    return this.countMonkeyBusiness(this.pickMostActive(2)).toString();
  }

  solvePartTwo(): string {
    this.executeRounds(10000, WorryLevel.PANICK);
    return this.countMonkeyBusiness(this.pickMostActive(2)).toString();
  }
}
