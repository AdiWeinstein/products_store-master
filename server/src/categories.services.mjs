import loadJson from 'load-json-file';

let categories = loadJson.sync('./data/categories.json');

export function getCategories() {
    return categories;
}

export function addCategory(Category) {
    categories.push(Category);
}

export function deleteCategory(Category) {
    categories = categories.filter(category => category != Category);
}