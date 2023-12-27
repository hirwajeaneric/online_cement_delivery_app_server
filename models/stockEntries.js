const { Schema, model } = require('mongoose');

const StockEntrySchema = new Schema({
    type: {
        require: true,
        type: String,
        enum: {
            values: [
                'Portland Cement',
                'Blended Cement',
                'White Cement',
                'Rapid Hardening Cement',
                'Low Heat Cement',
                'Sulfate Resistant Cement',
                'High Alumina Cement',
                'Expansive Cement',
                'Oil Well Cement'
            ],
            message: 'Types not recognized'
        }
    },
    incomingStock: {
        required: true,
        type: Number,
    }
}, { timestamps: true });

module.exports = model('stockEntry', StockEntrySchema);