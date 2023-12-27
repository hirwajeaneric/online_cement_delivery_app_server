const { Schema, model } = require('mongoose');

const CementTypeSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number
    }
}, { timestamps: true });

module.exports = model('cementType', CementTypeSchema);