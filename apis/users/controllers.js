const User = require("../../db/models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../../config/keys")

const generateToken = (userObj) => {
    const payload = {
        _id: userObj._id,
        exp: Date.now() + JWT_EXPIRATION_MS
    };
    const token = jwt.sign(payload, JWT_SECRET);

    return token;
}


exports.signUp = async(req, res, next) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;

        const newUser = await User.create(req.body);

        const token = generateToken(newUser)
        res.status(201).json({token, message: "User created"})
    } catch (error) {
        next(error)
    }
}

exports.signIn = async (req, res, next) => {
    const token = generateToken(req.user)
    res.status(200).json({token})
}