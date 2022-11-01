import Book from './modules/book.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';
import { store } from './modules/store.js';

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = store.count;

  const book = new Book(title, author, id);

  UI.addBookList(book);

  store.addBook(book);

  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  const btnID = e.target.id;
  const arrValues = btnID.split('-');
  const idString = arrValues[arrValues.length - 1];
  const id = parseInt(idString, 10);
  // Remove book from store
  store.removeBook(id);
});

const dt = DateTime.now();

document.getElementById('date').innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');
const tableContainer = document.querySelector('.books-table-container');
const booksForm = document.querySelector('.book-form');
const contactInfo = document.querySelector('.contact-info');

list.addEventListener('click', () => {
  tableContainer.classList.remove('hide');
  booksForm.classList.add('hide');
  contactInfo.classList.add('hide');
});
addNew.addEventListener('click', () => {
  booksForm.classList.remove('hide');
  contactInfo.classList.add('hide');
  tableContainer.classList.add('hide');
});
contact.addEventListener('click', () => {
  contactInfo.classList.remove('hide');
  booksForm.classList.add('hide');
  tableContainer.classList.add('hide');
});
