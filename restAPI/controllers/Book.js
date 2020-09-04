'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.addBook = function addBook (req, res, next, body) {
  Book.addBook(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBook = function deleteBook (req, res, next, bookId, api_key) {
  Book.deleteBook(bookId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookById = function getBookById (req, res, next, bookId) {
  Book.getBookById(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listBook = function listBook (req, res, next) {
  Book.listBook()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
