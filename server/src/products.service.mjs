// import { getUser} from './users.service.mjs';
import Mongo from 'mongodb'
import {Product} from '../db/Product.model.mjs';
const {ObjectId} = Mongo;

export function getProducts(filter = {}) {
    const query = {};

    if (filter.title) {
        query.title = new RegExp(filter.title, 'i');
    }

    if (filter.maxPrice || filter.minPrice) {
        query.price = {};

        if (filter.maxPrice) 
            query.price.$lt = parseInt(filter.maxPrice)

        if (filter.mixPrice) 
        
            query.price.$gt = parseInt(filter.minPrice)
    }

    return Product.find(query);
}

export async function getProduct(id) {
    return Product.findOne( {_id: ObjectId(id)} )
}

export async function addProduct(product) {
    const newProduct = new Product(product)
    return newProduct.save();
}

export async function deleteProduct(id) {
    return Product.findOneAndDelete( {_id: ObjectId(id)} )
};

export async function editProduct(id, newProduct) {
    return Product.findOneAndUpdate(
        { _id: ObjectId(id)},
        { $set: newProduct }
    )
};

export function getProductsByUserId(userId) {
    return Product.find({userId: userId})

}