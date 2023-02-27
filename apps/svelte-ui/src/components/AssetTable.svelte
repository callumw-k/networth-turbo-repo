<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { getUser } from '../utils/getUser';
	import AssetRow from './AssetRow.svelte';

	const query = createQuery({
		queryKey: ['user'],
		queryFn: getUser
	});
	$: assets = $query.data?.user?.assets;
</script>

<div>
	{#if $query.isLoading}
		<p>Loading...</p>
	{:else if $query.isError}
		<p>Error: {$query.error.message}</p>
	{:else if $query.isSuccess && assets}
		<p>Hi</p>
		<div>
			{#each assets as asset}
				<AssetRow {asset} />
			{/each}
		</div>
	{/if}
</div>
