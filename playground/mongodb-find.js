'use strict';

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb Server');

//    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
//     console.log('Todos array:');
//     console.log(JSON.stringify(docs, undefined, 2));
    
//    }, (err)=> {
//        console.log('Unable to fetch Users');
//    })
   db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count:  ${count}`);
    
   }, (err)=> {
       console.log('Unable to fetch Users');
   })
  
    db.close();
});
