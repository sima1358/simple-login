import User from "../models/User.js";
import passportJWT from "passport-jwt";
 

// JWT is responsible for validating and authenticating JWT tokens
// these two help us to authenticating and validating of tokens in JWT
// their responsibility is to secure the paths and endpoints
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

  function initialize (passport){
passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
},
function(jwtPayload, done){
    return User.findById(jwtPayload.sub)
    .then(user=>{
        return done(null, user);
    }
    ). catch(error => {
        return done(error)
    })
}
))
}



export default initialize;