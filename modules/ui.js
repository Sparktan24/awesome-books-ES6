/* eslint-disable import/extensions */
import { store } from '/modules/store.js';

export default class UI {
  static displayBooks = () => {
    const books = store.getBooks();
    books.forEach((book) => UI.addBookList(book));
  }

  static addBookList = (book) => {
    const bookList = document.getElementById('book-list');

    const content = document.createElement('div');
    content.innerHTML = `
    <div>"${book.title}" By ${book.author}</div>
    <button id="book-num-${book.id}"class="delete">Remove</button>
    `;
    bookList.appendChild(content);
    content.classList.add('book-row-content');
  }

  static deleteBook = (element) => {
    if (element.classList.contains('delete')) {
      element.parentElement.remove();
    }
  }

  static clearFields = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}