"use strict";
exports.__esModule = true;
var MAX_HEIGHT = 100;
var lProfile = [];
var rProfile = [];
var printNext = 0;
function buildAsciiTree(t) {
    if (!t) {
        return null;
    }
    var node = {
        left: buildAsciiTree(t.left),
        right: buildAsciiTree(t.right),
        edgeLength: 0,
        height: 0,
        parentDir: 0,
        label: "" + t.value
    };
    if (node.left) {
        node.left.parentDir = -1;
    }
    if (node.right) {
        node.right.parentDir = 1;
    }
    return node;
}
function computeEdgeLengths(node) {
    if (!node) {
        return;
    }
    computeEdgeLengths(node.left);
    computeEdgeLengths(node.right);
    var minHeight;
    // First fill in the edge_length of 'node'
    if (!node.left && !node.right) {
        node.edgeLength = 0;
    }
    else {
        if (node.left) {
            for (var i = 0; i < node.left.height && i < MAX_HEIGHT; ++i) {
                rProfile[i] = -Infinity;
            }
            computeRightProfile(node.left, 0, 0);
            minHeight = node.left.height;
        }
        else {
            minHeight = 0;
        }
        if (node.right) {
            for (var i = 0; i < node.right.height && i < MAX_HEIGHT; ++i) {
                lProfile[i] = Infinity;
            }
            computeLeftProfile(node.right, 0, 0);
            minHeight = Math.min(node.right.height, minHeight);
        }
        else {
            minHeight = 0;
        }
        // TODO(kyliau): Figure out how to customize this
        var delta = 4;
        var GAP = 0;
        for (var i = 0; i < minHeight; ++i) {
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
    var height = 1;
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
    var isLeft = (node.parentDir === -1) ? 1 : 0;
    if (level === 0) {
        var i = x - printNext - Math.floor((0.5 * (node.label.length - isLeft)));
        str.push(" ".repeat(i));
        printNext += i;
        str.push(node.label);
        printNext += node.label.length;
    }
    else if (node.edgeLength >= level) {
        if (node.left) {
            var i = x - printNext - level;
            str.push(" ".repeat(i));
            printNext += i;
            str.push("/");
            ++printNext;
        }
        if (node.right) {
            var i = x - printNext + level;
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
    var isLeft = node.parentDir === -1 ? 1 : 0;
    lProfile[y] = Math.min(lProfile[y], x - Math.floor(0.5 * (node.label.length - isLeft)));
    if (node.left) {
        for (var i = 1; i <= node.edgeLength && i + y < MAX_HEIGHT; ++i) {
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
    var notLeft = node.parentDir !== -1 ? 1 : 0;
    rProfile[y] = Math.max(rProfile[y], x + Math.floor(0.5 * (node.label.length - notLeft)));
    if (node.right) {
        for (var i = 1; i <= node.edgeLength && i + y < MAX_HEIGHT; ++i) {
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
    var str = [];
    var parentRoot = buildAsciiTree(t);
    computeEdgeLengths(parentRoot);
    // lProfile.fill(Infinity, 0, parentRoot.height);
    for (var i = 0; i < parentRoot.height && i < MAX_HEIGHT; ++i) {
        lProfile[i] = Infinity;
    }
    computeLeftProfile(parentRoot, 0, 0);
    var xMin = 0;
    for (var i = 0; i < parentRoot.height && i < MAX_HEIGHT; ++i) {
        xMin = Math.min(xMin, lProfile[i]);
    }
    // const xMin = Math.min(0, ...lProfile);
    for (var i = 0; i < parentRoot.height; ++i) {
        printNext = 0;
        printLevel(parentRoot, -xMin, i, str);
        str.push("\n");
    }
    if (parentRoot.height >= MAX_HEIGHT) {
        console.warn("This tree is taller than " + MAX_HEIGHT + ", and may be drawn incorrectly.");
    }
    return str.join("");
}
exports.printAsciiTree = printAsciiTree;
