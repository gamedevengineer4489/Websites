module.exports = function(req, res, next) {
    if(!req.user)
    {
        return res.status(401).send({ error: 'You must be logged in to access this website.'})
    }

    next();
}