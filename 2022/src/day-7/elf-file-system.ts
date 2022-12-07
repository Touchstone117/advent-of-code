import { Directory } from "./elf-file";

export interface FolderSizeMap {
  name: string;
  size: number;
}

export class ElfFileSystem {
  private paths: Directory[] = [];
  private currentDir: Directory;
  private readonly fileSystemSize: number = 70000000;

  constructor() {
    const rootDir = new Directory("/", "");
    this.paths.push(rootDir);
    this.currentDir = rootDir;
  }

  private mkDir(name: string, path: string): Directory {
    const dir = new Directory(name, path);
    this.currentDirectory().directories.push(dir);
    this.paths.push(dir);
    return dir;
  }

  makeDir(name: string): this {
    this.mkDir(name, this.currentDirectory().fullPath);
    return this;
  }

  cd(dir: string): this {
    let directory;

    if (dir.startsWith("/")) {
      directory = this.paths.find((element) => element.fullPath == dir);
    } else if (dir == "..") {
      directory = this.paths.find((element) => element.fullPath == this.currentDirectory().parentValue);
    } else {
      directory = this.currentDirectory().findDirInDir(dir);
    }

    if (directory) {
      this.currentDir = directory;
    } else {
      throw `can't find directory ${dir}`;
    }

    return this;
  }

  currentDirectory(): Directory {
    return this.currentDir;
  }

  folderSizes(): FolderSizeMap[] {
    return this.paths.map((dir) => {
      return { name: dir.fullPath, size: dir.dirSize() };
    });
  }

  freeSpace(): number {
    const currentSize = this.folderSizes().find((element) => element.name == "/");

    if (!currentSize) {
      throw "cannot find root dir";
    }

    return this.fileSystemSize - currentSize.size;
  }
}
