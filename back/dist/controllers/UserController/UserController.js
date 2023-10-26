"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _services_1 = require("../../services");
const UserController = {
    getMe: (req, res, next) => {
        _services_1.UserService.getMe()
            .then(me => res.status(200).send(me))
            .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
    }
};
exports.default = Object.freeze(UserController);
