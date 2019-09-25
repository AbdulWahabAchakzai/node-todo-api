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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5d8a7be7caf8d70f8c3946c7")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5d8a294f681c0225189e742e')
    }, {
        // setting name field
        $set: {
            name: 'Zafar'
        },
        // incrementing age by 5
        $inc: {
            age: 5
        }

    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


});