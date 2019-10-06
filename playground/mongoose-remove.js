const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('../server/db/mongoose');
const {
    Todo
} = require('../server/models/todo');

const {
    User
} = require('../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove('5d999f7acaf8d70f8c39c72a').then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove({
    _id: '5d99a03bcaf8d70f8c39c769'
}).then((result) => {
    console.log(result);
})