const { Schema, model } = require('mongoose');

const AvailableCementSchema = new Schema({
    type: {
        require: true,
        type: Schema.Types.ObjectId,
        ref: "cementType"
    },
    status: {
        type: String,
        enum: {
            values: ['In stock', 'Unavailable'],
            message: 'Status not allowed'
        },
        default: 'In stock'
    },
    quantity: {
        type: Number,
        default: 1
    },
    updateDate: {
        type: Date,
        required: false,
    }
});

module.exports = model('availableCement', AvailableCementSchema);