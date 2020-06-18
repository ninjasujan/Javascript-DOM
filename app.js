
document.addEventListener('DOMContentLoaded', (e) => {
    /* working with form */

    // we can directly access the form using forms array using index or id of the form
    const bookList = document.querySelector('#book-list ul');
    const addBookForm = document.forms['add-book'];

    /* deleting a book from a list */
    bookList.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            e.target.parentElement.remove();
        }
    });


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

    /* hide and showing the books */
    const hideBox = document.querySelector('#hide');

    hideBox.addEventListener('change', (e) => {
        if (hideBox.checked) {
            bookList.style.display = 'none';
        } else {
            bookList.style.display = 'initial';
        }
    });

    /* filtering the books by name */
    const searchBar = document.forms['search-books'].querySelector('input');

    searchBar.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const books = bookList.querySelectorAll('li');
        books.forEach(book => {
            const bookTitle = book.firstElementChild.textContent;
            if (bookTitle.toLocaleLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        })
    });


    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');

    tabs.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            const targetPanel = document.querySelector(e.target.dataset.target);
            panels.forEach(panel => {
                if (panel == targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            })
        }
    })
});











