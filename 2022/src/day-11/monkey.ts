import { WorryLevel } from "./day-eleven";

export interface Test {
  divisibleValue: number;
  ifTrue: Monkey;
  ifFalse: Monkey;
}

export class Monkey {
  private items: number[];
  private test: Test | undefined = undefined;
  private operation: string;
  private inspectedItems: number = 0;

  constructor(items: number[], operation: string) {
    this.items = items;
    this.operation = operation;
  }

  setTests(test: Test): this {
    this.test = test;
    return this;
  }

  getTest(): Test {
    if (!this.test) {
      throw "no test";
    }
    return this.test;
  }

  evaluateItems(worryLevel: WorryLevel) {
    if (this.items.length == 0) {
      return;
    }

    this.items.forEach((item) => {
      const old = item;

      if (!old) {
        throw "item undefined";
      }

      this.inspectedItems += 1;

      let newValue = eval(this.operation);

      if (worryLevel == WorryLevel.DIVIDE) {
        newValue /= 3;
      }

      newValue = Math.floor(newValue);

      if (this.performTest(newValue)) {
        this.throwItem(this.getTest().ifTrue, newValue);
      } else {
        this.throwItem(this.getTest().ifFalse, newValue);
      }
    });

    this.items = [];
  }

  showInspectedItemsCount(): number {
    return this.inspectedItems;
  }
  //
  // showValues(): this {
  //   console.log(this.items, this.test, this.operation);
  //   return this;
  // }

  showItems(): number[] {
    return this.items;
  }

  private performTest(worryLevel: number): boolean {
    return worryLevel % this.getTest().divisibleValue == 0;
  }

  private throwItem(receiver: Monkey, item: number) {
    receiver.giveItem(item);
    return this;
  }

  giveItem(item: number) {
    this.items.push(item);
  }
}
