// const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var objId = new ObjectID
console.log(objId);


/*Variable Distracturing: It is when we pull out an element from the object and
make it as a varaible. Example:
var user = {
    name: "Ab.Wahab",
    age: 23
};
var {
    name
} = user;
console.log(name);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to Mongo Server");
    }
    // "insertOne" adds the new data into database
    // db.collection('Todos').insertOne({
    //     text: "Something should be done",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to add todo", err);
    //     }
    //     // the "ops" attribute will store all the docs that are we are about to store in database
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     name: "Ab.Wahab",
    //     age: 23,
    //     location: "Kabul/Afghanistan"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to add the todo", err);
    //     }
    //     // printing out the storing time of the first element of the object
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});