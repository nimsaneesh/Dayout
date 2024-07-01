// routes/login.routes.ts
import { Router } from "express";
import LoginController from "../controllers/login.controller";

class LoginRoutes {
  router = Router();
  controller = new LoginController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.controller.login);
  }
}

export default new LoginRoutes().router;
