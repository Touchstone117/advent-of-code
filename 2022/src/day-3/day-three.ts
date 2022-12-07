import { countAllValuesInArray } from "../lib/count-values-in-array";
import { Rucksack } from "./rucksack";

export class DayThree {
  private readonly parsedContents: Rucksack[];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Three, puzzle input: \n" + this.puzzleInput);

    this.parsedContents = this.splitInput();
  }

  splitInput(): Rucksack[] {
    return this.puzzleInput.split("\n").map((rucksackContents) => {
      return new Rucksack(rucksackContents);
    });
  }

  arrayToPriorityValues(inputArray: string[]): number[] {
    return inputArray.map((value) => {
      if (value == value.toUpperCase()) {
        return value.charCodeAt(0) - 38;
      }
      return value.charCodeAt(0) - 96;
    });
  }

  processRucksackPartOne(): number {
    return countAllValuesInArray(
      this.arrayToPriorityValues(
        this.parsedContents.flatMap((rucksack) => {
          return rucksack.duplicateItemsArray;
        }),
      ),
    );
  }

  splitIntoTeam() {
    let index = 0;
    let endIndex = 3;
    let teams: Rucksack[][] = [];

    while (endIndex <= this.parsedContents.length) {
      teams.push(this.parsedContents.slice(index, endIndex));
      index += 3;
      endIndex += 3;
    }
    return teams;
  }

  findTeamBadge(team: Rucksack[]): string {
    let badge = "";
    team[0].wholeBagArray().some((value) => {
      if (team[1].wholeBagArray().indexOf(value) != -1 && team[2].wholeBagArray().indexOf(value) != -1) {
        badge = value;
        return true;
      }
      return false;
    });
    return badge;
  }

  processRucksackPartTwo(): number {
    return countAllValuesInArray(
      this.arrayToPriorityValues(
        this.splitIntoTeam().map((team) => {
          return this.findTeamBadge(team);
        }),
      ),
    );
  }

  solvePartOne(): string {
    return this.processRucksackPartOne().toString();
  }

  solvePartTwo(): string {
    return this.processRucksackPartTwo().toString();
  }
}
