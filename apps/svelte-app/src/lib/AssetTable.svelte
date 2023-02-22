<script lang="ts">
	export let assetsOverview: AssetOverviewResponse[];
	import CreateAssetButton from './CreateAssetRow.svelte';
	import type { AssetOverviewResponse } from '../../../../packages/types/users';
	import ModifyAssetForm from '$lib/ModifyAssetForm.svelte';
</script>

<div class="container">
	<div class="table">
		{#each assetsOverview as assetOverview, index}
			<ModifyAssetForm {assetOverview} bind:assetsOverview arrayPos={index} />
		{/each}
		<CreateAssetButton bind:assetsOverview />
	</div>
</div>

<style>
	.table {
		border-radius: 8px;
		border: 1px solid;
		border-color: slategray;
		overflow: auto;
	}
</style>
