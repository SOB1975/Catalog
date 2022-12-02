//===========================================================================================
//Суммирует все элементы в категории 
export function countPrice(array, catPrice, i) {
  //перебираем массив 
  if (array) {

    array.forEach(function (element, index) {

      //создаем массив из детей массива 
      console.log(array[index] = Number(element.children[i].children[0].innerHTML));
    });
    //Складываем все элементы массива и записываем значение 
    if (catPrice) {
      return catPrice.innerHTML = array.reduce(function (previousValue, value) {
        return previousValue + value;
      });
    }
  }



}
//===========================================================================================
//функция фильтрует элементы по категориям
export function filter(category, items) {

  items.forEach((item) => {
    // проверка на соответствие категории
    const isItemFiltered = !item.classList.contains(category)
    // Заведем переменную для показа всех карточек в категории All
    const isShowAll = category.toLowerCase() === 'all'
    // Если карточка не содержит данную категорию
    if (isItemFiltered && !isShowAll) {

      // Добавлять класс hide
      item.classList.add('hide')
      // В противном случае, удалять класс hide
    } else {
      const countCategory = document.querySelectorAll('.' + category);
      // console.log(countCategory);
      item.classList.remove('hide')
      // считаем элементы в категории и зписываем значение
      countCategory.forEach(function (item, index) {
        // console.log(item.children[0].children.innerHTML = index + 1);
        // console.log(item.children[0].children[0].innerHTML = index + 1);
        if (item.children[0].children[0]) {
          item.children[0].children[0].innerHTML = index + 1;
        }
      })
    }
  })

}