import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    phone: String,
    password: String,
});

export const User = mongoose.model('User', userSchema);