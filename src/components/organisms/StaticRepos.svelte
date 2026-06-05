<script lang="ts">
	import { StarIcon } from '@indaco/svelte-iconoir/star';
	import { onMount } from 'svelte';
	import { GitForkIcon } from '@indaco/svelte-iconoir/git-fork';
	import { OpenNewWindowIcon } from '@indaco/svelte-iconoir/open-new-window';
	import { EyeIcon } from '@indaco/svelte-iconoir/eye';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let staticRepos = [
		{
			link: 'https://github.com/kurtpetrola/StackIT.git',
			owner: 'kurtpetrola',
			repo: 'Stack IT!',
			description: 'A simple stacking game made with Unity.',
			languageColor: 'rgb(145, 121, 228)',
			language: 'C#',
			stars: 2,
			forks: 1,
			demo: 'https://github.com/kurtpetrola/StackIT/releases/tag/v1.0',
			category: 'Game'
		},
		{
			link: 'https://github.com/kurtpetrola/pcsd',
			owner: 'kurtpetrola',
			repo: 'PCRealm',
			description:
				'A web system that helps users build their ideal PC setup within budget constraints',
			languageColor: 'rgb(49, 120, 198)',
			language: 'TypeScript',
			stars: 0,
			forks: 0,
			demo: null,
			category: 'Web'
		},
		{
			link: 'https://github.com/kurtpetrola/fmd',
			owner: 'kurtpetrola',
			repo: 'Find My Dorm',
			description:
				'A location-based application designed to assist students and individuals in finding suitable dormitories near Pangasinan.',
			languageColor: 'rgb(0, 117, 186)',
			language: 'Dart',
			stars: 0,
			forks: 0,
			demo: 'https://github.com/kurtpetrola/fmd/releases/tag/v0.1.0',
			category: 'Mobile'
		},
		{
			link: 'https://github.com/kurtpetrola/ace',
			owner: 'kurtpetrola',
			repo: 'Academia Classroom Explorer',
			description: 'A comprehensive platform for accessing academic information.',
			languageColor: 'rgb(0, 117, 186)',
			language: 'Dart',
			stars: 0,
			forks: 0,
			demo: 'https://github.com/kurtpetrola/ace/releases/tag/v1.0.0',
			category: 'Mobile'
		},
		{
			link: '#',
			owner: 'kurtpetrola',
			repo: 'KuryenteCheck',
			description:
				'A Crowd-Sourced Mobile App for Monitoring Electricity Outages and Voltage Fluctuations in Mangaldan, Pangasinan.',
			languageColor: 'rgb(0, 117, 186)',
			language: 'Dart',
			stars: 0,
			forks: 0,
			demo: null,
			category: 'Mobile'
		},
		{
			link: '#',
			owner: 'kurtpetrola',
			repo: 'Widgey',
			description:
				'A bold, Neo-Brutalist Flutter app for sharing real-time photos and videos directly to your friends home screen widgets.',
			languageColor: 'rgb(0, 117, 186)',
			language: 'Dart',
			stars: 0,
			forks: 0,
			demo: null,
			category: 'Mobile'
		},
		{
			link: 'https://github.com/kurtpetrola/Swifty.git',
			owner: 'kurtpetrola',
			repo: 'Swifty',
			description: 'A simple Swift programming language reviewer app. ',
			languageColor: 'rgb(177, 37, 234)',
			language: 'Kotlin',
			stars: 0,
			forks: 0,
			demo: 'https://github.com/kurtpetrola/Swifty/releases/tag/v1.0.0',
			category: 'Mobile'
		},
		{
			link: 'https://github.com/kurtpetrola/LosHeroes.git',
			owner: 'kurtpetrola',
			repo: 'LosHeroes',
			description:
				'A turn-based role-playing game (RPG). The game tells the story of Magellan who stumbles upon a relic granting him the power to enslave mythical creatures. ',
			languageColor: 'rgb(145, 121, 228)',
			language: 'C#',
			stars: 0,
			forks: 0,
			demo: null,
			category: 'Game'
		},
		{
			link: 'https://github.com/kurtpetrola/DogDays.git',
			owner: 'kurtpetrola',
			repo: 'DogDays',
			description:
				'A deceptively simple platformer game with a unique blend of charming graphics, catchy soundtrack, and devilishly difficult gameplay. ',
			languageColor: 'rgb(145, 121, 228)',
			language: 'C#',
			stars: 0,
			forks: 0,
			demo: null,
			category: 'Game'
		},
		{
			link: '#',
			owner: 'kurtpetrola',
			repo: 'Future Project',
			description: 'A placeholder for an upcoming exciting project!',
			languageColor: 'var(--accent)',
			language: 'Coming Soon',
			stars: 0,
			forks: 0,
			demo: null,
			category: 'Other'
		}
	];

	onMount(async () => {
		const updatedRepos = await Promise.all(
			staticRepos.map(async (repo) => {
				if (!repo.link.includes('github.com')) return repo;

				try {
					const match = repo.link.match(/github\.com\/([^/]+)\/([^/]+?)(\.git)?$/);
					if (!match) return repo;

					const [_, owner, slug] = match;
					const response = await fetch(`https://api.github.com/repos/${owner}/${slug}`);
					if (!response.ok) return repo;

					const data = await response.json();
					return {
						...repo,
						stars: data.stargazers_count,
						forks: data.forks_count
					};
				} catch (error) {
					console.error(`Failed to fetch stats for ${repo.repo}`, error);
					return repo;
				}
			})
		);
		staticRepos = updatedRepos;
	});

	let showAll = false;
	const filters = ['All', 'Mobile', 'Web', 'Game'] as const;
	type FilterType = (typeof filters)[number];
	let activeFilter: FilterType = 'All';

	$: filteredRepos =
		activeFilter === 'All'
			? staticRepos
			: staticRepos.filter((repo) => repo.category === activeFilter);

	$: displayedRepos = showAll ? filteredRepos : filteredRepos.slice(0, 4);

	function toggleShowMore() {
		showAll = !showAll;
	}

	function setFilter(filter: FilterType) {
		activeFilter = filter;
		showAll = false; // Reset view more when changing filter
	}
