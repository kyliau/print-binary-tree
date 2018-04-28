"use strict";
exports.__esModule = true;
var tree_1 = require("./tree");
function makeNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}
function main() {
    var t = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4,
                left: makeNode(8),
                right: makeNode(9)
            },
            right: {
                value: 5,
                left: makeNode(10),
                right: makeNode(11)
            }
        },
        right: {
            value: 3,
            left: {
                value: 6,
                left: makeNode(12),
                right: makeNode(13)
            },
            right: {
                value: 7,
                left: makeNode(14),
                right: makeNode(15)
            }
        }
    };
    console.log(tree_1.printAsciiTree(t));
}
main();
