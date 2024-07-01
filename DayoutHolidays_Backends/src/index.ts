import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import multer from "multer";
import path from "path";



export default class Server {
  
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {

   
    app.use(cors());
    app.use(express.json());//json data come and go
    app.use(express.urlencoded({ extended: true }));//url
   
  }
}
