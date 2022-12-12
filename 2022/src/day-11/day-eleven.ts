import { Monkey, Test } from "./monkey";
import { multiplyAllValuesInArray } from "../lib/count-values-in-array";

export class Person {
  private worryLevel: number = 0;

  currentWorryLevel(): number {
    return this.worryLevel;
  }

  worryLevelDivideBy(number: number): this {
    this.worryLevel = this.worryLevel / number;
    return this;
  }

  worryMore(operation: string): this {
    // @ts-ignore
    let old = this.currentWorryLevel();
    eval(operation);

    return this;
  }
}

export class DayEleven {
  readonly you: Person = new Person();
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
      ifFalse: this.monkeys[(Number.parseInt(falseValue[1]))],
      ifTrue: this.monkeys[(Number.parseInt(trueValue[1]))],
    };
  }

  private executeRound(monkey: Monkey) {
    console.log(monkey.showItems())
    monkey.evaluateItems();
    console.log(monkey.showItems())
  }

  executeRounds(numberOfRounds: number): this {
    // let x;
    //
    // const monkeyCount = this.monkeys.length;
    // let toRemove: number;
    // for (let i = 0; i < numberOfRounds; i++) {
    //   x = i
    //   if (x > (monkeyCount - 1)) {
    //     toRemove = (x - (x % monkeyCount))/monkeyCount
    //     x -= (monkeyCount * toRemove)
    //   }
    //   console.log(i + " : " + x)
    //   this.executeRound(this.monkeys[x])
    // }
    for (let i = 0; i < numberOfRounds; i++) {

      this.monkeys.forEach((monkey) => {
        this.executeRound(monkey)
        this.readMonkeysWorryLevels()
      })

    }

    console.log(this.monkeys)

    return this
  }

  readMonkeys(): Monkey[] {
    return this.monkeys
  }

  readMonkeysWorryLevels(): number[][] {
    return this.monkeys.map((monkey) => monkey.showItems())
  }

  pickMostActive(number: number): Monkey[] {
    return this.monkeys.sort((a, b) => {
      return b.showInspectedItemsCount() - a.showInspectedItemsCount()
    }).slice(0, number)
  }

  countMonkeyBusiness(monkeys: Monkey[]): number {
    return multiplyAllValuesInArray(monkeys.map(monkey  => monkey.showInspectedItemsCount()))
  }

  solvePartOne(): string {
    this.executeRounds(20);
    return this.countMonkeyBusiness(this.pickMostActive(2)).toString()
  }

  solvePartTwo(): string {
    return "nope";
  }
}
