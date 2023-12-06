import { Router } from "express";
import { createBook, deleteBook, cleanBooks, getBookById } from "../controllers/book.js";

const router = Router();

export default function bookRoutes(app) {
    router.get("/:id", getBookById);

    router.post("/", createBook);

    router.delete("/", deleteBook);

    router.delete("/cleanAllBooks", cleanBooks);

    app.use("/api/cmbooks", router);
};
