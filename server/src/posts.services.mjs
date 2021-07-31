import loadJson from 'load-json-file';

let posts = loadJson.sync('./data/posts.json');

export function getPosts() {
    return posts;
}

export function getPost(postId) {
    const [ post ] = posts.filter(post => post.id == postId);
    return post;
}

export function addPost(post) {
    posts.push(post);
}

export function deletePost(postId) {
    posts = posts.filter(post => post.id != postId);
}

export function editPost(postId, newPost) {
    const [ post ] = posts.filter(post => post.id == postId);
    post.title = newPost.title;
}

export function getPostsByUserId(userId) {
    return posts.filter(post => post.userId == userId);
}
