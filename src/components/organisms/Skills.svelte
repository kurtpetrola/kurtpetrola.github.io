<script>
	import Icon from '@iconify/svelte';

	const skills = [
		{ name: 'Flutter', icon: 'logos:flutter' },
		{ name: 'Dart', icon: 'logos:dart' },
		{ name: 'Firebase', icon: 'logos:firebase-icon' },
		{ name: 'GCP', icon: 'logos:google-cloud' },
		{ name: 'Kotlin', icon: 'logos:kotlin-icon' },
		{ name: 'AndroidStudio', icon: 'logos:android-icon' },
		{ name: 'VSCode', icon: 'logos:visual-studio-code' },
		{ name: 'Svelte', icon: 'logos:svelte-icon' },
		{ name: 'TypeScript', icon: 'logos:typescript-icon' },
		{ name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
		{ name: 'Git', icon: 'logos:git-icon' },
		{ name: 'C#', icon: 'logos:c-sharp' },
		{ name: 'Unity', icon: 'logos:unity' },
		{ name: 'Python', icon: 'logos:python' }
	];
</script>

<section id="skills" class="wrapper">
	<div class="title">
		<h2><span>tech</span>:stack</h2>
	</div>
	<div class="skills-grid">
		{#each skills as skill}
			<div class="skill-card">
				<Icon icon={skill.icon} height="40" />
				<span>{skill.name}</span>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
	}

	.title {
		display: flex;
		justify-content: center;
		margin-bottom: 2.5rem;

		span {
			color: var(--accent);
		}

		@media (max-width: 868px) {
			justify-content: left;
		}
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1.5rem;
		justify-items: center;

		@media (max-width: 500px) {
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
		}
	}

	.skill-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 1.5rem;
		background-color: var(--elevation-two);
		border-radius: 12px;
		width: 100%;
		border: 1px solid var(--elevation-four);
		transition: all 0.3s var(--bezier-one);

		span {
			font-family: var(--font-two);
			font-size: 0.9rem;
			color: var(--text-secondary);
		}

		&:hover {
			transform: translateY(-5px);
			border-color: var(--accent);
			background-color: var(--elevation-one);

			span {
				color: var(--text-primary);
			}
		}

		@media (max-width: 500px) {
			padding: 1rem;
		}
	}
</style>
