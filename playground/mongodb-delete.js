'use strict';

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb Server');
    const userID = new ObjectID("5ada0bedc4e4d9a5511c4a1e");
    // db.collection('Users').deleteMany({name: 'Mark'}).then((result) => {
    //     console.log(result.result.n);
    // })
    db.collection('Users').findOneAndDelete(userID).then((result) => {
        console.log(result);
    })
  
    db.close();
});
