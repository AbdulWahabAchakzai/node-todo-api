var mongoose = require('mongoose');

var User = mongoose.model('User', {
    Email: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    }
});

module.exports = {
    User
};