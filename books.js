const addBtn = document.getElementById('add');
const myBooks = document.getElementById('my-books');
const addBook = document.querySelector('.flex-container');
const contact = document.querySelector('.contact-form');
const listLink = document.querySelector('#list-link');
const addLink = document.querySelector('#add-link');
const pdate = document.querySelector('#date-time');
// const now = new Date();
const contactLink = document.querySelector('#contact-link');
const h1 = document.querySelector('#h1');
const title = document.getElementById('title');
const author = document.getElementById('author');
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.obj = { title: this.title, author: this.author };
  }

   static myCollection = [];

   add(myBooksB) {
     const books = document.createElement('tr');
     const btn = document.createElement('button');
     const tdBtn = document.createElement('td');
     const td = document.createElement('td');
     tdBtn.appendChild(btn);
     tdBtn.classList.add('remove-btn');

     myBooksB.appendChild(books);

     btn.textContent = 'Remove';
     td.textContent = `"${this.title}" by ${this.author}`;

     books.appendChild(td);
     books.appendChild(tdBtn);
     Books.myCollection.push(this.obj);
     localStorage.setItem('myCollection', JSON.stringify(Books.myCollection));
     btn.addEventListener('click', () => {
       books.remove();
       Books.myCollection.splice(Books.myCollection.indexOf(this.obj), 1);
       localStorage.setItem('myCollection', JSON.stringify(Books.myCollection));
     });
   }

   static loading(myBooksB) {
     const restore = JSON.parse(localStorage.getItem('myCollection'));
     for (let i = 0; i < restore.length; i += 1) {
       const books = document.createElement('tr');
       const td = document.createElement('td');
       const btn = document.createElement('button');
       const tdBtn = document.createElement('td');
       tdBtn.classList.add('remove-btn');
       let tab = Books.myCollection;
       myBooksB.appendChild(books);

       td.textContent = `"${restore[i].title}" by ${restore[i].author}`;
       btn.textContent = 'Remove';
       books.appendChild(td);
       tdBtn.appendChild(btn);
       books.appendChild(tdBtn);

       tab = restore;
       Books.myCollection = tab;
       title.value = '';
       author.value = '';

       btn.addEventListener('click', () => {
         books.remove();
         tab.splice(i, 1);
         localStorage.setItem('myCollection', JSON.stringify(tab));
       });
     }
   }
}

addBtn.addEventListener('click', () => {
  const title1 = title.value;
  const author1 = author.value;
  title.value = '';
  author.value = '';
  const obj = new Books(title1, author1);
  if (obj.title.length > 0 && obj.author.length > 0) {
    obj.add(myBooks);
  }
});

window.addEventListener('load', () => {
  listLink.style.color = 'blue';
  addBook.style.display = 'none';
  contact.style.display = 'none';
  h1.style.display = 'block';
  pdate.innerHTML = new Date().toLocaleString('en-us', {
    month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  });
  Books.loading(myBooks);
});

listLink.addEventListener('click', () => {
  listLink.style.color = 'blue';
  addLink.style.color = 'black';
  contactLink.style.color = 'black';
  myBooks.style.display = 'flex';
  addBook.style.display = 'none';
  contact.style.display = 'none';
  h1.style.display = 'block';
});

addLink.addEventListener('click', () => {
  addLink.style.color = 'blue';
  listLink.style.color = 'black';
  contactLink.style.color = 'black';
  myBooks.style.display = 'none';
  addBook.style.display = 'flex';
  contact.style.display = 'none';
  h1.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  contactLink.style.color = 'blue';
  listLink.style.color = 'black';
  addLink.style.color = 'black';
  myBooks.style.display = 'none';
  addBook.style.display = 'none';
  contact.style.display = 'flex';
  h1.style.display = 'none';
});
