import express from 'express';
import { errorHandler } from './middlewares/error.middleware.js';
import authRouter from './routers/auth.router.js'
import bookRouter from './routers/book.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/images', express.static('./src/images/'))

app.get('/', (req, res) => res.send('Hello World!'));

// this for user / admin register and authonication
app.use('/api/auth',authRouter);

// for book 
app.use('/api/books', bookRouter);

app.use(errorHandler);
export default  app;