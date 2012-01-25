var exports = module.exports;

exports.request_mw = function(req, res, next) {
    res.local("flashMessage", req.flash());
    return next();
};