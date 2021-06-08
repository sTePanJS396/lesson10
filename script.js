const advertisingRemove = document.querySelector('.adv');
advertisingRemove.remove();
// Реклама google удалена

const booksCollection = document.querySelector('.books')
const booksElement = document.querySelectorAll('.book');
// Получение необходимых элементов

booksCollection.prepend(booksElement[1]);
booksElement[0].after(booksElement[4]);
booksCollection.append(booksElement[2]);
// Сортировка по порядку

const body = document.getElementsByTagName('body')[0].style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
// Изменение фоновой картинки

const bookA3 = document.querySelectorAll('div h2 a');
bookA3[2].textContent = 'Книга 3. this и Прототипы Объектов'
//  Изменение заголовка у книги 3

const listBooks = document.querySelectorAll('div ul li');
const ulBooks = document.querySelectorAll('div ul');

ulBooks[4].before(listBooks[37]);
ulBooks[4].before(listBooks[36]);
ulBooks[4].before(listBooks[45]);
ulBooks[4].before(listBooks[39]);
ulBooks[4].before(listBooks[40]);
ulBooks[4].after(listBooks[46]);
ulBooks[4].after(listBooks[44]);
ulBooks[4].after(listBooks[41]);
// В книге 5 расставлены по порядку главы

ulBooks[1].before(listBooks[7]);
ulBooks[1].before(listBooks[6]);
ulBooks[1].before(listBooks[9]);
ulBooks[1].before(listBooks[12]);
ulBooks[1].before(listBooks[14]);
ulBooks[1].after(listBooks[16]);
ulBooks[1].after(listBooks[8]);
// В книге 2 расставлены по порядку главы

const chapter = document.createElement('li');
chapter.textContent = 'Глава 8: За пределами ES6';
ulBooks[5].append(chapter);
console.log(listBooks);
ulBooks[5].after(listBooks[56]);
// Добавление новой главы в книгу 6