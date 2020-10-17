const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Shows collection and inserts the shows below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Shack2");

const userSeed = [
  {
    email: "saul@gmail.com",
    username: "saul123",
    password: "password123",
    shows: [],
    posts: []
  },
  {
    email: "test@gmail.com",
    username: "test123",
    password: "password123",
    shows: [],
    posts: []
  }
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted to users!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });







const showSeed = [
  {
    title: "Avatar",
    summary: "blue ppl running",
    imdb: 8.0,
    userRate: 10,
    status: "completed",
    img: "www.picture.com",
    type: "movie",
    year: 2014,
    netflixID: "12345",
    owner: "5f864785702a224ddd8d493a"
  },
  {
    title: "Matrix",
    summary: "robot ppl running",
    imdb: 8.0,
    userRate: 10,
    status: "completed",
    img: "www.picture.com",
    type: "movie",
    year: 2014,
    netflixID: "12335",
    owner: "5f864785702a224ddd8d493a"
  }
];
db.Show.deleteMany({})
  .then(() => db.Show.collection.insertMany(showSeed))
  .then(data => {
    console.log(data.result.n + " records inserted to shows!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

