import { fetchWrapper } from 'networth-lib';
import type { PortfolioOverview, AssetOverviewResponse } from '../../../../../packages/types/users';
import type { PageLoad } from './$types';

export const load = (({ fetch }) => {
	const fetchAssets = async () => {
		const assets = await fetchWrapper<AssetOverviewResponse[]>({
			url: '/users/1/assets/overview',
			method: 'GET',
			customFetch: fetch
		});
		return assets;
	};
	const fetchPortfolioOverview = async () =>
		fetchWrapper<PortfolioOverview>({
			url: '/users/1',
			method: 'GET',
			customFetch: fetch
		});
	return { assets: fetchAssets(), portfolioOverview: fetchPortfolioOverview() };
}) satisfies PageLoad;
