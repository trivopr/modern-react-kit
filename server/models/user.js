const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

// define a schema
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

// Hash Password
userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    if (err) { return next(err); }

    user.password = hash;
    next();
  });
})

// compile our model
const User = mongoose.model("User", userSchema);

// create a document
module.exports = User;
