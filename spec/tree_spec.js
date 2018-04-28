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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZV9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJlZV9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELG1CQUFpQjtBQUNqQiwyQkFBK0M7QUFDL0MsK0JBQStDO0FBRS9DLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixnQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1FBQzdDLElBQUksY0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLE9BQU8sRUFBRTtZQUM3QixNQUFNLElBQUksR0FBRyxlQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUM5QixNQUFNLFFBQVEsR0FBRyxXQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELE1BQU0sSUFBSSxHQUFHLHFCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sT0FBTyxHQUFHLFdBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLE1BQU0sR0FBRyxpQkFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=