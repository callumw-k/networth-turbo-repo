<script lang="ts">
	export let data: PageData;
	import AssetTable from '$lib/AssetTable.svelte';
	import PortfolioOverview from '$lib/PortfolioOverview.svelte';
	import type { PageData } from './$types';
</script>

<PortfolioOverview portfolioOverview={data.portfolioOverview} />
<AssetTable assetsOverview={data.assets} />
