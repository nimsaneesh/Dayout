"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUp_controller_1 = __importDefault(require("../controllers/signUp.controller"));
class SignUpRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new signUp_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new Tutorial
        this.router.post("/", this.controller.signup);
    }
}
exports.default = new SignUpRoutes().router;
