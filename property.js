var exports = module.exports;

exports.create = function () {
    var value = null;
    return {
        get: function () {
           return value;
        },
        set: function (new_value) {
           value = new_value;
        }
    };
}	
exports.creator = function () {
    return function () {
        return exports.create();
    };
}