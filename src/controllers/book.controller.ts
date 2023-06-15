import { Book } from "../models/schemas/book.model";

export class BookController {
    static async getCreatePage(req: any, res: any) {
        res.render("createBook");
    }

    static async addNewBook(req: any, res: any) {
        try {
            const bookNew = new Book(req.body);
            const book = await bookNew.save();
            if (book) res.redirect('/list');
            else res.render('error');
        } catch (err) {
            res.render(err.message);
        }
    }

    static async getListBook(req: any, res: any) {
        try {
            const books = await Book.find();
            res.render("listBook", { books: books });
        } catch(err) {
            res.render(err.message);
        }
    }

    static async getUpdatePage(req:any, res: any) {
        try {
            const book = await Book.findOne({_id: req.params.id});
            console.log(book, 'book');
            if (book) {
                res.render("updateBook", {book:book})
            } else res.render('error');
        } catch(err) {
            res.render(err.message);
        }
    }

    static async updateBook(req:any, res:any) {
        try {
            const book = await Book.findOne({ _id: req.body.id });
            book.title = req.body.title;
            book.description = req.body.description;
            book.author = req.body.author;
            await book.save();
            if (book) res.redirect('/list');
            else res.render('err');
        } catch(err) {
            res.render(err.message);
        }
    }

    static async deleteBook(req:any, res:any) {
        try {
            // const book = await Book.findOne({_id:req.params.id});
            if (req.params.id) {
                await Book.deleteOne({_id: req.params.id});
                res.redirect('/list')
            } else {
                res.render("error");
            }
        } catch(err) {
            res.render(err.message);
        }
    }
}