// Задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(value) {
        this._state = value;

        if (value < 0) {
            this._state = 0;
        }
        if (value > 100) {
            this._state = 100;
        }

    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = (this.state * 1.5);
    }



}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find((findBook) => findBook[type] === value);
        return findBook || null;
    }

    giveBookByName(bookName){
        let giveBook = null;
        for ( let i = 0; i < this.books.length; i++ ) {
            if (this.books[i].name === bookName) {
                giveBook = this.books[i];
                this.books.splice(i, 1);
            }            
        } 
        return giveBook;  
    }


}