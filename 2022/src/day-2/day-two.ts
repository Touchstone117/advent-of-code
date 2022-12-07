import { Paper, Rock, RoundResults, Scissors, RockPaperScissors } from "./rock-paper-scissors";
import { countAllValuesInArray } from "../lib/count-values-in-array";

interface ParsedRound {
  you: RockPaperScissors;
  them: RockPaperScissors;
  desiredOutcome: RoundResults;
}

export class DayTwo {
  private splitRounds: ParsedRound[];

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Two, puzzle input: \n" + this.puzzleInput);

    this.splitRounds = this.split();
  }

  private split(): ParsedRound[] {
    return this.puzzleInput
      .split("\n")
      .map((round) => round.split(" "))
      .map((value) => {
        return {
          them: this.mapResult(value[0]),
          you: this.mapResult(value[1]),
          desiredOutcome: this.mapDesiredOutcome(value[1]),
        };
      });
  }

  private mapResult(value: string): RockPaperScissors {
    switch (value) {
      case "A":
      case "X": {
        return new Rock();
      }
      case "B":
      case "Y": {
        return new Paper();
      }
      case "C":
      case "Z": {
        return new Scissors();
      }
    }
    throw "invalid result";
  }

  private mapDesiredOutcome(value: string): RoundResults {
    switch (value) {
      case "X": {
        return RoundResults.LOSE;
      }
      case "Y": {
        return RoundResults.DRAW;
      }
      case "Z": {
        return RoundResults.WIN;
      }
    }
    throw "invalid result";
  }

  private resolveRockPaperScissorsRound(round: ParsedRound): RoundResults {
    return round.you.result(round.them);
  }

  private resultModifier(result: RoundResults) {
    switch (result) {
      case RoundResults.LOSE:
        return 0;
        break;
      case RoundResults.WIN:
        return 6;
        break;
      case RoundResults.DRAW:
        return 3;
        break;
    }
    return result;
  }

  private yourThrow(theirThrow: RockPaperScissors, desiredOutcome: RoundResults): RockPaperScissors {
    switch (desiredOutcome) {
      case RoundResults.WIN:
        return theirThrow.lose();
        break;
      case RoundResults.LOSE:
        return theirThrow.win();
        break;
      case RoundResults.DRAW:
        return theirThrow.draw();
        break;
    }
    throw `Could not decide what to throw for ${desiredOutcome}`;
  }

  private processRoundsPartOne() {
    return this.splitRounds.map((round) => {
      let result = 0;
      result += round.you.pointsValue;
      result += this.resultModifier(this.resolveRockPaperScissorsRound(round));
      return result;
    });
  }

  private processRoundsPartTwo() {
    return this.splitRounds.map((round) => {
      let result = 0;

      result += this.yourThrow(round.them, round.desiredOutcome).pointsValue;
      result += this.resultModifier(round.desiredOutcome);

      return result;
    });
  }

  solvePartOne(): string {
    return countAllValuesInArray(this.processRoundsPartOne()).toString();
  }

  solvePartTwo(): string {
    return countAllValuesInArray(this.processRoundsPartTwo()).toString();
  }
}
