/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
let table = document.body.children[0];

function makeDiagonalRed(table) {
  for(let i = 0; i < table.rows.length; i++) {
    let rows = table.rows[i];
    rows.cells[i].style.backgroundColor = "red";
  }
}
