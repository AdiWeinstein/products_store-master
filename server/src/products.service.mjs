import loadJson from 'load-json-file';
import {getProductsCollection} from './db/connect.mjs'

// export let products = loadJson.sync('./data/products.json');

// 
export function getProducts(){
    return getProductsCollection()
           .find({})
           .toArray();
}

// export function getProduct(id) {
//     const [ product ] = products.filter(product => product.id == id);
//     return product
// }
export function getProduct(id){
    return getProductsCollection()
           .find({id: parseInt(id)})
           .toArray();
}

export function addProduct(product) {
    products.unshift(product);
    console.log(product);
}

export function deleteProduct(id) {
    products = products.filter(product => product.id != id);
}

export function editProduct(id, newProduct) {
    const [ product ] = products.filter(product => product.id == id);
    product.title = newProduct.title;
    product.category = newProduct.category;
    product.price = newProduct.price;
}

export function getProductsByUserId(userId) {
    return products.filter(product => product.userId == userId);
}