</script>

<section class="wrapper" id="projects">
	<div class="title">
		<h2><span>code</span>:projects</h2>
	</div>

	<div class="filters">
		{#each filters as filter}
			<button class:active={activeFilter === filter} on:click={() => setFilter(filter)}>
				{filter}
			</button>
		{/each}
	</div>
	<div class="grid">
		{#each displayedRepos as { link, owner, repo, description, languageColor, language, stars, forks, demo } (repo)}
			<div
				class="repo-card"
				in:fade={{ duration: 300, delay: 200 }}
				out:fade={{ duration: 200 }}
				animate:flip={{ duration: 400 }}
			>
				<div class="card-content">
					<div id="top-part">
						<div class="info">
							<img src="https://github.com/{owner}.png" alt="{owner}'s profile picture" id="pfp" />
							<h6>{owner}</h6>
						</div>
					</div>
					<div class="mid-part">
						<h3>{repo}</h3>
						<h6>{description}</h6>
					</div>
				</div>
				<div class="card-footer">
					<div class="info-container">
						<div class="info">
							<span class="dot" style="background-color: {languageColor}"></span>
							<h6>{language}</h6>
						</div>
						<div class="info">
							{#if stars}
								<StarIcon color="var(--text-secondary)" size="16px" />
								<h6>{stars}</h6>
							{/if}
						</div>
						<div class="info">
							{#if forks}
								<GitForkIcon color="var(--text-secondary)" size="16px" />
								<h6>{forks}</h6>
							{/if}
						</div>
					</div>
					<div class="card-actions">
						{#if link && link !== '#'}
							<a href={link} target="_blank" rel="noreferrer" class="action-btn github">
								<OpenNewWindowIcon color="currentColor" size="18px" />
								<span>GitHub</span>
							</a>
						{/if}
						{#if demo}
							<a href={demo} target="_blank" rel="noreferrer" class="action-btn demo">
								<EyeIcon color="currentColor" size="18px" />
								<span>Live Demo</span>
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>

	{#if staticRepos.length > 4}
		<div class="view-more">
			<button on:click={toggleShowMore}>
				{showAll ? 'Show Less' : 'View More Projects'}
			</button>
		</div>
	{/if}
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	.filters {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2.5rem;
		flex-wrap: wrap;

		button {
			background: transparent;
			border: 1px solid var(--elevation-four);
			color: var(--text-secondary);
			padding: 0.5rem 1.5rem;
			border-radius: 20px;
			cursor: pointer;
			font-family: var(--font-two);
			font-size: 0.85rem;
			transition: all 0.3s var(--bezier-one);

			&:hover {
				border-color: var(--accent);
				color: var(--accent);
			}

			&.active {
				background-color: var(--accent);
				border-color: var(--accent);
				color: white;
				box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.4);
			}
		}

		@media (max-width: 868px) {
			justify-content: flex-start;
		}
	}

	.view-more {
		display: flex;
		justify-content: center;
		margin-top: 2rem;

		button {
			background: transparent;
			border: 1px solid var(--elevation-four);
			color: var(--text-secondary);
			padding: 0.75rem 2rem;
			border-radius: 8px;
			cursor: pointer;
			font-family: var(--font-two);
			font-size: 0.9rem;
			transition: all 0.3s var(--bezier-one);

			&:hover {
				background-color: var(--elevation-one);
				color: var(--accent);
				border-color: var(--accent);
				transform: translateY(-2px);
			}
		}
	}

	.title {
		display: flex;
		justify-content: center;
		margin-top: 0;

		@media (max-width: 868px) {
			justify-content: left;
		}
	}
	.repo-card {
		padding: 1.5rem;
		background-color: var(--elevation-two);
		border-radius: 12px;
		min-height: 200px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
		transition: all 0.3s var(--bezier-one);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		background-blend-mode: overlay;
		border: 1px solid var(--elevation-four);

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.3);
			border-color: var(--accent-opacity);
		}
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.mid-part {
		h3 {
			margin-bottom: 0.25rem;
		}
	}

	.card-actions {
		display: flex;
		gap: 0.75rem;
	}

	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: auto;
		gap: 1rem;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
		}
	}

	.action-btn {
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-size: 0.85rem;
		font-family: var(--font-two);
		transition: all 0.2s var(--bezier-one);
		border: 1px solid transparent;

		&.github {
			background-color: var(--elevation-three);
			color: var(--text-primary);

			&:hover {
				background-color: var(--elevation-one);
				border-color: var(--accent);
			}
		}

		&.demo {
			background-color: var(--accent-opacity);
			color: var(--accent);

			&:hover {
				background-color: var(--accent);
				color: white;
			}
		}

		span {
			color: inherit;
		}
	}

	@keyframes shimmer {
		0% {
			background-position: -1200px 0;
		}
		100% {
			background-position: 1200px 0;
		}
	}

	h2 {
		display: inline-block;
		margin-bottom: 1rem;
	}

	#pfp {
		border-radius: 50%;
		height: 16px;
	}

	#top-part {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		color: var(--accent);
	}

	.grid {
		gap: 1.5rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 3rem;
		position: relative;

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
		}

		@media (max-width: 868px) {
			margin-bottom: 2rem;
		}
	}

	.dot {
		height: 11px;
		width: 11px;
		border-radius: 50%;
		display: inline-block;
	}

	.info {
		display: flex;
		gap: 0.4rem;
		align-items: center;

		&-container {
			display: flex;
			gap: 1rem;
		}
	}

	section {
		margin-bottom: 6rem;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
</style>
