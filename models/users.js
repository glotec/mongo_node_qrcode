const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        req: true
    },
    email: {
        type: String,
        req: false
    },
    phno: {
        type: String
    }
});

module.exports = mongoose.model('user', UserSchema);