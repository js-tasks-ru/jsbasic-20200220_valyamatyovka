/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  let otherLetter = str.slice(1);

  return str = firstLetter + otherLetter;
}
