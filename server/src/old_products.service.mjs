import loadJson from 'load-json-file';
// import { getProductsCollection } from '../db/connect.mjs'
import { getUser} from './users.service.mjs';
import Mongo from 'mongodb'
// export let products = loadJson.sync('./data/products.json');

const { ObjectId } = Mongo;

export function getProducts(filter = {}) {
    const query = {};
    if(filter.title){
        query.title = new RegExp(filter.title , 'i');
    }

    if(filter.maxPrice || filter.minPrice){
        query.price = {};

        if (filter.maxPrice)
            query.price.$lt = parseInt(filter.maxPrice)
        if (filter.mixPrice){
                query.price.$gt = parseInt(filter.minPrice)
            }
    }
    return getProductsCollection()
        .find({})
        .toArray();
}

// export function getProduct(id) {
//     const [ product ] = products.filter(product => product.id == id);
//     return product
// }
export async function getProduct(id) {
    const product = await getProductsCollection()
        .findOne({
            _id: ObjectId(id)
        })

    const owner = await getUser(product.userId)
    product.owner = owner;
    return product;
}

// export function addProduct(product) {
//    return products.unshift(product);
//     console.log(product);
// }

export function addProduct(product) {
    return getProductsCollection()
        .insertOne(product);
}


// export function deleteProduct(id) {
//     products = products.filter(product => product.id != id);
// }

export function deleteProduct(id) {
    return getProductsCollection()
        .deleteOne({
            _id: ObjectId(id)
        });
}

// export function editProduct(id, newProduct) {
//     const [ product ] = products.filter(product => product.id == id);
//     product.title = newProduct.title;
//     product.category = newProduct.category;
//     product.price = newProduct.price;
// }


export function editProduct(id, newProduct) {
    return getProductsCollection()
        .updateOne({
            _id: ObjectId(id)
        }, {
            $set: newProduct
        })
}

// export function getProductsByUserId(userId) {
//     return products.filter(product => product.userId == userId);
// }

export function getProductsByUserId(userId) {
    return getProductsCollection()
    .find({userId: userId})
    .toArray()
}