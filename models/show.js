const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    imdb: { type: Schema.Types.Decimal128, required: true },
    userRate: { type: Number, required: true },
    status: { type: String, required: true },
    img: { type: String, required: true },
    type: { type: String, required: true },
    year: { type: Number, required: true },
    netflixID: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" }

});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;