var userService = require("../services/user.services");

class UserController {

    async GetAllUser(req, res) {
        await res.json(userService.getAll());
    }

    async GetByID(req, res) {
        await res.json(userService.get(req.params.id));
    }

    async Create(req, res) {
        await res.json(userService.create(req.body));
    }

    async Update(req, res) {
        await res.json(userService.update(req.params.id, req.body));
    }

    async Delete(req, res) {
        await res.json(userService.delete(req.params.id));
    }

}

module.exports = new UserController();