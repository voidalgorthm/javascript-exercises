const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = ([...books]) => {
  let array = [...books];
  let bookTitles = [];

  array.forEach(book => {
    bookTitles.push(book.title);
  });

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
