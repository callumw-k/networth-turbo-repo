import { fetchWrapper } from 'networth-lib';
import type { UpdateAssetRequest } from '../../../../../packages/types/assets';
import type { AssetOverview } from '../../../../../packages/types/users';
interface UpdateAsset extends UpdateAssetRequest {
	assetsOverview: AssetOverview[];
}

const updateAssetsOverview = async ({ asset_id, name, value, assetsOverview }: UpdateAsset) => {
	const index = assetsOverview.findIndex((assetOveriew) => assetOveriew.asset_id === asset_id);
	assetsOverview[index] = {
		...assetsOverview[index],
		name,
		value: value,
		updated_at: new Date().toISOString()
	};
	await fetchWrapper({
		url: '/assets',
		method: 'PUT',
		body: {
			asset_id: asset_id,
			name: name,
			value: typeof value === 'number' ? value : parseInt(value)
		}
	});
	return assetsOverview;
};

export default updateAssetsOverview;
