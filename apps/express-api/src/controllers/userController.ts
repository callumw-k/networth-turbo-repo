import express from "express";
import { prisma } from "src/services/prismaClient.js";

export const userController = express.Router();

userController.post("/", async (req, res) => {
  try {
    const createdUser = await prisma.user.create({
      data: { name: req.body.name },
    });
    res.send(createdUser);
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: "Error creating user",
      stack: e,
    });
  }
});

userController.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    res.send(user);
  } catch (e) {
    res.status(400).json(e);
  }
});
