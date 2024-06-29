/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/



export interface Book {
    title: string,
    author: string,
    libraryID: number
}

export let library: Book[] = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */

// Event listener function after clicking on Show Title button
 
export function showTitles(): void {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = titleString; }
}

// Event listener function after clicking on Show Author button
export function showAuthor(): void{

    const authors = findAuthors();

    authors.sort();
    const authorString = authors.join("\n");

    let textArea:HTMLElement |null = document.getElementById("displayArea") as HTMLInputElement | null;
    if(textArea){textArea.innerHTML=authorString;};

}

// Event listener function after clicking on Show ID button
export function showID():void{
    const ID = findIDs();

    ID.sort();
    const IDString  = ID.join('\n');
    let textArea: HTMLInputElement |null = document.getElementById('displayArea') as HTMLInputElement | null;
    if(textArea){textArea.innerHTML=IDString}; 
}

/**
 * 
 * @return {object} array holding all titles as elements
 */

// function for getting titles of the library object
export function findTitles(): string[] {
    let titles: string[]=[];
    for(const book of library){
        titles.push(book.title);
    }
     // let titles = ["This is a test title", "Another test title", "And another test title for good measure"]; 
    return titles.sort();
}
/**
 * 
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */

// function for getting authors of the library object
export function findAuthors(): string[] {

    let authors : string[] = [];
    for(const book of library){
        authors.push(book.author);
    }
    return authors.sort();

}

/**
 * 
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

// function for getting libraryID of the library object
export function findIDs(): number[] {
    let libraryID:number[]= [];
    for(const book of library){
        libraryID.push(book.libraryID);
    }
    
    return libraryID.sort();

}



/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook():  void {
    let title : HTMLInputElement = document.getElementById("title") as HTMLInputElement;
    let author :HTMLInputElement = document.getElementById("author") as HTMLInputElement;
    let libraryID : HTMLInputElement = document.getElementById("libraryID") as HTMLInputElement;
    
    let titleValue = title.value;
    let authorValue = author.value;
    let libraryIDValue = +libraryID.value;
    let newlyAddedBook = createBook(titleValue,authorValue,libraryIDValue);
    console.log(newlyAddedBook);
    console.log(findAuthors());

}


/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
export function createBook(title: string, author: string, libraryID: number): Book {
    //implement this
     let newBook: Book ={
        title:title,
        author:author,
        libraryID:libraryID
     }
     library.push(newBook);
     
     return newBook;
}

/**
 * 
 * @returns {undefined} 
 */
export function scramble(): void {
    let titles = findTitles();
    let titleSplit = titles.join(" ").split(" ");
    titleSplit.sort((a,b)=>a.length - b.length);
    let titleString = titleSplit[0];
    for (let i =1; i<titleSplit.length; i++){
        if(titleSplit[i].length===titleSplit[i-1].length){
            titleString += " " + titleSplit[i];
        }else{
            titleString = "\n" + titleSplit[i];
        }
    }

    let textArea: HTMLInputElement |null = document.getElementById("displayArea") as HTMLInputElement;
    if(textArea){textArea.innerHTML = titleString;}


}



