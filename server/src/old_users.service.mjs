// import loadJson from 'load-json-file';
import { getUsersCollection } from '../db/connect.mjs'
import Mongo from 'mongodb';
// let users = loadJson.sync('./data/users.json');
const { ObjectId }  = Mongo;
// export function getUsers() {
//     return users;
// }

export function getUsers(){
    return getUsersCollection()
           .find()
           .toArray();
}

// export function getUser(userId) {
//     const [ user ] = users.filter(user => user.id == userId);
//     return user;
// }

export function getUser(id) {
    return getUsersCollection()
           .findOne({_id: ObjectId(id)})
    }

export function addUser(user) {
    return getUsersCollection()
    .insertOne(user)
}

export function deleteUser(userId) {
    return getUsersCollection()
    .deleteOne({_id: ObjectId(userId)})
}

export function editUser(id, newUser) {
    return getUsersCollection()
    .updateOne(
        {_id: ObjectId(id)},
        {$set: newUser}
    )
}
