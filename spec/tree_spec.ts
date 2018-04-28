import { Tree, printAsciiTree } from "../src/tree";
import "jasmine";
import { readdirSync, readFileSync } from "fs";
import { join, basename, extname } from "path";

describe("Binary Tree", () => {
  const SPEC_DIR = "./spec";
  readdirSync(SPEC_DIR).forEach((file: string) => {
    if (extname(file) === ".json") {
      const spec = basename(file, ".json");
      // Dynamically generate the test cases
      it(`should print ${spec}`, () => {
        const jsonFile = join(SPEC_DIR, file);
        const input = JSON.parse(readFileSync(jsonFile, "utf8"));
        const tree = printAsciiTree(input);
        const outFile = join(SPEC_DIR, `${spec}.out`);
        const output = readFileSync(outFile, "utf8");
        expect(`\n${tree}`).toBe(`\n${output}`);
      });
    }
  });
});