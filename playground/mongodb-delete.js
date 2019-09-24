//  const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to Mongo Server");
    }
    console.log("Connected to MongoDb Server");

    //    deleteMany()
    // db.collection("Todos").deleteMany({
    //     text: "Something about todo"
    // }).then((result) => {
    //     console.log(result);
    // })

    // deleteOne()
    // db.collection('Todos').deleteOne({
    //     text: 'working'
    // }).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete()
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({
    //     name: 'Ab.Wahab'
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5d8a7ecdcaf8d70f8c3947c6")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });







    // db.close();
});