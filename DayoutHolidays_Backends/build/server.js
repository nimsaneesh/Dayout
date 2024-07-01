"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./index"));
const mongoose_1 = __importDefault(require("mongoose"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./src/swagger"));
const app = (0, express_1.default)();
const server = new index_1.default(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4561;
const mongoUrl = 'mongodb://127.0.0.1:27017/dayout_holidays';
const mongooseConnection = mongoose_1.default.connect(mongoUrl);
// Use Swagger middleware
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
mongooseConnection.then(() => {
    console.log("Connected to MongoDB server");
    app
        .listen(PORT, "localhost", function () {
        console.log(`Server is running on port ${PORT}.`);
    })
        .on("error", (err) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        }
        else {
            console.log(err);
        }
    });
}, (err) => {
    console.log(err);
});
