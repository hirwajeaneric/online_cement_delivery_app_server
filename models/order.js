const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    grandTotal: {
        type: Number,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['Pending','Confirmed', 'Paid' ,'Delivered'],
            message: 'Unrecognized status'
        }
    },
    cements: [
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
    ]
}, { timestamps: true });

module.exports = model('order', OrderSchema);