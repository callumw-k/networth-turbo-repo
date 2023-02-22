<script lang="ts">
	import type { PortfolioOverview } from '../../../../packages/types/users';

	export let portfolioOverview: PortfolioOverview;
</script>

<div class="container">
	<div class="inner">
		<h1>Welcome <br />{portfolioOverview.first_name} {portfolioOverview.last_name}</h1>
		<div class="values">
			<h2>
				${portfolioOverview.portfolioTotal}
			</h2>
		</div>
	</div>
</div>

<style>
	.inner {
		display: flex;
		justify-content: space-between;
	}
	.values {
		align-self: flex-end;
	}
</style>
