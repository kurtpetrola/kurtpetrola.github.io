<script lang="ts">
	import '../styles/globals.scss';
	import '../styles/fonts.scss';
	import Cursor from '../components/atoms/Cursor.svelte';

	let loading = true;
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#CCE2F2" />
	<title>Kurt Petrola ┃ Portfolio</title>
</svelte:head>

<Cursor />
<span class:loading>
	<slot />
</span>

<style>
	.loading * {
		transition: none;
	}
</style>
