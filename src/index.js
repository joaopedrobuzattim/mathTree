// Import statements
import { Render } from "./Render.js";
import { Tree } from "./Tree.js";

//Constants
const TABLE_WIDTH = 31;
const TABLE = document.getElementById("table");

//Render table
new Render(TABLE, TABLE_WIDTH);

//Get input element
const input = document.getElementById("slider");

//Creating the Tree
const MathTree = new Tree(7, TABLE_WIDTH);

//Add eventListeners
input.addEventListener("input", function () {
  MathTree.start(this.value);
});
