<script lang="ts">
	export let assetsOverview: AssetOverviewResponse[];
	import { fetchWrapper } from 'networth-lib';
	import type { CreateAssetResponse } from '../../../../packages/types/assets';
	import type { AssetOverviewResponse } from '../../../../packages/types/users';
	import AssetRowForm from './AssetRowForm.svelte';
	import TickSvg from './components/TickSVG.svelte';
	import './styles/asset_row.css';

	let name: string | undefined;
	let value: number | undefined;

	$: hasCreatedAsset = typeof name !== 'undefined' && typeof value !== 'undefined';

	const createAsset = async () => {
		const response = await fetchWrapper<{ data: CreateAssetResponse }>({
			url: '/assets',
			method: 'POST',
			body: {
				name,
				value,
				user_id: 1
			}
		});
		assetsOverview = [...assetsOverview, response.data];
		name = undefined;
		value = undefined;
	};
</script>

<AssetRowForm onSubmit={createAsset}>
	<input placeholder="Add asset..." bind:value={name} />
	<input type="number" placeholder="420" bind:value />
	{#if hasCreatedAsset}<button type="submit" class="button-reset"><TickSvg /></button>{/if}
</AssetRowForm>
