define("src/tree", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const MAX_HEIGHT = 100;
    const GAP = 0;
    const lProfile = [];
    const rProfile = [];
    let printNext = 0;
    function buildAsciiTreeRecursive(t) {
        if (!t) {
            return null;
        }
        const node = {
            left: buildAsciiTreeRecursive(t.left),
            right: buildAsciiTreeRecursive(t.right),
            edgeLength: 0,
            height: 0,
            parentDir: 0,
            label: `${t.value}`,
        };
        if (node.left) {
            node.left.parentDir = -1;
        }
        if (node.right) {
            node.right.parentDir = 1;
        }
        return node;
    }
    function buildAsciiTree(t) {
        if (!t) {
            return null;
        }
        const node = buildAsciiTreeRecursive(t);
        node.parentDir = 0;
        return node;
    }
    function computeEdgeLengths(node) {
        if (!node) {
            return;
        }
        computeEdgeLengths(node.left);
        computeEdgeLengths(node.right);
        let minHeight;
        // First fill in the edge_length of 'node'
        if (!node.left && !node.right) {
            node.edgeLength = 0;
        }
        else {
            if (node.left) {
                for (let i = 0; i < node.left.height && i < MAX_HEIGHT; ++i) {
                    rProfile[i] = -Infinity;
                }
                computeRightProfile(node.left, 0, 0);
                minHeight = node.left.height;
            }
            else {
                minHeight = 0;
            }
            if (node.right) {
                for (let i = 0; i < node.right.height && i < MAX_HEIGHT; ++i) {
                    lProfile[i] = Infinity;
                }
                computeLeftProfile(node.right, 0, 0);
                minHeight = Math.min(node.right.height, minHeight);
            }
            else {
                minHeight = 0;
            }
            let delta = 4;
            for (let i = 0; i < minHeight; ++i) {
                delta = Math.max(delta, GAP + 1 + rProfile[i] - lProfile[i]);
            }
            // If the node has two children of height 1, then we allow the two
            // leaves to be within 1, instead of 2
            if (((node.left && node.left.height === 1) ||
                (node.right && node.right.height === 1)) && delta > 4) {
                --delta;
            }
            node.edgeLength = Math.floor((delta + 1) * 0.5 + 1);
        }
        let height = 1;
        if (node.left) {
            height = Math.max(node.left.height + node.edgeLength + 1, height);
        }
        if (node.right) {
            height = Math.max(node.right.height + node.edgeLength + 1, height);
        }
        node.height = height;
    }
    function printLevel(node, x, level, str) {
        if (!node) {
            return;
        }
        const isLeft = (node.parentDir === -1) ? 1 : 0;
        if (level === 0) {
            const i = x - printNext - Math.floor((0.5 * (node.label.length - isLeft)));
            str.push(" ".repeat(i));
            printNext += i;
            str.push(node.label);
            printNext += node.label.length;
        }
        else if (node.edgeLength >= level) {
            if (node.left) {
                const i = x - printNext - level;
                str.push(" ".repeat(i));
                printNext += i;
                str.push("/");
                ++printNext;
            }
            if (node.right) {
                const i = x - printNext + level;
                str.push(" ".repeat(i));
                printNext += i;
                str.push("\\");
                ++printNext;
            }
        }
        else {
            printLevel(node.left, x - node.edgeLength - 1, level - node.edgeLength - 1, str);
            printLevel(node.right, x + node.edgeLength + 1, level - node.edgeLength - 1, str);
        }
    }
    // The following function fills in the lProfile array for the given tree.
    // It assumes that the center of the label of the root of this tree is location
    // at a position(x, y). IT assumes that the edgeLength fields have been computed
    // for this tree.
    function computeLeftProfile(node, x, y) {
        if (!node) {
            return;
        }
        const isLeft = node.parentDir === -1 ? 1 : 0;
        lProfile[y] = Math.min(lProfile[y], x - Math.floor(0.5 * (node.label.length - isLeft)));
        if (node.left) {
            for (let i = 1; i <= node.edgeLength && i + y < MAX_HEIGHT; ++i) {
                lProfile[i + y] = Math.min(lProfile[i + y], x - i);
            }
        }
        computeLeftProfile(node.left, x - node.edgeLength - 1, y + node.edgeLength + 1);
        computeLeftProfile(node.right, x + node.edgeLength + 1, y + node.edgeLength + 1);
    }
    function computeRightProfile(node, x, y) {
        if (!node) {
            return;
        }
        const notLeft = node.parentDir !== -1 ? 1 : 0;
        rProfile[y] = Math.max(rProfile[y], x + Math.floor(0.5 * (node.label.length - notLeft)));
        if (node.right) {
            for (let i = 1; i <= node.edgeLength && i + y < MAX_HEIGHT; ++i) {
                rProfile[i + y] = Math.max(rProfile[i + y], x + i);
            }
        }
        computeRightProfile(node.left, x - node.edgeLength - 1, y + node.edgeLength + 1);
        computeRightProfile(node.right, x + node.edgeLength + 1, y + node.edgeLength + 1);
    }
    function printAsciiTree(t) {
        if (!t) {
            return "";
        }
        let str = [];
        const parentRoot = buildAsciiTree(t);
        computeEdgeLengths(parentRoot);
        for (let i = 0; i < parentRoot.height && i < MAX_HEIGHT; ++i) {
            lProfile[i] = Infinity;
        }
        computeLeftProfile(parentRoot, 0, 0);
        let xMin = 0;
        for (let i = 0; i < parentRoot.height && i < MAX_HEIGHT; ++i) {
            xMin = Math.min(xMin, lProfile[i]);
        }
        for (let i = 0; i < parentRoot.height; ++i) {
            printNext = 0;
            printLevel(parentRoot, -xMin, i, str);
            str.push("\n");
        }
        if (parentRoot.height >= MAX_HEIGHT) {
            console.warn(`This tree is taller than ${MAX_HEIGHT}, and may be drawn incorrectly.`);
        }
        return str.join("");
    }
    exports.printAsciiTree = printAsciiTree;
});
define("src/handler", ["require", "exports", "src/tree"], function (require, exports, tree_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    document.addEventListener("DOMContentLoaded", function (event) {
        console.log("HEllo WORLD");
        const button = document.getElementsByTagName("button")[0];
        const input = document.getElementById("input");
        const output = document.getElementById("output");
        console.log(button);
        console.log(input);
        console.log(output);
        button.addEventListener("click", () => {
            try {
                const inputData = JSON.parse(input.textContent);
                const tree = tree_1.printAsciiTree(inputData);
                output.innerHTML = tree;
            }
            catch (error) {
                console.log(error);
            }
        });
    });
});
define("src/index", ["require", "exports", "src/tree"], function (require, exports, tree_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function makeNode(value) {
        return {
            value,
            left: null,
            right: null,
        };
    }
    function main() {
        const t = {
            value: 1,
            left: {
                value: 2,
                left: null,
                // right: makeNode(7),
                right: null,
            },
            right: {
                value: 3,
                left: null,
                right: null,
            },
        };
        console.log(tree_2.printAsciiTree(t));
    }
    main();
});
define("spec/tree_spec", ["require", "exports", "src/tree", "fs", "path", "jasmine"], function (require, exports, tree_3, fs_1, path_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("Binary Tree", () => {
        const SPEC_DIR = "./spec";
        fs_1.readdirSync(SPEC_DIR).forEach((file) => {
            if (path_1.extname(file) === ".json") {
                const spec = path_1.basename(file, ".json");
                it(`should print ${spec}`, () => {
                    const jsonFile = path_1.join(SPEC_DIR, file);
                    const input = JSON.parse(fs_1.readFileSync(jsonFile, "utf8"));
                    const tree = tree_3.printAsciiTree(input);
                    const outFile = path_1.join(SPEC_DIR, `${spec}.out`);
                    const output = fs_1.readFileSync(outFile, "utf8");
                    expect(`\n${tree}`).toBe(`\n${output}`);
                });
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90cmVlLnRzIiwiLi4vc3JjL2hhbmRsZXIudHMiLCIuLi9zcmMvaW5kZXgudHMiLCIuLi9zcGVjL3RyZWVfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFlQSxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDdkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO0lBQzlCLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztJQUM5QixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFFbEIsaUNBQWlDLENBQVk7UUFDekMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNKLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxNQUFNLElBQUksR0FBYztZQUNwQixJQUFJLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQyxLQUFLLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN2QyxVQUFVLEVBQUcsQ0FBQztZQUNkLE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFO1NBQ3RCLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBd0IsQ0FBWTtRQUNoQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ0osT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sSUFBSSxHQUFjLHVC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