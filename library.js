let library =[]

function addNewBook(title,authorsName,ISBN,YearOfPub) {
    newBook = {
        title:title,
        authorsName:authorsName,
        ISBN:ISBN,
        YearOfPub:YearOfPub
    }

    library.push(newBook)
}

addNewBook("The gods must be Crazy","John Cole",9324567389,2002)

addNewBook("Hallelujah","Pius Sean",9324237389,2002)

console.log(library)

function deleteBook (title) {
    let book = newBook
    library = library.filter((book) => book.title !== title)
    console.log(`${title} has been deleted from the system`)
}
deleteBook("Hallelujah")

console.log(library)


function updateLibrary () {
    let booksToBeUpdated = library
    console.log(booksToBeUpdated)
}

updateLibrary()

function getBookFromLibrary (title,authorsName) {
    for (let i =0;i < library.length;i++){
        if (library[i].title === title && library[i].authorsName === authorsName) {
            console.log(`${title} found with this author ${authorsName}`)
            return;
        }
    } 
    console.log(`${title} not found with this author ${authorsName}`)
}

getBookFromLibrary("ROSES","William Smith")

getBookFromLibrary("Hallelujah","Pius Sean",9324237389,2002)

getBookFromLibrary("The gods must be Crazy","John Cole",9324567389,2002)