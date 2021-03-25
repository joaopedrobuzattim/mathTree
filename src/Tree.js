export class Tree {
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
