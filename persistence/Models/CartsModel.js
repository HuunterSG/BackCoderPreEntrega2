import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    products: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true
    }
})

export const cartModel = mongoose.model('Carts', cartSchema)