import { ElfFileSystem } from "./elf-file-system";

describe("day one tests", () => {
  it("should create a root dir on initialize", () => {
    expect(new ElfFileSystem().currentDirectory().fullPath).toEqual("/");
  });

  it("should create new directory in root", () => {
    expect(new ElfFileSystem().makeDir("test").cd("test").currentDirectory().fullPath).toEqual("/test/");
  });

  it("should create new nested directory", () => {
    expect(
      new ElfFileSystem().makeDir("test").cd("test").makeDir("hello").cd("hello").currentDirectory().fullPath,
    ).toEqual("/test/hello/");
  });

  it("should can cd back to root", () => {
    expect(new ElfFileSystem().makeDir("test").cd("test").cd("/").currentDirectory().fullPath).toEqual("/");
  });

  it("should can cd back up a level ", () => {
    expect(
      new ElfFileSystem().makeDir("test").cd("test").makeDir("hello").cd("hello").cd("..").currentDirectory().fullPath,
    ).toEqual("/test/");
  });
});
