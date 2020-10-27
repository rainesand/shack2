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
userSchema.pre("save", function(next){
    if (!this.isModified("password"))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if (err)
            return next(err);
        this.password = passwordHash;
        next();
    });

});

userSchema.methods.comparePassword = function(password, cb){
    bcrypt.compare(password, this.password, (err, isMatch) =>{
        if (err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null, isMatch);
            return cb (null, this);
        }
    });
}
const User = mongoose.model("User", userSchema);

module.exports = User;