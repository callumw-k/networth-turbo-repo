import { Request, Router } from "express";
import { prisma } from "../services/prismaClient.js";
export const assetController = Router();

type AssetDetails = {
  name: string;
  value: number;
  user: number;
};

assetController.post(
  "/",
  async (
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      AssetDetails
    >,
    res
  ) => {
    try {
      const createdAsset = await prisma.asset.create({
        data: {
          name: req.body.name,
          user: { connect: { id: req.body.user } },
          values: { create: { value: req.body.value } },
        },
      });
      res.send({ status: "sucess", assest: createdAsset });
    } catch (e) {
      res.status(400).json({
        status: "error",
        error: "Error updating asset",
        stack: JSON.stringify(e),
      });
    }
  }
);

assetController.get("/:assetId", async (req, res) => {
  const { assetId } = req.params;
  try {
    const asset = await prisma.asset.findUnique({
      where: { id: Number(assetId) },
      include: {
        values: {
          orderBy: [{ createdAt: "desc" }],
        },
      },
    });
    res.send(asset);
  } catch (e) {
    res.status(400).json({ status: "error", error: "Error retrieving asset" });
  }
});

assetController.put("/:assetId", async (req, res) => {
  try {
    const updatedAsset = await prisma.value.create({
      data: {
        value: req.body.value,
        asset: { connect: { id: Number(req.params.assetId) } },
      },
    });
    res.send(updatedAsset);
  } catch (e) {
    res.status(400).json({
      status: "error",
      error: "Error updating asset",
      stack: e,
    });
  }
});
