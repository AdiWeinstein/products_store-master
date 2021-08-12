import express from 'express';
import logger from 'morgan';
import './db/connect.mjs';

// import { productsRouter } from './src/products.routes.mjs';
import { usersRouter } from './src/users.routes.mjs';
// import { categoriesRouter } from './src/categories.routes.mjs';
// import { postsRouter } from './src/posts.routes.mjs'

export const app = express();

app.use(logger('dev'));

app.use(express.json());

// app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
// app.use('/api/categories', categoriesRouter);
// app.use('/api/posts', postsRouter);

app.use(express.static('../react/build/'));

app.listen(8080);

console.log("Server is listening on http://localhost:8080");