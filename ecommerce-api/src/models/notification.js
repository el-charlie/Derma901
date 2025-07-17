import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    products:[
        {product:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required:true,
        },
        readAt:{
            type:Date,
            default: Date.now,
        },
    }
    ],
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;