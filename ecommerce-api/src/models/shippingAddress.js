import mongoose from "mongoose";

const shippingadressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    city:{
        type: String,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    postalCode:{
        type: String,
        required: true,
        length: 5
    },
});

const ShippingAdress = mongoose.model('ShippingAdress', shippingadressSchema);

module.exports = ShippingAdress;