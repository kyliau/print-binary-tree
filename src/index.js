"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./tree");
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
    console.log(tree_1.printAsciiTree(t));
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0QztBQUU1QyxrQkFBa0IsS0FBYTtJQUMzQixPQUFPO1FBQ0gsS0FBSztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFLElBQUk7S0FDZCxDQUFDO0FBQ04sQ0FBQztBQUVEO0lBQ0ksTUFBTSxDQUFDLEdBQVM7UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksRUFBRztZQUNILEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixzQkFBc0I7WUFDdEIsS0FBSyxFQUFFLElBQUk7U0FDZDtRQUNELEtBQUssRUFBRztZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQU1kO0tBQ0osQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxJQUFJLEVBQUUsQ0FBQyJ9