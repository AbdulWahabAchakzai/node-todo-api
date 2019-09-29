var mongoose = require('mongoose');


// making the model to specify the type of data which is going to be stored
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false

    },
    completedAt: {
        type: Number,
        default: null

    }

});

module.exports = {
    Todo
};