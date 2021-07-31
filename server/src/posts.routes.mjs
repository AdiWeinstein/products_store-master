import express from 'express';
import {getPosts} from './posts.services.mjs';
import {getPost} from './posts.services.mjs';
import {addPost} from './posts.services.mjs';
import {deletePost} from './posts.services.mjs';
import {editPost} from './posts.services.mjs';

export const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
    res.send(getPosts());
});

postsRouter.get('/:id', (req, res) => {
    res.send(getPost(req.params.id));
});


postsRouter.post('/', (req, res) => {
    res.send(addPost(req.body));
});

postsRouter.put('/:id', (req, res) => {
    res.send(editPost(req.params.id, req.body))
});


postsRouter.delete('/:id', (req, res) => {
    res.send(deletePost(req.params.id));
});


