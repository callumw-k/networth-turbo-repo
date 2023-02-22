<script lang="ts">
	export let onSubmit: () => void;
</script>

<form on:submit={onSubmit}>
	<div class="inner">
		<slot />
	</div>
</form>

<style>
	.inner {
		display: grid;
		grid-template-columns: 1fr minmax(100px, 120px) 35px 35px 35px;
	}
</style>
