const myLibrary = [];
displayMyLibrary();

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayMyLibrary();
}

function displayMyLibrary() {
    let cardLibrary = document.querySelector(".myLibrary");
    cardLibrary.textContent = "";
    myLibrary.forEach((book) => {
        console.log(book);
        let card = document.createElement("div");
        card.style.width = "200px";
        card.style.height = "300px";
        card.style["background-color"] = "red";
        card.style.margin = "20px";
        cardLibrary.appendChild(card);
    })
}


let newBook = document.querySelector("#newBook");
newBook.addEventListener("click", () => {

});

const HP = new Book("JK", "hpatps", 20, false);
const HP2 = new Book("JK", "hpatps", 20, false);
const HP3 = new Book("Js", "hpatps", 20, false);
addBookToLibrary(HP);