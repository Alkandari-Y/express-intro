const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local").Strategy
const User = require("../db/models/User")



exports.localStrategy = new LocalStrategy(
    async (username, password, done) => {
        console.log(username),
        console.log(password)
        try {
            const user = await User.findOne({ username: username });

            // Option !
            !user ? done(null, false) : (await bcrypt.compare(password, user.password)) ? done(null, user) : done(null, false)


            // Option 2
            // const passwordMath = user ? await bcrypt.compare(password, user.password) : false;

            // if (passwordMath) return done(null, user)
            
            // return done(null, false)
            

            // Option 3
            // if (user) {
            //     const passwordMatch = await bcrypt.compare(password, user.password)
            //     if (passwordMatch) {
            //         return done(null, user)
            //     } else {
            //         done(null, error)
            //     }
            // } else {
            //     done(null, false)
            // }
        } catch (error) {
            done(error)
        }
    }
)