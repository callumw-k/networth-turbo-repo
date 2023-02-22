import { z } from "zod";

const postAssetDTO = z.object({
  name: z.string({
    required_error: "Asset name is required",
  }),
  value: z.number({
    required_error: "Asset value is required",
  }),
  userId: z.number({
    required_error: "userId is required",
  }),
});

const postAssetResponseSchema = z.object({
  status: z.string(),
  asset: z.object({
    id: z.number(),
    name: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    userId: z.string(),
  }),
});

export {postAssetDTO, postAssetResponseSchema}
