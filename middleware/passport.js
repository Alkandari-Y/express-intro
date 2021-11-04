const LocalStrategy = require("passport-local").Strategy
const User = require("../db/models/User")

exports.localStrategy = new LocalStrategy(
    async (username, password, done) => {
        console.log(username),
            console.log(password)
        try {
            const user = await User.findOne({ username: username });
            if (user) {
                
            } else {
                done(null, false)
            }

        } catch (error) {
            done(error)
        }
    }
)