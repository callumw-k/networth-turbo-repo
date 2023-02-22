import { PrismaClientRustPanicError } from "@prisma/client/runtime/index.js";
import { Request, Response, Router } from "express";
import { postAssetDTO } from "express-schema";
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
      const parsedData = postAssetDTO.parse(req.body);
      const createdAsset = await prisma.asset.create({
        data: {
          name: parsedData.name,
          values: {
            create: {
              value: parsedData.value,
              user: { connect: { id: parsedData.userId } },
            },
          },
          user: { connect: { id: parsedData.userId } },
        },
      });
      res.send({ status: "sucess", assest: createdAsset });
    } catch (e) {
      res.status(400);
      res.send({
        status: "error",
        error: "Error updating asset",
        message: JSON.parse((e as Error).message),
      });
    }
  }
);

assetController.get("/:assetId", async (req, res) => {
  const { assetId } = req.params;
  await prismaErrorWrapper(res, async () => {
    return await prisma.asset.findUnique({
      where: { id: Number(assetId) },
      include: {
        values: {
          orderBy: [{ createdAt: "desc" }],
        },
      },
    });
  });
});

assetController.put("/:assetId", async (req, res) => {
  await prismaErrorWrapper(
    res,
    async () =>
      await prisma.value.create({
        data: {
          value: req.body.value,
          asset: { connect: { id: Number(req.params.assetId) } },
          user: { connect: { id: 1 } },
        },
      })
  );
});

const prismaErrorWrapper = async <T>(
  res: Response,
  callback: () => Promise<T>
) => {
  try {
    res.send(await callback());
  } catch (e) {
    if (e instanceof PrismaClientRustPanicError) {
      res.status(400).json({ status: "error", stack: e.stack });
    }
    res.status(400).json({ status: "error" });
  }
};
