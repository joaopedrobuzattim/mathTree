export class Render {
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
