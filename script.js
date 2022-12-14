let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  changeRead() {
    this.read = (this.read) ? false : true
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', '295', true);
addBookToLibrary('Moby Dick', 'Herman Melville', '378', false);

function colorReadStatus() {
  let readStatuses = document.querySelectorAll(".read-status")
  readStatuses.forEach((readStatus) => {
    if (readStatus.innerHTML == "True") {
      readStatus.style.color = 'green'
    } else {
      readStatus.style.color = 'red'
    }
  })
}

function displayLibrary(books) {
  let str = '<div class="book-container">'

  books.forEach(function(book) {
    let read = String(book.read)
    let readCapitalized = read.charAt(0).toUpperCase() + read.slice(1)
    str += `<div class="book" data-book-id="${books.indexOf(book)}"> 
            <u>${book.title}</u>
            <p> Author: ${book.author} </p>
            <p> Pages: ${book.pages} </p>
            <p> Read? <span class="read-status">${readCapitalized}</span> </p> 
            <button onclick="changeBookRead(${books.indexOf(book)})">Change Read Status</button><br><br>
            <button onclick="removeBook(${books.indexOf(book)})">Remove Book</button>
            </div>`
  })

  str += '</div>'
  document.getElementById("library").innerHTML = str
  colorReadStatus()
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
  document.querySelector(".form-popup").style.visibility = "visible"
  document.querySelector(".overlay").style.visibility = "visible"
}

function closeForm() {
  document.querySelector(".form-popup").style.visibility = "hidden"
  document.querySelector(".overlay").style.visibility = "hidden"
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
    closeForm()
  })


displayLibrary(myLibrary)