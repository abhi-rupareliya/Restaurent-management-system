const jwt = require('jsonwebtoken')
const jwt_sec = "aa_secret_string_chhe"
module.exports = async (req, res, next) => {
    const Tocken = req.header('myToken');
    try {
        const User = jwt.decode(Tocken, jwt_sec)
        if (User.user.role === "manager")
            next()
        else
            res.status(400).send({ success: false, message: "Not Authorized." })
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, message: "Server internal error" })
    }
}