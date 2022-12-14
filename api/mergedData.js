import { getSingleAuthor, getAuthorBooks } from './authorData';
import { getSingleBook } from './bookData';

// for merged promises
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject) => {
    getSingleAuthor(bookObject.author_id)
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
  }).catch(reject);
});

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(firebaseKey)
      .then((booksArray) => resolve({ ...authorObject, booksArray }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
