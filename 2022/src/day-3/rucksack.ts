export class Rucksack {
  readonly firstCompartment: string;
  readonly secondCompartment: string;
  readonly duplicateItemsArray: string[];

  constructor(private readonly rucksackContents: string) {
    const midpoint = this.rucksackContents.length / 2;

    this.firstCompartment = this.rucksackContents.slice(0, midpoint);
    this.secondCompartment = this.rucksackContents.slice(midpoint, this.rucksackContents.length);

    this.duplicateItemsArray = this.findDuplicateItems();
  }

  firstCompartmentArray(): string[] {
    return this.firstCompartment.split("");
  }

  secondCompartmentArray(): string[] {
    return this.secondCompartment.split("");
  }

  wholeBagArray(): string[] {
    return this.rucksackContents.split("");
  }

  findDuplicateItems(): string[] {
    return this.secondCompartmentArray()
      .filter((value) => {
        if (this.firstCompartmentArray().indexOf(value) != -1) {
          return true;
        }
        return false;
      })
      .sort()
      .filter((value, index, array) => {
        if (array.indexOf(value) == index) {
          return true;
        }
        return false;
      });
  }
}
