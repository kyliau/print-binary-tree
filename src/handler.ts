import {Tree, printAsciiTree} from './tree';

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementsByTagName("button")[0];
  const input  = document.getElementById("input")!;
  const output = document.getElementById("output")!;
  button.addEventListener("click", () => {
    try {
      const inputData = JSON.parse(input.textContent!) as Tree;
      const tree = printAsciiTree(inputData)!;
      output.innerHTML = tree;
    }
    catch (error) {
      console.log(error);
    }
  });
});
