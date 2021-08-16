import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
   
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    "store": {
        "city": String,
        "street":String,
        "quantity":{
            type: Number,
            min: 0,
            set: v => Math.floor(v),
        }
    }

});

export const Product = mongoose.model('Product', productSchema);

/*
        "id": 1,
        "userId": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "store": {
            "city": "tel aviv",
            "stree": "dizengoff",
            "quantity": 15
        }
*/