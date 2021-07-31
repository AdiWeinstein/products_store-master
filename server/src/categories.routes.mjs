import express from 'express';
import {getCategories} from './categories.services.mjs';
import {addCategory} from './categories.services.mjs';
import {deleteCategory} from './categories.services.mjs';

export const categoriesRouter = express.Router();


categoriesRouter.get('/', (req, res) => {
    res.send(getCategories());
});

categoriesRouter.post('/:category', (req, res) => {
    res.send(addCategory(req.params.category));
});

categoriesRouter.delete('/:category', (req, res) => {
    res.send(deleteCategory(req.params.category));
});
