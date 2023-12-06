// Book mongoose model
export default mongoose => {

    const Book = mongoose.model("book", mongoose.Schema(
        {
            title: { type: String, unique: true },
            author: { type: String },
            genre: { type: String },
            publishDate: { type: Date, default: Date.now },
            currentEdition: { type: Number }
        },
        {
            timestamps: true
        }
    ));

    // Update indexes in case Schema changes are done
    Book.syncIndexes();

    return Book;
};