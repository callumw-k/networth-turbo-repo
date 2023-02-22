<script lang="ts">
	export let arrayPos: number;
	export let assetsOverview: AssetOverview[];
	export let assetOverview: AssetOverview;

	import TickSvg from './components/TickSVG.svelte';
	import './styles/asset_row.css';
	import AssetRowForm from './AssetRowForm.svelte';
	import Cross from './components/Cross.svelte';
	import { fetchWrapper } from 'networth-lib';
	import type { AssetOverview } from '../../../../packages/types/users';
	import updateAssetsOverview from './utils/updateAsset';
	import AssetHistoryModal from './components/AssetHistoryModal.svelte';

	let { name, value, asset_id } = assetOverview;
	$: hasChanged = name !== assetOverview.name || value !== assetOverview.value;

	$: {
		if (asset_id !== assetOverview.asset_id) {
			({ name, value, asset_id } = assetOverview);
		}
	}
	let isHistoryModalOpen = false;

	const onSubmit = async () => {
		try {
			const updatedAssetsOverview = await updateAssetsOverview({
				name,
				asset_id,
				value: typeof value === 'number' ? value : parseInt(value),
				assetsOverview
			});
			assetsOverview = updatedAssetsOverview;
		} catch (e) {}
	};

	const deleteAsset = async () => {
		fetchWrapper({ url: `/assets/${asset_id}`, method: 'DELETE' });
		assetsOverview.splice(arrayPos, 1);
		assetsOverview = assetsOverview;
	};
</script>

<AssetRowForm {onSubmit}>
	<input type="text" bind:value={name} />
	<input type="number" bind:value />
	<button on:click={deleteAsset} type="button" class="button-reset"><Cross /></button>
	<button
		on:click={() => (isHistoryModalOpen = !isHistoryModalOpen)}
		type="button"
		class="button-reset">H</button
	>
	{#if hasChanged}
		<button class="button-reset" type="submit"><TickSvg /></button>
	{/if}
</AssetRowForm>
<AssetHistoryModal isOpen={isHistoryModalOpen} />
