/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  return arr.filter(function(item) {
    return a <= item && item <= b;
  });
}
