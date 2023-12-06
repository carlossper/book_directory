//literal for db address, done in this way for the sake of simplicity
//TODO: learn the best way to handle mongo db credentials
const uri = "mongodb://localhost:27017/booksDB";
const options = {
  authSource: "admin",
  user: "AdminCrush",
  pass: "qF48A99312345",
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const dbConfig = {
  uri, 
  options
};

export default dbConfig;