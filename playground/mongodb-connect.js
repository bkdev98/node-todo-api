// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insert([{
    name: 'Minh Sung',
    age: 18,
    location: 'Kyoto'
  }, {
    name: 'Thien Bach',
    age: 18,
    location: 'California'
  }, {
    name: 'Tommy Du',
    age: 20,
    location: 'HCM'
  }, {
    name: 'Huu Thi',
    age: 18,
    location: 'Japan'
  }], (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
