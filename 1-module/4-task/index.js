/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let name = str.toLowerCase();
			
  if (name.includes('1xbet') || name.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}
