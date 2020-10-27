const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("./models/user");

const cookieExtractor = req =>{
    let token = null;
    if (req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}
// Authorization JWT strategy
passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "Andrew"
},(payload,done)=>{
    User.findById({_id : payload.sub}, (err, user) =>{
        if (err)
            return done(err,false);
        if (user)
            return done(null, user);
        else
            return done(null, false)
    });
}));

// Authentication local strategy using email and password
passport.use(new LocalStrategy((email,password,done) => {
    User.findOne({email},(err,user)=>{
        // something went wrong in the DB
        if(err)
            return done(err);
        // if no user exists
        if(!user)
            return done(null,false);
        // check if password is correct
        user.comparePassword(password,done);

    });
}));