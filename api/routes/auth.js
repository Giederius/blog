const express = require("express");
const bcrypt = require("bcrypt"); // to hide the password
const User = require("../models/User");
const router = express.Router();

// REGISTER NEW USER

router.post("/register", async (req, res) => {
  try {
    //   to hide the password:
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // creates new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save(); // saving new user to db
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong Credentials!");

    // to not send the password to the user:
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
