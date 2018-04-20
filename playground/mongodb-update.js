'use strict';

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb Server');
    
    // db.collection('Users').deleteMany({name: 'Mark'}).then((result) => {
    //     console.log(result.result.n);
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ada0bfac4e4d9a5511c4a20")
    }, {
        $set: {
            name: 'Mark'
        },
        $inc: {
            age: 2
        }
    },
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
  
    db.close();
});
