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

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkein', '295', true);
addBookToLibrary('Moby Dick', 'Herman Melville', '378', false);

function displayLibrary(books) {
  let str = '<ul>'

  books.forEach(function(book) {
    str += '<li>' + book.info() + '</li>'
  })

  str += '</ul>'
  document.getElementById("bookContainer").innerHTML = str
}

displayLibrary(myLibrary)