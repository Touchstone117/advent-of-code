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
    if(!this.test){
      throw "no test"
    }
    return this.test
  }

  //Monkey 0:
  //   Monkey inspects an item with a worry level of 79.
  //     Worry level is multiplied by 19 to 1501.
  //     Monkey gets bored with item. Worry level is divided by 3 to 500.
  //     Current worry level is not divisible by 23.
  //     Item with worry level 500 is thrown to monkey 3.

  evaluateItems() {
    if (this.items.length == 0) {
      return;
    }

    this.items.forEach((item) => {
      const old = item

      console.log(`now processing ${old} + ${item}`)

      if (!old) {
        throw "item undefined"
      }

      this.inspectedItems += 1;
      // person.worryMore(this.operation)


      let newValue = eval(this.operation)

      console.log(`${this.operation} old: ${old} answer: ${newValue}`)
      // person.worryLevelDivideBy(3)

      newValue /= 3

      newValue = Math.floor(newValue)

      // console.log("after division: " + newValue)

      // this.performTest(person.currentWorryLevel()) ?
      if (this.performTest(newValue)) {
        this.throwItem(this.getTest().ifTrue, newValue)
      }
      else {
        this.throwItem(this.getTest().ifFalse, newValue)
      }

      // console.log(`now its ${this.showItems()}`)
    });

    this.items = []
  }

  showInspectedItemsCount(): number {
    return this.inspectedItems;
  }

  showValues(): this {
    console.log(this.items, this.test, this.operation);
    return this;
  }

  showItems(): number[] {
    return this.items
  }

  private performTest(worryLevel: number): boolean {
    console.log(worryLevel + " :" + this.getTest().divisibleValue )
   return (worryLevel % this.getTest().divisibleValue == 0)
  }

  private throwItem(receiver: Monkey, item: number) {
    // const item = this.items.splice(itemIndex, 1)
    receiver.giveItem(item)
    return this
  }

  giveItem(item: number) {
    this.items.push(item)
  }
}
