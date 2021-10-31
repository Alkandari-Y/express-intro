const logger = (req) => {
    return (`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl} ${new Date()}`)
}

module.exports = logger