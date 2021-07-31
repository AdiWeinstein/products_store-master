import loadJson from 'load-json-file';

let users = loadJson.sync('./data/users.json');

export function getUsers() {
    return users;
}

export function getUser(userId) {
    const [ user ] = users.filter(user => user.id == userId);
    return user;
}

export function addUser(user) {
    users.push(user);
}

export function deleteUser(userId) {
    users = users.filter(user => user.id != userId);
}

export function editUser(userId, newUser) {
    const [ user ] = users.filter(user => user.id == userId);
    user.email = newUser.email;
}
