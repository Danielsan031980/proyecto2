const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const userToken = req.headers.authorization;
        jwt.verify(userToken, process.env.SECRET_KEY, (err, payload) => {
            if (err) return res.status(401).json({ verified: false });
            else next();
        });
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};

module.exports = authenticate;