/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let cells = table.querySelectorAll('td');

  for (let i = 0; i < cells.length; i++) {
    if (!cells[i].hasAttribute("data-available")) {
      cells[i].closest('tr').setAttribute('hidden', '');
    }

    if (cells[i].hasAttribute("data-available")) {
      if (cells[i].dataset.available === 'true') {
        cells[i].closest('tr').classList.add('available');
      } else {
        cells[i].closest('tr').classList.add('unavailable');
      }
    }

    if (cells[i].innerHTML === 'm') {
      cells[i].closest('tr').classList.add('male');
    }

    if (cells[i].innerHTML === 'f') {
      cells[i].closest('tr').classList.add('female');
    }

    if (cells[i].innerHTML < 18) {
      cells[i].closest('tr').style.textDecoration = "line-through";
    }
  }
}
