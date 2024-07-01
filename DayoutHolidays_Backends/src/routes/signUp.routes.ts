import { Router } from "express";
import signup from "../models/signUp.model";
import SignUpController from "../controllers/signUp.controller";


class SignUpRoutes {
    router = Router();
    controller = new SignUpController();
  
    constructor() {
      this.intializeRoutes();
    }
    intializeRoutes() {
        // Create a new Tutorial
        this.router.post("/", this.controller.signup);
    
      }
    }
    export default new SignUpRoutes().router;
