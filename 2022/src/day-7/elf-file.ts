export abstract class ElfFile {
  readonly fullPath: string;
  readonly size: number;
  readonly parentValue: string;

  protected constructor(name: string, path: string, size: number = 0) {
    this.size = size;

    if (path === "") {
      this.fullPath = name;
      this.parentValue = "/";
    } else {
      this.fullPath = `${path}${name}/`;
      this.parentValue = path;
    }
  }
}

export class File extends ElfFile {
  constructor(name: string, path: string, size: number) {
    super(name, path, size);
  }
}

export class Directory extends ElfFile {
  readonly files: File[] = [];
  readonly directories: Directory[] = [];

  constructor(name: string, path: string) {
    super(name, path);
  }

  findDirInDir(dir: string): Directory {
    let directory;
    directory = this.directories.find((element) => element.fullPath == `${this.fullPath}${dir}/`);
    if (directory) {
      return directory;
    }
    throw "directory doesn't exist";
  }

  dirSize(): number {
    const fileSizes = this.files.reduce((count, file) => {
      return count + file.size;
    }, 0);

    const folderSizes = this.directories.reduce((count, dir) => {
      return count + dir.dirSize();
    }, 0);

    return fileSizes + folderSizes;
  }

  makeFile(size: number, name: string): this {
    this.files.push(new File(name, this.fullPath, size));
    return this;
  }
}
