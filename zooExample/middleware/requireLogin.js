module.exports = (req, res, next) => {
    if(!req.user) {
        res.send(401).send({ error: 'You must log-in to access these features.'});
    }

    next();
}