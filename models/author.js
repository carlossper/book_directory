const { Schema } = require("mongoose")
const { Book } = require("")
module.exports = async mongoose => {
  const Author = await mongoose.model("author", mongoose.Schema(
    {
      name: { type: String },
      nationality: { type: String },
      age: { type: Number },
      publishedBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
    },
    {
      timestapms: true
    }
  ))
}