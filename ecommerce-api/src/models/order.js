import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
        quantity:{
            type:Date,
            default: Date.now,
        },
        price:{},
    }
    ],
    shippingAddress:{},
    paymentMethod:{},
    shippingCost:{},
    totalPrice:{},
    status:{},
    paymentStatus:{},

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;