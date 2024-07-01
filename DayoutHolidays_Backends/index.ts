import express, { Application } from "express";

import Routes from "./src/routes";

import multer from "multer";
import path from "path";


export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {

   

   
   
    app.use(express.json());//json data come and go
    app.use(express.urlencoded({ extended: true }));//url
  }
}
