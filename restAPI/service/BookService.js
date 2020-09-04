'use strict';


/**
 * Add a new book to the store
 *
 * body Book Book object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addBook = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a book
 *
 * bookId Long Book id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteBook = function(bookId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find book by ID
 * Returns a single book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "author",
  "id" : 0,
  "title" : "doggie"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List books
 * Returns an array of books
 *
 * returns Book
 **/
exports.listBook = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "author" : "author",
  "id" : 0,
  "title" : "doggie"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

