const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const workoutRoutes = require("./routes/workouts");
const planRoutes = require("./routes/plans");
const commentRoutes = require("./routes/comments");
const path = require("path")

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("build"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());


app.use(cors({
  origin: '/',
  credentials : true
}))

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/workouts", workoutRoutes);
app.use("/plans", planRoutes);
app.use("/comment", commentRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Server Running
app.listen(process.env.PORT || 2121, () => {
  console.log("Server is running, you better catch it!");
});
