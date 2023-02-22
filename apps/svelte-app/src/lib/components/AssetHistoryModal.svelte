<script lang="ts">
	export let isOpen: boolean;
</script>

{#if isOpen}
	<div class="outer">
		<div class="content_wrapper">
			<div style="height: 2000px;">
				<h1>Hi</h1>
			</div>
		</div>
	</div>
{/if}

<style>
	.outer {
		position: absolute;
		width: 100%;
		height: 100%;
		max-height: 100%;
		max-width: 100%;
		top: 0;
		left: 0;
		overflow-y: scroll;
		background-color: rgba(100, 100, 100, 0.9);
		display: flex;
		align-items: flex-start;
		padding: var(--space-4);
	}
	.content_wrapper {
		padding: var(--space-8);
		max-width: 768px;
		margin: 0 auto;
		width: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
	}
</style>
