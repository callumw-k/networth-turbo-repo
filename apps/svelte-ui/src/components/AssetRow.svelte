<script lang="ts">
	import { createMutation, useQueryClient } from '@tanstack/svelte-query';
	import type { AssetWithValues } from 'express-schema';
	import { updateAsset } from '../utils/assetMutations';
	const client = useQueryClient();

	export let asset: AssetWithValues;
	let [lastValue] = asset.values;
	let amount = lastValue.value;
	const mutation = createMutation({
		mutationKey: ['updateAsset'],
		mutationFn: updateAsset
	});
</script>

<div class="table">
	<input bind:value={asset.name} />
	<input type="number" bind:value={amount} />
	<button
		on:click={() =>
			$mutation.mutate({
				assetId: asset.id,
				value: Number(amount),
				userId: client.getQueryData(['user'])?.user.id
			})}
		type="submit">✅</button
	>
</div>

<style>
	.table {
		display: grid;
		grid-template-columns: 1fr 1fr 30px;
		width: 100%;
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
