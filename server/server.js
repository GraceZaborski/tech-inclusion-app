const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");
require("dotenv").config();

const app = express();

//setting up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//db connection string
const dbURI = process.env.DATABASE_URL;

// db connection
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "inclusivity_app",
  })
  .then((res) => {
    app.listen(process.env.BE_PORT, () =>
      console.log(`Server is listening on ${process.env.BE_PORT}`)
    );
  })
  .catch((err) => console.log(err));

//register a user
app.post(`/register`, async (req, res) => {
  const user = req.body;
  let dbUser;

  //check the collection
  const takenUsername = await User.findOne({ username: user.username });

  if (takenUsername) {
    res.json({ error: "Username has already been taken" });
  } else {
    //create a new document
    try {
      dbUser = new User({
        username: user.username,
        password: user.password,
        userType: user.userType,
        email: user.email,
      });
    } catch (error) {
      console.log(error.message);
    }
    dbUser.save();
    res.json({ message: "Success" });
  }
});

//register a user
app.get(`/login`, async (req, res) => {
  const userLoggingIn = req.body;

  User.findOne({ username: userLoggingIn.username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({ error: "Username not found" });
    } else {
      if (dbUser.password === userLoggingIn.password) {
        res.json({ message: "Success" });
      } else {
        return res.json({ error: "Password is incorrect" });
      }
    }
  });
});

/*
ENDPOINTS:
-GET /user
    -username and password
-POST /register 
    -username, password, student/learner, email
*/
