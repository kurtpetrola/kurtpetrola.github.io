<script>
	import { Timeline } from 'svelte-vertical-timeline';
	import TimeItem from './TimeItem.svelte';

	let size = 0;

	const educationSlots = [
		{
			contentTitle: 'PHINMA - University of Pangasinan',
			contentDescription:
				'Bachelor of Science in Information Technology | Major in System Development',
			oppositeContent: 'JUL. 2021 - JUL. 2025',
			timelineIcon: 'gravity-ui:graduation-cap',
			hyperlink: 'https://www.facebook.com/phinma.up.citesc'
		},
		{
			contentTitle: 'Mangaldan National High School',
			contentDescription: 'Humanities and Social Sciences',
			oppositeContent: 'Senior Highschool - 2021',
			timelineIcon: 'gravity-ui:graduation-cap',
			hyperlink: 'https://www.facebook.com/profile.php?id=100064113701979'
		},
		{
			contentTitle: 'Mangaldan National High School',
			contentDescription: 'Special Program in the Arts | Major in Theater Arts',
			oppositeContent: 'Highschool - 2019',
			timelineIcon: 'gravity-ui:graduation-cap',
			hyperlink: 'https://www.facebook.com/ManghiTV'
		}
	];
</script>

<svelte:window bind:innerWidth={size} />

<section id="education" class="wrapper">
	<div class="title">
		<h2>education</h2>
	</div>

	{#if size > 868}
		<Timeline position="alternate">
			{#each educationSlots as eduSlot, index}
				<TimeItem
					slot={eduSlot}
					lastSlot={index !== educationSlots.length - 1}
					desktopLayout={true}
				/>
			{/each}
		</Timeline>
	{:else}
		<Timeline>
			{#each educationSlots as eduSlot, index}
				<TimeItem
					slot={eduSlot}
					lastSlot={index !== educationSlots.length - 1}
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
