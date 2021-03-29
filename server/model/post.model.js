// importing mongoose
const mongoose = require("mongoose");

// creating our Schema
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Posts", postSchema);

// export the model
module.exports = Post;