/* query selector */
/* returns only one element, that matches the criteria */
const bookName = document.querySelector('#book-list li:nth-child(2)');

// console.log(bookName);

/* 
    querySelectorAll returns the Nodelist through we can applay all array methods
*/
const bookList = document.querySelectorAll('#book-list li .name');
console.log(bookList);

bookList.forEach(book => {
    // console.log(book);
    //console.log(book.textContent)
    console.log(book.innerHTML);
})

