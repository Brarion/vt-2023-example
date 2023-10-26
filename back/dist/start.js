"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const _1 = __importDefault(require("."));
const app = (0, _1.default)();
app.use(express_winston_1.default.errorLogger({
    transports: [new winston_1.default.transports.Console()],
    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.json())
}));
app.listen(8000, () => {
    console.log('server started');
    console.log(process.env.MONEY_DB);
});
