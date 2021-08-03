import express from 'express';
import { getUsers } from './users.service.mjs';
import { getUser } from './users.service.mjs';
import { addUser } from './users.service.mjs';
import { editUser } from './users.service.mjs';
import { deleteUser } from './users.service.mjs';
import { getProductsByUserId } from './products.service.mjs';
import { getPostsByUserId } from './posts.services.mjs';

export const usersRouter = express.Router();

/*
REST API - 

GET     /[object name in plural]/ -      Get all objects
POST    /[object name in plural]/ -      Create new object
GET     /[object name in plural]/:id -   Get single object by id
PUT     /[object name in plural]/:id-    Edit object by id
DELETE  /[object name in plural]/:id-    Delete object by id

Example:
GET /users/1 - Get user object where id===1 
GET /users/1/products - Get all products where users id === 1

GET /categories/mobile devices/products - Get all producsts where cateogry == mobile devices

Posts
Images
Users

GET /posts/5/images - Get all images of post with ID === 5
GET /users/10/posts - Get all posts of user with ID === 10
GET /posts/10 - Get post with ID 10
GET /posts/23/comments - Get all comments of post with ID === 23
POST /users/9/images - Create a new image where user id === 9

*/

usersRouter.get('/', async(req, res) => {
    res.send(await getUsers());
});

usersRouter.get('/:id', async(req, res) => {
    res.send(await getUser(req.params.id));
});

usersRouter.get('/:id/products', async(req, res) => {
    res.send(await getProductsByUserId(req.params.id));
});

usersRouter.post('/', async(req, res) => {
    res.send(await addUser(req.body));
});

// Update single product from the list
usersRouter.put('/:id', async(req, res) => {
    res.send(await editUser(req.params.id, req.body))
});

// Delete single product from the list
usersRouter.delete('/:id',async(req, res) => {
    res.send(await deleteUser(req.params.id));
});

usersRouter.get('/:id/posts', (req, res) => {
    res.send(getPostsByUserId(req.params.id));
});
