//  const MongoClient = require("mongodb").MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to Mongo Server");
    }
    // Fetching data from the database

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log("Unable to fitch the data", err);
    // })

    db.collection('Users').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })




    // db.close();
});