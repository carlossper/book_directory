import mongoose from 'mongoose';
import dbConfig from '../database/config.js';

const dbConnection = {
    mongooseSingleton: mongoose,
    address: dbConfig.uri,
    connectOptions: dbConfig.options
};

export default dbConnection;