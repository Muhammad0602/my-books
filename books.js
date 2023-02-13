const add = document.getElementById('add');
const myBooks = document.getElementById('my-books');
const myCollection = [];

const title = document.getElementById('title');
const author = document.getElementById('author');
add.addEventListener('click', () => {
  const obj = {};
  const books = document.createElement('div');
  const h4 = document.createElement('h4');
  const h5 = document.createElement('h5');
  const btn = document.createElement('button');
  const hr = document.createElement('hr');

  myBooks.appendChild(books);

  h4.textContent = title.value;
  h5.textContent = author.value;
  btn.textContent = 'Remove';

  books.appendChild(h4);
  books.appendChild(h5);
  books.appendChild(btn);
  books.appendChild(hr);

  obj.title = title.value;
  obj.author = author.value;

  myCollection.push(obj);

  localStorage.setItem('myCollection', JSON.stringify(myCollection));

  title.value = '';
  author.value = '';

  btn.addEventListener('click', () => {
    books.remove();
    myCollection.splice(myCollection.indexOf(obj), 1);
    localStorage.setItem('myCollection', JSON.stringify(myCollection));
  });
});

window.addEventListener('load', () => {
  const restore = JSON.parse(localStorage.getItem('myCollection'));
  for (let i = 0; i < restore.length; i += 1) {
    const books = document.createElement('div');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    const btn = document.createElement('button');
    const hr = document.createElement('hr');
    let tab = myCollection;
    myBooks.appendChild(books);

    h4.textContent = restore[i].title;
    h5.textContent = restore[i].author;
    btn.textContent = 'Remove';

    books.appendChild(h4);
    books.appendChild(h5);
    books.appendChild(btn);
    books.appendChild(hr);

    tab = restore;

    title.value = '';
    author.value = '';

    btn.addEventListener('click', () => {
      books.remove();
      tab.splice(i, 1);
      localStorage.setItem('myCollection', JSON.stringify(tab));
    });
  }
});
