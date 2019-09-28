const User = require("../models/user");

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "You must enter Email vs Passwrod" });
  }

  // Check User with Email has Existed yet.
  User.findOne({ email: email }, function (error, userCreated) {
    if (error) {
      return next(error);
    }

    if (userCreated) {
      return res.status(422).send({ error: "Email is existed" });
    }

    // Create A new User
    const newUser = new User({
      email: email,
      password: password
    });

    newUser.save(function (err) {
      if (err) {
        return next(err);
      }

      return res.json(newUser);
    });
  });
};
