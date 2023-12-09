import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

import Book from '../models/index.js';

// CRUD operations

// Creates a new Book on collection
export function createBook(req, res) {
    // TODO : check if all request constraints are complied with
    // book fields needed: title, author, genre, year, currentEdition
    console.log(`req: ${req.body}`)

    // create new Book model instance
    const book = new Book
        ({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publishDate: req.body.year,
            currentEdition: req.body.currentEdition
        });

    book.save()
        .then(data => {
            res.send({
                message: `${req.body.title} was added to your shelve`,
                bookData: data
            });
        })
        .catch(err => {
            if (err.code === 11000) {
                res.status(400).send({
                    message: `'` + book.title + `' already exists in your personal library!`
                });
            }
            else {
                res.status(500).send({
                    message: `Something went wrong when adding ` + book.title + `to your personal library. Error: ` + err.message
                });
            }
        });
}

// Updates Book information on collection
export function updateBook(req, res) {
    // TODO : check if all request constraints are complied with
    // book fields needed: title, author, genre, year, currentEdition
    console.log(`req: ${req.body}`)

    // TODO: Parse update information on request


    Book.save()
        .then(data => {
            res.send({
                message: `${req.body.title} was added to your shelve`,
                bookData: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// Gets the book for the specified _id
export function getBookById(req, res) {

    const bookId = req.body.id;

    Book.findById(bookId)
        .then(data => {
            res.send({
                message: `Book with the ID:${bookId} was found`,
                bookData: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not find BookID:${bookId}`
            });
        });
}

export function getBookByName(req, res) {
    const bookName = req.body.name;
}

export function getAllBooks(req, res) {
    const bookName = req.body.name;

}

// Delete all Books by req.body.author
export function deleteBook(req, res) {
    // Try Catch block to check if req.body.author is != null
    const query = { author: req.body.author };

    Book.deleteMany(query)
        .then(
            res.send({
                message: `All books by ${req.body.author} were removed from db`
            })
        )
        .catch((err, obj) => {
            console.log("could not delete records. Error: ", err);
            console.log(obj.result.n);
        });
}

// Clean Book collection
export function cleanBooks(req, res) {

    Book.deleteMany({})
        .then(
            res.send({
                message: 'All books removed from Mongo Book collection.'
            })
        )
        .catch((err, obj) => {
            console.log("could not delete records. Error: ", err);
            console.log(obj.result.n);
        })
}

/// Use Faker or Moq alternatives to populate the Books collection
export function populateBooks(req, res) {
}