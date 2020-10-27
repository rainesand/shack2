// importing bcrypt to hash the user password
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    shows: [{type: Schema.Types.ObjectId, ref: "Show"}],
    posts: [{type: Schema.Types.ObjectId, ref: "Post"}]
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





    // // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    // userSchema.prototype.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.password);
    // };
    // // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // // In this case, before a User is created, we will automatically hash their password
    // userSchema.addHook("beforeCreate", user => {
    //     user.password = bcrypt.hashSync(
    //         user.password,
    //         bcrypt.genSaltSync(10),
    //         null
    //     );
    // });

