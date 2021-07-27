const express = require("express");
const dotenv = require("dotenv");
const Mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const app = express();

dotenv.config();
app.use(express.json()); // allows to send json files in express

// connecting to mongoDB
Mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Defining Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// runs server on port 5000
app.listen("5000", () => {
  console.log("Server started on port 5000");
});
