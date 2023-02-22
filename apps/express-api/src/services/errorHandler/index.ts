import { Request, Response } from "express";

export const prismaErrorHandler = (err, res, req, next) => {
  res.status(500).json({ error: err.message });
};
