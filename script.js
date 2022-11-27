let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    readResult = (read) ? 'read this already' : 'not read yet'
    return `${title} by ${author}, ${pages} pages, ` + readResult
  }
}

Book.prototype.changeRead = function() {
  this.read = (this.read) ? false : true
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', '295', true);
addBookToLibrary('Moby Dick', 'Herman Melville', '378', false);

function displayLibrary(books) {
  let str = '<div class="book-container">'

  books.forEach(function(book) {
    str += `<div class="book" data-book-id="${books.indexOf(book)}"> 
            <u>${book.title}</u>
            <ul> <li> Author: ${book.author} </li>
            <li> Pages: ${book.pages} </li>
            <li> Read? ${book.read} </li> 
            </ul> 
            <button onclick="changeBookRead(${books.indexOf(book)})">Change Read Status</button>
            <button onclick="removeBook(${books.indexOf(book)})">Remove Book</button>
            </div>`
  })

  str += '</div>'
  document.getElementById("library").innerHTML = str
}

function changeBookRead(bookId) {
  myLibrary[bookId].changeRead()
  displayLibrary(myLibrary)
}

function removeBook(bookId) {
  myLibrary.splice(bookId, 1)
  displayLibrary(myLibrary)
}

function openForm() {
  document.querySelector(".form-popup").style.display = "block"
  document.querySelector(".new-cancel").style.display = "block"
  document.querySelector(".new-open").style.display = "none"
}

function closeForm() {
  document.querySelector(".form-popup").style.display = "none"
  document.querySelector(".new-cancel").style.display = "none"
  document.querySelector(".new-open").style.display = "block"

}

const newBookForm = document.querySelector('[name="new-book-form"]')

newBookForm.addEventListener("submit", 
  function(event) {
    event.preventDefault()

    const newTitle = event.currentTarget.title.value
    const newAuthor = event.currentTarget.author.value
    const newPages = event.currentTarget.pages.value
    const newRead = event.currentTarget.read.checked

    addBookToLibrary(newTitle, newAuthor, newPages, newRead);
    displayLibrary(myLibrary)
  })


displayLibrary(myLibrary)