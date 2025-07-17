import mongoose from "mongoose";

const paymentmethodSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    card:{},
    cardHolder:{},
    experyDate:{},
});

const PaymentMethod = mongoose.model('PaymentMethod', paymentmethodSchema);

module.exports = PaymentMethod;