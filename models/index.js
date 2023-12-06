import mongoose from 'mongoose';
import bookModel from '../models/book.js';

const Book = bookModel(mongoose);

export default Book;