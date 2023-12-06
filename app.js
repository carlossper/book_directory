import express, { json, urlencoded } from 'express';

const app = express();
const PORT = 8800;

// application/json
app.use(json());

// application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

import dbConnection from './database/connection.js';
try {
    dbConnection.mongooseSingleton.connect(dbConnection.address, dbConnection.connectOptions);
    console.log("Connected to Mongo!")
}
catch (err)
{
    console.error(err);
}

// require("./routes/book.js")(app);
import routes from './routes/book.js';
routes(app);

// app.get(`/`, (req, res) => {
//     res.send(`Book directory`);
// });

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
