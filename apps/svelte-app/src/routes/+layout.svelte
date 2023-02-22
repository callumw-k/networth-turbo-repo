<script lang="ts">
	import '$lib/styles/normalize.css';
	import '$lib/styles/app.css';
	import '$lib/styles/utils.css';
	import '@fontsource/inter';
</script>

<main>
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/tracker">Tracker</a>
		</nav>
	</header>
	<slot />
</main>

<style>
	nav {
		padding: var(--space-4);
		display: flex;
		justify-content: flex-end;
		gap: var(--space-4);
	}
</style>
