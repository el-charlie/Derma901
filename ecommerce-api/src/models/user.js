import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    displayNme:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    hashPassword:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:['admin', 'customer', 'guest'],
    },
    avatar:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
        max:10,
    },
    isActive:{
        type:Boolean,
        default: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;