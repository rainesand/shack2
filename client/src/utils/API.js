import axios from "axios";
import $ from "jquery";

var settingsNew = {
  "async": true,
  "crossDomain": true,
  "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
    "x-rapidapi-key": "a2bf636d02msh0285b0bad0d167cp1bad37jsn53ce1d57c625"
  }
}



export default {
  // Get recent netflix shows
  newNetflix: function () {
    return $.ajax(settingsNew).done(function (response) {
      console.log(JSON.stringify(response));
    });
  },
  // Search netflix shows
  searchNetflix: function (settings) {
    return $.ajax(settings).done(function (response) {
      console.log(response);
    });
  },
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  checkUser: function(userData) {
    return axios.get("/api/login", userData);
  }
};
