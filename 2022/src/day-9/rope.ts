export interface Instruction {
  direction: string;
  distance: number;
}

interface Position {
  x: number;
  y: number;
}

export class Rope {
  head: Head = new Head(this);
  tail: Tail = new Tail(this);

  moveHead(input: Instruction) {
    this.head.moveHead(input);
  }
}

abstract class RopePiece {
  currentPosition: Position = { x: 0, y: 0 };
  visitedPositions: Position[] = [];
  private readonly rope: Rope;

  constructor(rope: Rope) {
    this.rope = rope;
  }

  moveHead(input: Instruction) {
    for (let i = 0; i < input.distance; i += 1) {
      switch (input.direction) {
        case "R": {
          this.stepRight();
          this.followHead();
          break;
        }
        case "L": {
          this.stepLeft();
          this.followHead();
          break;
        }
        case "U": {
          this.stepUp();
          this.followHead();
          break;
        }
        case "D": {
          this.stepDown();
          this.followHead();
          break;
        }
      }
      this.visitedPositions.push(Object.assign({}, this.currentPosition));
    }
  }

  moveTail(input: Instruction) {
    for (let i = 0; i < input.distance; i += 1) {
      switch (input.direction) {
        case "R": {
          this.stepRight();
          break;
        }
        case "L": {
          this.stepLeft();
          break;
        }
        case "U": {
          this.stepUp();
          break;
        }
        case "D": {
          this.stepDown();
          break;
        }
      }
      this.visitedPositions.push(Object.assign({}, this.currentPosition));
    }
  }

  private stepLeft(): this {
    this.currentPosition.x -= 1;
    return this
  }

  private stepRight(): this {
    this.currentPosition.x += 1;
    return this
  }

  private stepUp(): this {
    this.currentPosition.y += 1;
    return this
  }

  private stepDown(): this {
    this.currentPosition.y -= 1;
    return this
  }

  currentPositionJSON(): string {
    return JSON.stringify(this.currentPosition);
  }

  uniqueVisited(): Position[] {
    return this.visitedPositions
      .map((value) => JSON.stringify(value))
      .filter((value, index, array) => {
        return array.indexOf(value, index + 1) == -1;
      })
      .map((value) => JSON.parse(value));
  }

  followHead() {
    const separation = this.distanceBetween();
    if (!this.closeEnough(separation)) {
      if (this.horizontalOnly(separation)) {
        this.moveHorizontal(separation);
        console.log("move horizontal " + (separation.x - 1) );
      } else if (this.verticalOnly(separation)) {
        this.moveVertical(separation );
        console.log("move vertical " + (separation.y - 1) );
      } else {
        this.moveDiagonal(separation)
        console.log(">> move ?? " +  + (separation.x) + ":"  + (separation.y) );
      }
    }
  }

  private moveDiagonal(seperation: Position) {
    switch (seperation.x) {
      case -1:
      case -2: {
        this.rope.tail.stepLeft()
        break
      }
      case 1:
      case 2: {
        this.rope.tail.stepRight()
        break
      }
    }
    switch (seperation.y) {
      case -1:
      case -2: {
        this.rope.tail.stepDown()
        break
      }
      case 1:
      case 2: {
        this.rope.tail.stepUp()
        break
      }
    }
    // if (seperation.x == 1 && seperation.y == 2) {
    //   this.rope.tail.stepUp().stepRight()
    // } else if (seperation.x == 1 && seperation.y == -2) {
    //   this.rope.tail.stepDown().st()
    // } else if (seperation.x == 2 && seperation.y == 1) {
    //   this.rope.tail.stepRight().stepUp()
    // } else if (seperation.x == -2 && seperation.y == 1) {
    //   this.rope.tail.stepLeft().stepUp();
    // }
    console.log(seperation)
  }

  private moveHorizontal(seperation: Position) {
    console.log(" this number is : " + seperation.x)
    if (seperation.x > 0) {
      this.rope.tail.moveTail({ direction: "R", distance: 1 });
    } else {
      this.rope.tail.moveTail({ direction: "L", distance: -1 });
    }
  }

  private moveVertical(seperation: Position) {
    if (seperation.y > 0) {
      this.rope.tail.moveTail({ direction: "U", distance: 1 });
    } else {
      this.rope.tail.moveTail({ direction: "D", distance: -1 });
    }
  }

  private horizontalOnly(distance: Position): boolean {
    if (distance.y == 0) {
      return true;
    }
    return false;
  }

  private verticalOnly(distance: Position): boolean {
    if (distance.x == 0) {
      return true;
    }
    return false;
  }

  private distanceBetween(): Position {
    // let x;
    // let y;
    //
    // if (this.rope.head.currentPosition.x > this.rope.tail.currentPosition.x){
    //   x =
    // } else {
    //   x = this.rope.tail.currentPosition.x - this.rope.head.currentPosition.x
    // }
    //
    // if (this.rope.head.currentPosition.y > this.rope.tail.currentPosition.y){
    //   y =
    // } else {
    //   y = this.rope.tail.currentPosition.y - this.rope.head.currentPosition.y
    // }

    console.log("head: " +this.rope.head.currentPositionJSON() + "\ntail: " +this.rope.tail.currentPositionJSON())
    // console.log(
    //   "! x: " + (this.rope.head.currentPosition.x - this.rope.tail.currentPosition.x) +
    //   "y: " + (this.rope.head.currentPosition.y - this.rope.tail.currentPosition.y) +
    //   "! head: " + (this.rope.head.currentPosition.x) +
    //   "tail: " + (this.rope.tail.currentPosition.x)
    // )
    
    return {
      x: this.rope.head.currentPosition.x - this.rope.tail.currentPosition.x,
      y: this.rope.head.currentPosition.y - this.rope.tail.currentPosition.y
    }};

  private closeEnough(seperation: Position): boolean {
    if (this.rope.head.currentPositionJSON() == this.rope.tail.currentPositionJSON()) {
      return true;
    }

    const position = seperation

    if ((position.x <= 1 && position.x >= -1) &&(position.y <= 1 && position.y >= -1)) {
      if (position.x )
      // console.log(">> close enough - position: " + position.x + ":" + position.y)
      return true;
    }
    // console.log(">> need to move - position: " + position.x + ":" + position.y)
    return false;
  }
}

class Head extends RopePiece {
  constructor(rope: Rope) {
    super(rope);
  }
}

class Tail extends RopePiece {
  constructor(rope: Rope) {
    super(rope);
  }
}
