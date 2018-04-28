import {Tree, printAsciiTree} from './tree';

function makeNode(value: number): Tree {
    return {
        value,
        left: null,
        right: null,
    };
}

function main() {
    const t: Tree = {
        value: 1,
        left : {
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
            },
        },
        right : {
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
            },
        },
    };
    console.log(printAsciiTree(t));
}

main();