const addBtn = document.getElementById('add');
const myBooks = document.getElementById('my-books');

const title = document.getElementById('title');
const author = document.getElementById('author');
class Books {
  constructor(title, author){
    this.title = title;
    this.author = author;
    this.obj = {title: this.title, author: this.author};
  } 

   static myCollection = [];

  add(myBooksB) {
        const books = document.createElement('div');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');
        const btn = document.createElement('button');
        const hr = document.createElement('hr');

        myBooksB.appendChild(books);

        h4.textContent = this.title;
        h5.textContent = this.author;
        btn.textContent = 'Remove';

        books.appendChild(h4);
        books.appendChild(h5);
        books.appendChild(btn);
        books.appendChild(hr);
        Books.myCollection.push(this.obj);
        localStorage.setItem('myCollection', JSON.stringify(Books.myCollection));
        btn.addEventListener('click', () => {
          this.removeThing(books);
          Books.myCollection.splice(Books.myCollection.indexOf(this.obj), 1);
          localStorage.setItem('myCollection', JSON.stringify(Books.myCollection));
          //console.log(Books.myCollection.indexOf(this.obj));
        });
        

  }

  removeThing(bookT) {
    bookT.remove();
    
  }

  static loading(myBooksB) {
    const restore = JSON.parse(localStorage.getItem('myCollection'));
  for (let i = 0; i < restore.length; i += 1) {
     const books = document.createElement('div');
     const h4 = document.createElement('h4');
     const h5 = document.createElement('h5');
     const btn = document.createElement('button');
     const hr = document.createElement('hr');
     let tab = Books.myCollection;
     myBooksB.appendChild(books);

    h4.textContent = restore[i].title;
    h5.textContent = restore[i].author;
     btn.textContent = 'Remove';

     books.appendChild(h4);
    books.appendChild(h5);
    books.appendChild(btn);
     books.appendChild(hr);

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
    const obj = new Books(title1, author1)
    obj.add(myBooks);
    

});

window.addEventListener('load', () => {
  Books.loading(myBooks);
});


