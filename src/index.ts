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
            left: null,
            // right: makeNode(7),
            right: null,
        },
        right : {
            value: 3,
            left: null,
            right: null,
            // left: {
            //     value: 4,
            //     left: makeNode(5),
            //     right: makeNode(6),
            // },
        },
    };
    console.log(printAsciiTree(t));
}

main();