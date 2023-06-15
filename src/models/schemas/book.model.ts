
import { Schema, model } from "mongoose";

interface IBook {
    title: string;
    description: string;
    author: string;
}

const bookSchema = new Schema<IBook>({
    title: String,
    description: String,
    author: String,
})

export const Book = model<IBook>('Book', bookSchema);
