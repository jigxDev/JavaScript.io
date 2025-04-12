let myLibrary = [];
let libraryIdx = 0;
const submitButton = document.querySelector('#submit');
const allInp = document.querySelectorAll('input')

const uploadButton = document.querySelector('#Upload-Button')
const formContainer = document.querySelector('.form-container')

uploadButton.addEventListener('click', () => {
    document.querySelectorAll('input').forEach(input => input.value = '')
    document.querySelector('select').value = 'Select';
    document.body.style.backgroundColor
    formContainer.style.display = 'block';
    formContainer.classList.add('form-Popup');
    setTimeout(() => {
        formContainer.classList.remove("form-Popup");
    }, 1000);

})

function Book(title, desc, author, pages, read) {
    this.title = title,
    this.desc = desc,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = () => {
        return `${title} by ${author}, ${pages}, ${read}`;            
    };
}

function addBookToLibrary(bookTitle,BookDesc, BookAuthor, BookPages, ReadBook) {
    formContainer.style.display = 'none';
    const BookTitleInp = document.querySelector("#title");
    const BookDescInp = document.querySelector("#description");
    const BookAuthorInp = document.querySelector("#author"); 
    const BookPagesInp = document.querySelector("#pages"); 
    const ReadBookInp = document.querySelector("#readStatus");
    bookTitle = BookTitleInp.value;
    BookDesc = BookDescInp.value;
    BookAuthor = BookAuthorInp.value;
    BookPages = BookPagesInp.value;
    ReadBook = ReadBookInp.value;
    myLibrary.push(new Book(bookTitle, BookDesc, BookAuthor, BookPages, ReadBook));
    libraryIdx++
    console.log('Book Added to Library')
    displayBook();
}

function displayBook() {
    const bookLibraryConty = document.querySelector('.Book-Library');
    bookLibraryConty.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        
        const bookContainer = document.createElement('div')
        bookContainer.setAttribute('class', 'Show-Book');
        bookLibraryConty.appendChild(bookContainer);
        
        const bookImg = document.createElement('div');
        bookImg.setAttribute('class', 'showBook-img');
        bookImg.style.backgroundImage = `url(images/${Math.floor(Math.random()*5)}.jpg)`;
        bookContainer.appendChild(bookImg);
        
        const bookpages = document.createElement('div');
        bookpages.setAttribute('class', 'showBook-pages');
        bookpages.innerHTML = '<div class=".roboto">Pages</div>' + myLibrary[i].pages;
        bookContainer.appendChild(bookpages);
        
        const bookDetail = document.createElement('div');
        bookDetail.setAttribute('class', 'showBook-detail');
        bookContainer.appendChild(bookDetail);
        
        const bookAuthor = document.createElement('div');
        bookAuthor.setAttribute('class', 'book-author');
        bookAuthor.innerText = myLibrary[i].author;
        bookDetail.appendChild(bookAuthor);
        
        const bookTitle = document.createElement('div');
        bookTitle.setAttribute('class', 'book-title');
        bookTitle.innerText = myLibrary[i].title;
        bookDetail.appendChild(bookTitle);
        
        const bookDesc = document.createElement('div');
        bookDesc.setAttribute('class', 'book-desc');
        bookDesc.innerText = myLibrary[i].desc;
        bookDetail.appendChild(bookDesc);
        
        const bookReadstat = document.createElement('div');
        bookReadstat.setAttribute('class', 'Book-Read-stat');
        bookReadstat.innerText = myLibrary[i].read;
        bookDetail.appendChild(bookReadstat);
    }
}

submitButton.addEventListener('click', addBookToLibrary)