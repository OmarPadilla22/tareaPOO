/*Exercise #2: The Reading List
Create an object-oriented book-list!

Start with an HTML page that has the title: My Book List.

Part 1 Book
In your Javascript file, create a class called Book. Each Book should have several properties:

Title
Genre
Author
Read (true or false)
Read date; can be blank, otherwise needs to be a JS Date() object
Add to your HTML page 2 books that reference the Book objects.*/


class book {
    constructor(title, genre, author, read, readDate){
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = read;
      this.readDate = readDate;
    }

      bookList(){
          return this.title + this.genre + this.author + this.read + this.readDate;
      }
    }
    bookList();

let book1 = new book(prompt("Whats the title to the book?"), prompt("Whats the genre of the book?"), prompt("Who is the author of the book?"), bolean(prompt("You read this book?(True for yes/False for no)")), prompt("When did you read the book?"));

let book2 = new book(prompt("Whats the title to the book?"), prompt("Whats the genre of the book?"), prompt("Who is the author of the book?"), bolean(prompt("You read this book?(True for yes/False for no)")), prompt("When did you read the book?"));

//document.getElementById("Id").innerHTML = book1.title +', '+persona1.age + ' years old.';