<script>
	import Tooltip from '../atoms/Tooltip.svelte';
</script>

<section id="about" class="wrapper">
	<div class="title">
		<h2>about me</h2>
	</div>
	<div class="text">
		<p>
			Hello there! My name is Kurt, and I am an
			<Tooltip tip={'🖥️'}>
				<span>Information Technology</span>
			</Tooltip>
			graduate who loves bridging the gap between logic and creativity.
		</p>
		<p>
			My expertise lies in building immersive games with <span>Unity</span>, crafting seamless
			mobile applications with <span>Flutter</span>, and developing dynamic websites using
			<span>Svelte</span>. Currently, I'm expanding my horizons by deep-diving into the world of
			<span>Artificial Intelligence and Machine Learning</span>.
		</p>
		<p>
			When I'm not coding, you can find me leveling up in games, reading manga, or watching anime.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		display: flex;
		justify-content: center;
		margin-bottom: 2.5rem;
		width: 100%;

		@media (max-width: 868px) {
			justify-content: left;
		}
	}

	.text {
		width: 100%;
		max-width: 800px;
		line-height: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	span {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.9rem;
		background-color: var(--elevation-one);
		border-radius: 7px;
		color: var(--accent);
		padding: 0.2rem 0.5rem 0.2rem;
		width: fit-content;
		display: inline-block; /* Fix for fit-content inside line */
	}

	h2 {
		display: inline-block; /* Matches EducationTimeline.svelte */
	}
</style>
