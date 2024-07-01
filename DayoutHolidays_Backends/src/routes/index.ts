// routes/index.ts
import { Application } from "express";
import signUpRoutes from "./signUp.routes";
import loginRoutes from "./login.routes";
import cors from 'cors';
import tourPackageRoutes from "./tourPackage.routes"
import adventureRoutes from "./adventure.routes";
import reviewRoutes from "./review.routes";
import cartRoutes from "./cart.routes";
import { handleImageUpload, serveUploads } from "../middleware/uploadMiddleware";
export default class Routes {
  constructor(app: Application) {

    
    app.use(cors());
    // Serve static files from the 'src/uploads' directory

// Handle image upload endpoint

    app.use("/api/signup", signUpRoutes);
    app.use("/api/login", loginRoutes);
    app.use("/api/tour-packages", tourPackageRoutes); 
    app.use("/", adventureRoutes); 
    app.use("/", reviewRoutes);
    app.use("/api/add-cart", cartRoutes);

  }
}
