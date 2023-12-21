const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    grandTotal: {
        type: Number,
        required: true,
    },
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            totalPrice: {
                type: Number,
                required: true,
            }
        }
    ],
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('order', OrderSchema);