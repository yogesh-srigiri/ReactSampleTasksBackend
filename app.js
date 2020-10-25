
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require('./models/post');



const app = express();

mongoose.connect("connect yours mongo connection")
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("connection faild");
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



const port = 8800 || process.env.PORT;

app.post("/", (req, res, next) => {
  const post = new Post({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    position: req.body.position,
    office: req.body.office,
    date: req.body.date,
    salary: req.body.salary

  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
    });
  });
}
);

app.get("/", (req, res, next) => {
  Post.find({}).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});







app.listen(port, () => {
  console.log("server is running on port");
})



module.exports = app;
