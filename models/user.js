const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    fullName: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String,
        unique: true
    },
    phone: {
        require: false,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    role: {
        require: true,
        type: String,
        enum: {
            values: ['admin', 'client'],
            message: 'Unknown role'
        }
    },
});

module.exports = model('user', UserSchema);