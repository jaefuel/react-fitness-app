const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const Workout = require("../models/Workout");


exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      console.log("User doesn't exist")
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log("You are logged in. ")
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/home");
    });
  })(req, res, next);
};

exports.postLoginGoogle = (req, res, next) => {
  passport.authenticate('google', { scope:
    ['profile' ] }
)};

exports.postLoginGoogleCallback = (req, res, next) => {passport.authenticate( 'google', { failureRedirect: '/login' }),
(req, res) => {
  res.redirect('/home')
}};

exports.postLogout = (req, res) => {
  
  req.logout(() => {
    console.log('User has logged out.')
    console.log(req.session)

    req.session.destroy((err) => {
      if (err)
      {
        console.log("Error : Failed to destroy the session during logout.", err);
      }
        
      req.user = null;
      console.log("Session ended")
      res.redirect("/");
    })

  }) 
}

exports.getUser = (req, res) => {
  res.send(req.user);
}

exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/signup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });



  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        console.log("Account with that email address or username already exists.")
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("/signup");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }

        Workout.create({
          name: "Rest Day",
          user: user
        });

        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          return res.redirect("/home");
        });
      });
    }
  );
};
