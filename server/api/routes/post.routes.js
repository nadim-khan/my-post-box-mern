const express = require("express");
const Router = express.Router();

// importing our post model
const Post = require("../../model/post.model");
const { response } = require("express");

// @desc getting all the posts
// @access public
// @route api/post/
Router.route("/").get((req, res) => {
  Post.find()
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

// @desc creating our post
// @access public
// @route api/post/add
Router.route("/add").post((req, res) => {
  const { author, content } = req.body;
  const newPost = new Post({
    author,
    content,
  });
  console.log(newPost)
  newPost
    .save()
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

// @desc finding a post by id
// @access public
// @route api/post/:id
Router.route("/:id").get((req, res) => {
  const idSearch = req.params.id;
  Post.findById(idSearch)
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

// @desc update a post by id
// @access public
// @route api/post/update/:id
Router.route("/update/:id").post((req, res) => {
  const idSearch = req.params.id;
  Post.findById(idSearch)
    .then((post) => {
      // fetching the new author and content
      const { author, content } = req.body;

      // updating the value
      post.author = author;
      post.content = content;

      // save the post
      post
        .save()
        .then((response) => {
          res.status(200).json({ response, success: true });
        })
        .catch((error) => {
          res.status(400).json({ error, success: false });
        });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

// @desc deleting a post by id
// @access public
// @route api/post/delete/:id
Router.route("/delete/:id").delete((req, res) => {
  const idSearch = req.params.id;
  Post.findByIdAndDelete(idSearch)
    .then((response) => {
      res.status(200).json({ response, success: true });
    })
    .catch((error) => {
      res.status(400).json({ error, success: false });
    });
});

module.exports = Router;