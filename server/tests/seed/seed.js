const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  email: 'bkdev98@gmail.com',
  password: 'user1pass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, 'sunghokage').toString()
  }]
}, {
  _id: userTwoId,
  email: 'sunghokage@gmail.com',
  password: 'user2pass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, 'sunghokage').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 1235,
  _creator: userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
