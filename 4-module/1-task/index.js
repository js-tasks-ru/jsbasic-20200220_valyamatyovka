/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement("ul");
  let listItem;
  
  for (let i = 0; i < friends.length; i++) {
    let arrKey = friends[i].firstName + " " + friends[i].lastName;
    
    listItem = document.createElement("li");
    listItem.innerHTML = arrKey;
    list.appendChild(listItem);
  }

  return list;
}
