import express from "express";
import { assetController } from "src/controllers/assetController.js";
import { userController } from "src/controllers/userController.js";

const app = express();

app.use(express.json());

app.use("/user", userController);
app.use("/asset", assetController);

app.listen(8080, () =>
  console.log(`🚀 Server started at http://localhost:8080`)
);
