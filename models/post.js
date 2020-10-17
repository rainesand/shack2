const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: String, required: true },
    body: { type: String, trime: true, required: true, minlength: 1 },
    spoiler: { type: Boolean, default: false },
    netflixID: { type: String, required: true, unique: true },
    owner: { type: Schema.Types.ObjectId, ref: "Discussion" },
    owner: { type: Schema.Types.ObjectId, ref: "User" }

});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

