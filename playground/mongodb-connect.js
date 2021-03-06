'use strict';

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Todo something',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo');            
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Todos').insertOne({
        text: 'Do some research again',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user');            
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});
