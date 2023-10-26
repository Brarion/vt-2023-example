"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _controllers_1 = require("../../controllers");
const UserRouter = (0, express_1.Router)();
UserRouter.get('/', _controllers_1.UserController.getMe);
exports.default = UserRouter;
