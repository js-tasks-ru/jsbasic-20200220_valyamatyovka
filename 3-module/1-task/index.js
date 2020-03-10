/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let name, balance, item;
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    if(data[i]["age"] <= age) {
      item = data[i]["name"] + ", " + data[i]["balance"];
      arr.push(item);
    }
  }

  let newStr = arr.join('\n');
  return newStr;
}
