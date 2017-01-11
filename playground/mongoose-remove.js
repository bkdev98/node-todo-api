const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

 // Todo.remove({}).then((result) => {
 //   console.log(result);
 // });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '58768d254dd6277e9a3512e7'}).then((todo) => {});

Todo.findByIdAndRemove('58768d254dd6277e9a3512e7').then((todo) => {
  console.log(todo);
});
