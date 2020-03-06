/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let newString = str.replace(/[,\/#!$%\^&\*;:{}=+\_`~()^A-Za-zА-Яа-яЁё\s]/g," ");
  let arr = newString.split(' '); 

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
  }

  let min = arrayMin(arr);
  let max = arrayMax(arr);

  function arrayMin(arr) {
    return arr.reduce(function (min, max) {
      return ( min < max ? min : max );
    });
  }

  function arrayMax(arr) {
    return arr.reduce(function (min, max) {
      return ( min > max ? min : max );
    });
  }

  let result = {
    min: min,
    max: max
  };
  
  return result;
}
