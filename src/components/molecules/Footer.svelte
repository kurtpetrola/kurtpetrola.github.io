<script>
	import Socials from './Socials.svelte';
</script>

<hr />
<footer class="wrapper">
	<h6>
		Website Forked from <a href="https://github.com/xafn/afn.im" target="_blank" rel="noreferrer"
			>afn.im</a
		>
	</h6>
	<Socials />
</footer>

<style lang="scss">
	hr {
		background-color: var(--elevation-one);
		height: 1px;
		border: 0;
		width: 100%;
		margin-bottom: 2rem;

		@media screen and (max-width: 768px) {
			margin-bottom: 1.5rem;
		}
	}

	footer {
		padding-bottom: 2.4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: 768px) {
			flex-direction: column;
		}
	}

	h6 {
		@media screen and (max-width: 768px) {
			margin-bottom: 5px;
		}
	}
</style>
