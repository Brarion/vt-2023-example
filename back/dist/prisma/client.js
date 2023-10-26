"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
exports.default = new client_1.PrismaClient({
    log: process.env.NODE_ENV === 'test' ? [] : ['query', 'info', 'warn', 'error']
});
