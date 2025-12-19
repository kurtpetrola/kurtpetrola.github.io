<script>
	import Tooltip from '../atoms/Tooltip.svelte';
</script>

<section id="about" class="wrapper">
	<div class="text">
		<h2>about me</h2>
		<p>
			Hello there! My name is Kurt, and I am an
			<Tooltip tip={'🖥️'}>
				<span>Information Technology</span>
			</Tooltip>
			graduate from <Tooltip
				><a href="https://up.phinma.edu.ph/" target="_blank" rel="noopener noreferrer">
					<span>PHINMA - University of Pangasinan</span></a
				></Tooltip
			>, specializing in mobile, game and web development. I have a strong foundation in Dart,
			Kotlin, C#, and Python, and I actively pursue new challenges to enhance my skills and broaden
			my experience. My focus is on developing engaging games and mobile applications that provide
			seamless functionality and deliver captivating user experiences.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.text {
		position: relative;
		line-height: 1.75rem;
		align-items: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
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
	}

	a {
		text-decoration: none;
	}

	h2 {
		display: block;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 868px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}

		h2 {
			display: block;
			margin-bottom: 1rem;
		}
	}
</style>
