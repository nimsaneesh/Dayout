// server.ts

import express, { Application } from "express";
import Server from "./index";
import mongoose from "mongoose";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './src/swagger';

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4561;
const mongoUrl = 'mongodb://127.0.0.1:27017/dayout_holidays';
const mongooseConnection = mongoose.connect(mongoUrl);

// Use Swagger middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongooseConnection.then(
  () => {
    console.log("Connected to MongoDB server");
    app
      .listen(PORT, "localhost", function () {
        console.log(`Server is running on port ${PORT}.`);
      })
      .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
          console.log("Error: address already in use");
        } else {
          console.log(err);
        }
      });
  },
  (err) => {
    console.log(err);
  }
);
