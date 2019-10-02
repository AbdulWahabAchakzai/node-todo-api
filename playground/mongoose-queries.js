const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');



// var id = "5d8b774e23d915006828472211";

// if (!ObjectID.isValid(id)) {
//     console.log("ID is not valid");
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// /*It will just grabe the first one that matches the quiry and it will return the result 
// as an object */
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Todo not found");
//     }
//     console.log("Todo fineById", todo);
// }).catch((e) => console.log(e));

var UserId = "5d8f9b93ec2b773c70491576";

User.findById(UserId).then((User) => {
    if (!User) {
        return console.log("User not found");
    }
    console.log("User findById", User)

}).catch((e) => console.log(e));