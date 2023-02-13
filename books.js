const add = document.getElementById('add');
const myBooks = document.getElementById('my-books');
myCollection = [
    {
        title: 'book1',
        author: 'author1'
    },
      {
        title: 'book1',
        author: 'author1'
    },
      {
        title: 'book1',
        author: 'author1'
    },
      {
        title: 'book1',
        author: 'author1'
    },
      {
        title: 'book1',
        author: 'author1'
    }
]
const title = document.getElementById('title');
const author = document.getElementById('author');
add.addEventListener('click', () => {

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

    title.value = "";
    author.value = "";
})


