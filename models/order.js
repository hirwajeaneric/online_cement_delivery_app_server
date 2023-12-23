const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    grandTotal: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['Pending','Confirmed', 'Paid' ,'Delivered'],
            message: 'Unrecognized status'
        }
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