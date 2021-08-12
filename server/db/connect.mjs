
//----mongoose----

import Mongoose from "mongoose";

Mongoose.connect('mongodb://localhost:27017/fakestore', {useNewUrlParser: true, useUnifiedTopology: true});


/* 
----- mongo ----
import Mongo from 'mongodb';

const client = new Mongo.MongoClient('mongodb://localhost:27017');

let db;

client.connect(async () => {
    db = client.db('fakestore');
})

export function getProductsCollection() {
    return db.collection('Products');
}
export function getUsersCollection() {
    return db.collection('Users');
}
--------------------------------------------
*/
