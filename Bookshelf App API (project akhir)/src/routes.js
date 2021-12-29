const {
  addBookHandler,
  getAllBookHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handlers');

const routes = [{
  method: 'POST',
  path: '/books',
  handler: addBookHandler,
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBookHandler,
},
{
  method: 'GET',
  path: '/books/{bookId}',
  handler: getBookByIdHandler,
},
{
  method: 'PUT',
  path: '/books/{bookId}',
  handler: updateBookByIdHandler,
},
{
  method: 'DELETE',
  path: '/books/{bookId}',
  handler: deleteBookByIdHandler,
},
];

module.exports = routes;
