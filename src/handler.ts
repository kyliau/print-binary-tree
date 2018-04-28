import {Tree, printAsciiTree} from './tree';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("HEllo WORLD");
  const button = document.getElementsByTagName("button")[0];
  const input  = document.getElementById("input")!;
  const output = document.getElementById("output")!;
  console.log(button);
  console.log(input);
  console.log(output);
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
