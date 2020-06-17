
const btns = document.querySelectorAll('#book-list .delete');
const bookList = document.querySelector('#book-list');
/*btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    });
});
*/

/* Event bubbling
    when an event ocuurs in a element that event will bubbled up the parent
    using this concepts we can attach more optimal way of event handling,
    distinguishing the events based on the element is done
*/

bookList.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        e.target.parentElement.remove();
    }
});





