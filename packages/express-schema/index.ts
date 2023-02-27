import { z } from "zod";

export const postAssetDTO = z.object({
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

export const updateAssetDTO = z.object({
  value: z.number({
    required_error: "Asset value is required",
  }),
  userId: z.number({
    required_error: "userId is required",
  }),
});

export const assetSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
});

export type Asset = z.infer<typeof assetSchema>;

export const valueSchema = z.object({
  id: z.number(),
  value: z.number(),
  createdAt: z.string(),
  userId: z.number(),
  assetId: z.number(),
});

export type Value = z.infer<typeof valueSchema>;

export const assetWithValues = z
  .object({
    values: valueSchema.array(),
  })
  .merge(assetSchema);

export type AssetWithValues = z.infer<typeof assetWithValues>;

export const postAssetResponseSchema = z.object({
  status: z.string(),
  asset: assetSchema,
});

export const getUserResponseSchema = z.object({
  user: z.object({
    id: z.number(),
    name: z.string(),
    assets: z
      .object({
        values: valueSchema.array(),
      })
      .merge(assetSchema)
      .array(),
  }),
  totalValue: z.object({
    _sum: z.object({
      value: z.number(),
    }),
  }),
});
