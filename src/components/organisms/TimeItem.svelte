<script>
	import Icon from '@iconify/svelte';
	import {
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	export let slot;

	export let lastSlot;

	export let desktopLayout;
</script>

{#if desktopLayout}
	<TimelineItem>
		<TimelineOppositeContent slot="opposite-content">
			<p>{slot.oppositeContent}</p>
		</TimelineOppositeContent>
		<TimelineSeparator>
			<TimelineDot
				style={'width: 30px; height: 30px; background-color: var(--text-primary); display: flex; align-items: center; justify-content: center; border-color: var(--text-primary);'}
			>
				<Icon icon={slot.timelineIcon} style="color: var(--bg-color); " />
			</TimelineDot>
			{#if lastSlot}
				<TimelineConnector />
			{/if}
		</TimelineSeparator>
		<TimelineContent style="height: 166px">
			<h3>
				<a href={slot.hyperlink} target="_blank" rel="noopener noreferrer">{slot.contentTitle}</a>
			</h3>
			<p>{slot.contentDescription}</p>
		</TimelineContent>
	</TimelineItem>
{:else}
	<TimelineItem style="right:100%; width: 200%;">
		<TimelineSeparator>
			<TimelineDot
				style={'width: 30px; height: 30px; background-color: var(--text-primary); display: flex; align-items: center; justify-content: center; border-color: var(--text-primary);'}
			>
				<Icon icon={slot.timelineIcon} style="color: var(--bg-color);" />
			</TimelineDot>
			{#if lastSlot}
				<TimelineConnector />
			{/if}
		</TimelineSeparator>
		<TimelineContent style="width: 20rem">
			<h3>
				<a href={slot.hyperlink} target="_blank" rel="noopener noreferrer">{slot.contentTitle}</a>
			</h3>
			<p>{slot.contentDescription}</p>
			<p>{slot.oppositeContent}</p>
		</TimelineContent>
	</TimelineItem>
{/if}

<style lang="scss">
	@import '../../styles/mixins.scss';
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
