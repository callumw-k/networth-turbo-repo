import express, { NextFunction, Request, Response } from "express";
import { assetController } from "src/controllers/assetController.js";
import { userController } from "src/controllers/userController.js";
import { prismaErrorHandler } from "src/services/errorHandler/index.js";
import cors from "cors";

const app = express();

app.use(cors());

app
  .use(express.json())
  .use("/user", userController)
  .use("/asset", assetController)
  .use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.send(err);
  });

app.listen(8080, () =>
  console.log(`🚀 Server started at http://localhost:8080`)
);
