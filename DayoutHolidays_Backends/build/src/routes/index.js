"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signUp_routes_1 = __importDefault(require("./signUp.routes"));
const login_routes_1 = __importDefault(require("./login.routes"));
const cors_1 = __importDefault(require("cors"));
const tourPackage_routes_1 = __importDefault(require("./tourPackage.routes"));
const adventure_routes_1 = __importDefault(require("./adventure.routes"));
const review_routes_1 = __importDefault(require("./review.routes"));
const cart_routes_1 = __importDefault(require("./cart.routes"));
class Routes {
    constructor(app) {
        app.use((0, cors_1.default)());
        // Serve static files from the 'src/uploads' directory
        // Handle image upload endpoint
        app.use("/api/signup", signUp_routes_1.default);
        app.use("/api/login", login_routes_1.default);
        app.use("/api/tour-packages", tourPackage_routes_1.default);
        app.use("/", adventure_routes_1.default);
        app.use("/", review_routes_1.default);
        app.use("/api/add-cart", cart_routes_1.default);
    }
}
exports.default = Routes;
