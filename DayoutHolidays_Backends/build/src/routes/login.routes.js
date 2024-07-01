"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/login.routes.ts
const express_1 = require("express");
const login_controller_1 = __importDefault(require("../controllers/login.controller"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new login_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.controller.login);
    }
}
exports.default = new LoginRoutes().router;
