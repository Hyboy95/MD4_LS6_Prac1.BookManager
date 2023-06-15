import { Router } from 'express';
import { BookController } from '../controllers/book.controller';
import multer from 'multer';
const upload = multer();
export const bookRoutes = Router();

bookRoutes.get('/create', BookController.getCreatePage);
bookRoutes.post('/create', upload.none(), BookController.addNewBook);
bookRoutes.get('/list', BookController.getListBook);
bookRoutes.get('/update/:id', BookController.getUpdatePage);
bookRoutes.post('/update', upload.none(), BookController.updateBook);
bookRoutes.get('/delete/:id', BookController.deleteBook);




