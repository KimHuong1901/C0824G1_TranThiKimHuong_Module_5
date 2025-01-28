module.exports = function (req, res) {
    let users = require("../../users/GET.json");
    let user = users.find(user => user.id === req.params.user_id);
    res.json({
        id: user.id,
        name: user.name,
    })
}