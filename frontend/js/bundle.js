/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render": () => (/* binding */ Render)
/* harmony export */ });
class Render {
  constructor(table, tableWidth) {
    this.width = tableWidth;
    this.table = table;
    this._init();
  }

  _init() {
    let tableContent = "<tr>";

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        tableContent += " <td> </td> ";
      }

      if (i < this.width - 1) tableContent += "</tr> <tr>";
    }
    this.table.innerHTML = tableContent;
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tree": () => (/* binding */ Tree)
/* harmony export */ });
class Tree {
  constructor(trunkHeight, tableWidth) {
    this.trunkHeight = trunkHeight;
    this.tableWidth = tableWidth;
  }

  start(crownHeight) {
    const matrix = this.createTableMatrix();
    const triangle = this.createTriangleMatrix(crownHeight);
    const triangleMatrix = this.populateTriangleMatrix(crownHeight, triangle);
    this.clear(matrix);
    this.renderTrunk(crownHeight, matrix);
    this.renderCrown(crownHeight, matrix, triangleMatrix);
  }

  clear(matrix) {
    const n = this.tableWidth;

    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        matrix[i][j].style.background = "transparent";
        matrix[i][j].textContent = "";
      }
  }

  factorial(number) {
    let fatorial = 1;

    while (number > 0) {
      fatorial *= number;
      number--;
    }
    return fatorial;
  }

  combination(n, p) {
    return this.factorial(n) / (this.factorial(p) * this.factorial(n - p));
  }

  createTableMatrix() {
    const n = this.tableWidth;

    let td = document.querySelectorAll("table tbody td");

    const matrix = new Array();

    for (let i = 0; i < n; i++) matrix[i] = new Array(n);

    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) matrix[i][j] = td[j + n * i];

    return matrix;
  }

  createTriangleMatrix(crownHeight) {
    let triangle = new Array();

    for (let i = 0; i < crownHeight; i++) triangle[i] = new Array(i + 1);

    return triangle;
  }

  populateTriangleMatrix(crownHeight, triangle) {
    for (let i = 0; i < crownHeight; i++)
      for (let j = 0; j <= i; j++) triangle[i][j] = this.combination(i, j);

    return triangle;
  }

  renderCrown(crownHeight, matrix, triangleMatrix) {
    const startRow = this.tableWidth - this.trunkHeight - 1;
    const endRow = startRow - crownHeight;

    let columnsToBeFilled = new Array();
    const positionsMap = new Map();

    for (let i = startRow; i > endRow; i--) {
      let startPosition = Math.ceil(this.tableWidth / 2) - (i - endRow);

      for (
        let j = startPosition, aux = 0;
        j < startPosition + (2 * (i - endRow) - 1);
        j++, aux++
      ) {
        if (j === startPosition) columnsToBeFilled.push(j);
        else if (aux % 2 === 0) columnsToBeFilled.push(j);
      }
      positionsMap.set(i, columnsToBeFilled);
      columnsToBeFilled = [];
    }

    for (let i = crownHeight - 1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        const row = endRow + i + 1;
        const column = positionsMap.get(row)[j];
        matrix[row][column].style.background = `#3CA850`;
        matrix[row][column].textContent = triangleMatrix[i][j];
      }
    }
  }

  renderTrunk(crownHeight, matrix) {
    if (Number(crownHeight) === 0) return;

    const startTrunk = this.tableWidth - this.trunkHeight;
    const endTrunk = this.tableWidth;
    const columnTrunk = Math.ceil(this.tableWidth / 2) - 1;

    for (let i = startTrunk; i < endTrunk; i++) {
      matrix[i][columnTrunk].textContent = "1";
      matrix[i][columnTrunk].style.background = "#75541B";
    }
  }
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
// Import statements



//Constants
const TABLE_WIDTH = 31;
const TABLE = document.getElementById("table");

//Render table
new _Render_js__WEBPACK_IMPORTED_MODULE_0__.Render(TABLE, TABLE_WIDTH);

//Get input element
const input = document.getElementById("slider");

//Creating the Tree
const MathTree = new _Tree_js__WEBPACK_IMPORTED_MODULE_1__.Tree(7, TABLE_WIDTH);

//Add eventListeners
input.addEventListener("input", function () {
  MathTree.start(this.value);
});

})();

/******/ })()
;