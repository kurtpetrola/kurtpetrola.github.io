<script>
	import Social from '../atoms/Social.svelte';
	import { GitHubIcon } from '@indaco/svelte-iconoir/github';
	import { MailIcon } from '@indaco/svelte-iconoir/mail';
	import Icon from '@iconify/svelte';
</script>

<div class="socials-container">
	<Social tip="kurtpetrola" link="https://github.com/kurtpetrola">
		<GitHubIcon color="var(--accent)" />
	</Social>

	<Social tip="kurtguenpetrola@outlook.com" link="mailto:kurtguenpetrola@outlook.com">
		<MailIcon color="var(--accent)" />
	</Social>

	<Social tip="kurtguenpetrola" link="https://www.linkedin.com/in/kurtguenpetrola/">
		<Icon icon="uil:linkedin" color="var(--accent)" font-size="28px" />
	</Social>
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>
