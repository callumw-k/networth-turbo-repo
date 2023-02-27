import type { updateAssetDTO, Value } from 'express-schema';
import type { z } from 'zod';

type UpdateAsset = { assetId: number } & z.infer<typeof updateAssetDTO>;
export const updateAsset = async ({ assetId, value, userId }: UpdateAsset) => {
	return (await (
		await fetch(`http://localhost:8080/asset/${assetId}`, {
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'PUT',
			body: JSON.stringify({ value, userId })
		})
	).json()) as Value;
};
