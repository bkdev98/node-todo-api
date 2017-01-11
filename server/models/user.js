var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }
});

// var newUser = new User({
//   email: 'contact@bkdev.me'
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user', e);
// });

module.export = {User}
