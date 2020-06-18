
/* working with form */

// we can directly access the form using forms array using index or id of the form
const bookList = document.querySelector('#book-list ul');
const addBookForm = document.forms['add-book'];
console.log(addBookForm);

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookName = addBookForm.book.value;

    // create element
    const bookEle = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const li = document.createElement('li');

    // add content
    bookEle.textContent = bookName;
    deleteBtn.textContent = 'delete';

    // add class name
    // bookEle.classList.add('name');
    // deleteBtn.classList.add('delete');

    bookEle.setAttribute('class', 'name');
    deleteBtn.setAttribute('class', 'delete');
    console.log(deleteBtn.getAttribute('class'));

    /* check for existence of the attribute */
    console.log(bookEle.hasAttribute('class'));
    // deleteBtn.removeAttribute('class');

    // append child
    li.appendChild(bookEle);
    li.appendChild(deleteBtn);
    bookList.appendChild(li);

});









