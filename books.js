const add = document.getElementById('add');
const myBooks = document.getElementById('my-books');
myCollection = [];
let i = 0;
let bookremove ='';

const title = document.getElementById('title');
const author = document.getElementById('author');
add.addEventListener('click', () => {
    const obj = {};
    const books = document.createElement('div');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    const btn = document.createElement('button');
    const hr = document.createElement('hr');
    
    bookremove = 'remove'+i;
    myBooks.appendChild(books);
    
    h4.textContent = title.value;
    h5.textContent = author.value;
    btn.textContent = 'Remove';
    btn.classList.add('remove');
    books.classList.add(bookremove);
    books.appendChild(h4);
    books.appendChild(h5);
    books.appendChild(btn);
    books.appendChild(hr);

    obj.title = title.value;
    obj.author = author.value;

    myCollection.push(obj);
    i++;

    title.value = "";
    author.value = "";
    
});

const removeBut = document.querySelectorAll('.remove');


for(let t = 0; t < removeBut.length; t += 1) {
  removeBut[t].addEventListener('click', () => {
    const classBook = document.querySelector('.'+bookremove);
    classBook.innerHTML = '';
    //removeBut[t].parentNode.innerHTML = '';
    console.log(t);
  });
}






