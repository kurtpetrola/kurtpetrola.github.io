<script>
	import { Timeline } from 'svelte-vertical-timeline';
	import TimeItem from './TimeItem.svelte';

	let size = 0;

	const experienceSlots = [
		{
			contentTitle: 'Graphic Designer · PIXELHUB Design + Digital Agency',
			contentDescription:
				'Collaborated on the official website design for Calasiao LGU and developed user-friendly wireframes for the Department of Tourism (DOT) Region 3 website using Figma.',
			oppositeContent: 'Internship 2025',
			timelineIcon: 'gravity-ui:display',
			hyperlink: 'https://www.wearepixelhub.com/'
		},
		{
			contentTitle: 'Project Manager · Stack IT!',
			contentDescription:
				'Led the development of a casual game that challenges players to stack blocks as high as possible. It features the areas inside PHINMA - University of Pangasinan.',
			oppositeContent: 'Capstone Project 2023 - 2024',
			timelineIcon: 'gravity-ui:graduation-cap',
			hyperlink: 'https://github.com/kurtpetrola/StackIT'
		},
		{
			contentTitle: 'Lead Developer · PCRealm',
			contentDescription:
				'Proposed and developed a web system that helps users build their ideal PC setup within budget constraint.',
			oppositeContent: 'New Venture Creation 2024',
			timelineIcon: 'gravity-ui:display',
			hyperlink: 'https://github.com/kurtpetrola/pcsd'
		},
		{
			contentTitle: 'Lead Developer · Find My Dorm',
			contentDescription:
				'Led the development of a location based application designed to assist students and individuals in finding a suitable dormitories in the Pangasinan area.',
			oppositeContent: 'Junior Final Project 2023',
			timelineIcon: 'gravity-ui:magnifier',
			hyperlink: 'https://github.com/kurtpetrola/fmd'
		},
		{
			contentTitle: 'Lead Developer · Academia Classroom Explorer',
			contentDescription:
				'Led the development of a mobile application that helps students track and manage their grades and educational information.',
			oppositeContent: 'OOP Final Project 2022',
			timelineIcon: 'gravity-ui:graduation-cap',
			hyperlink: 'https://github.com/kurtpetrola/ace'
		}
	];
</script>

<svelte:window bind:innerWidth={size} />

<section id="experience" class="wrapper">
	<div class="title">
		<h2>experience</h2>
	</div>

	{#if size > 868}
		<Timeline position="alternate">
			{#each experienceSlots as expSlot, index}
				<TimeItem
					slot={expSlot}
					lastSlot={index !== experienceSlots.length - 1}
					desktopLayout={true}
				/>
			{/each}
		</Timeline>
	{:else}
		<Timeline>
			{#each experienceSlots as expSlot, index}
				<TimeItem
					slot={expSlot}
					lastSlot={index !== experienceSlots.length - 1}
					desktopLayout={false}
				/>
			{/each}
		</Timeline>
	{/if}
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	.title {
		display: flex;
		justify-content: center;
		margin-top: 0;

		@media (max-width: 868px) {
			justify-content: left;
		}
	}

	h2 {
		display: inline-block;
		margin-bottom: 1rem;
	}

	section {
		margin-bottom: 4.75rem;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
</style>
