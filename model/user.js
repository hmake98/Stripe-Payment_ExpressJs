const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    name: {
        type: String,
        required: [true, 'Password is required']
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;