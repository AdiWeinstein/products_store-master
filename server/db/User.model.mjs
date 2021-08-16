import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true,
        // unique: true
    },
    username: {
        type: String,
        maxLength:10
    },
    phone: String,
    password:{
        type: String,
        required: true,
        minLength: 6,
        select: false,
        validate:{
        validator: v => {
            if(v.length < 6) return false;
            if(!/[A-Z]/.test(v)) return false;
            if(!/[\*\?\-\_\!]/.test(v)) return false;

            return true;
        },
        messege: prop => `${prop.value} is an invalid password!`,
        },
}});


export const User = mongoose.model('User', userSchema);