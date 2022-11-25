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

