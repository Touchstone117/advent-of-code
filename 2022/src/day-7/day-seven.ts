import { ElfFileSystem, FolderSizeMap } from "./elf-file-system";
import { countAllValuesInArray } from "../lib/count-values-in-array";

export class DaySeven {
  private readonly elfFileSystem: ElfFileSystem;

  constructor(private readonly puzzleInput: string) {
    // console.log("Day Seven, puzzle input: \n" + this.puzzleInput);

    this.elfFileSystem = this.parseInput();
  }

  private parseInput(): ElfFileSystem {
    const inputArray = this.puzzleInput.split("\n");
    const fs = new ElfFileSystem();

    inputArray.forEach((instruction) => {
      if (instruction.startsWith("$ cd")) {
        fs.cd(instruction.split(" ").reverse()[0]);
      } else if (instruction.startsWith("$ ls")) {
      } else if (instruction.startsWith("dir")) {
        fs.makeDir(instruction.split(" ").reverse()[0]);
      } else if (instruction.match(/\d+ .*/)) {
        const split = instruction.split(" ");
        fs.currentDirectory().makeFile(Number.parseInt(split[0]), split[1]);
      } else {
        throw "unknown instruction";
      }
    });

    return fs;
  }

  directoryASize(): string {
    return this.elfFileSystem.cd("/a/").currentDirectory().dirSize().toString();
  }

  directoriesSmallerThan(size: number): FolderSizeMap[] {
    return this.elfFileSystem.folderSizes().filter((item) => {
      return item.size < size;
    });
  }

  countDirectorySizes(array: FolderSizeMap[]): number {
    return countAllValuesInArray(
      array.map((value) => {
        return value.size;
      }),
    );
  }

  solvePartOne(): string {
    return this.countDirectorySizes(this.directoriesSmallerThan(100000)).toString();
  }

  solvePartTwo(): string {
    const requiredSpace: number = 30000000;
    const freeSpace: number = this.elfFileSystem.freeSpace();
    const answer = this.elfFileSystem
      .folderSizes()
      .filter((dir) => {
        return dir.size + freeSpace > requiredSpace;
      })
      .sort((a, b) => {
        return a.size - b.size;
      })
      .shift();

    if (!answer) {
      throw "no answer";
    }

    return answer.size.toString();
  }
}
