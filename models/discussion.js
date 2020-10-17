const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    show: {type: String, required: true, unique: true},
    netflixID: {type: String, required: true, unique: true},
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;

