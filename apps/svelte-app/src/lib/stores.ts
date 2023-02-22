import { writable } from 'svelte/store';
import type { PortfolioOverview, AssetOverview } from '../../../../packages/types/users';

export const assetOverviewStore = writable<AssetOverview[]>();
export const portfolioOverview = writable<PortfolioOverview>();
