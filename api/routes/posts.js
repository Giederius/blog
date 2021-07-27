const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");

const router = express.Router();

// CREATE NEW POST

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POSTS

router.post("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let posts;
    if (username) {
      const posts = await Post.find({ username }); //here should be username: username but since it's the same no need to write it
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findbyId(req.params.id);
    if (post.username === req.params.username) {
      try {
        await post.delete();
        res.status(200).json("post has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete Your posts");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
