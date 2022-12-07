export enum RoundResults {
  WIN,
  LOSE,
  DRAW,
}

export class RockPaperScissors {
  constructor(readonly pointsValue: number, readonly throwType: any, readonly beats: any, readonly loses: any) {}

  result(challengerType: RockPaperScissors): RoundResults {
    if (this.throwType == challengerType.throwType) {
      return RoundResults.DRAW;
    }
    if (this.beats == challengerType.throwType) {
      return RoundResults.WIN;
    }
    return RoundResults.LOSE;
  }

  draw() {
    return new this.throwType();
  }

  win() {
    return new this.beats();
  }

  lose() {
    return new this.loses();
  }
}

export class Rock extends RockPaperScissors {
  constructor() {
    super(1, Rock, Scissors, Paper);
  }
}

export class Paper extends RockPaperScissors {
  constructor() {
    super(2, Paper, Rock, Scissors);
  }
}

export class Scissors extends RockPaperScissors {
  constructor() {
    super(3, Scissors, Paper, Rock);
  }
}
