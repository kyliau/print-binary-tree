"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("../src/tree");
require("jasmine");
const fs_1 = require("fs");
const path_1 = require("path");
describe("Binary Tree", () => {
    const SPEC_DIR = "./spec";
    fs_1.readdirSync(SPEC_DIR).forEach((file) => {
        if (path_1.extname(file) === ".json") {
            const spec = path_1.basename(file, ".json");
            it(`should print ${spec}`, () => {
                const jsonFile = path_1.join(SPEC_DIR, file);
                const input = JSON.parse(fs_1.readFileSync(jsonFile, "utf8"));
                const tree = tree_1.printAsciiTree(input);
                const outFile = path_1.join(SPEC_DIR, `${spec}.out`);
                const output = fs_1.readFileSync(outFile, "utf8");
                expect(`\n${tree}`).toBe(`\n${output}`);
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZV9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlYy90cmVlX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsbUJBQWlCO0FBQ2pCLDJCQUErQztBQUMvQywrQkFBK0M7QUFFL0MsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLGdCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDN0MsSUFBSSxjQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssT0FBTyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxHQUFHLGVBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUU7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLFdBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDekQsTUFBTSxJQUFJLEdBQUcscUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxPQUFPLEdBQUcsV0FBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sTUFBTSxHQUFHLGlCQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==