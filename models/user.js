// importing bcrypt to hash the user password
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    shows: [{ type: Schema.Types.ObjectId, ref: "Show" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;