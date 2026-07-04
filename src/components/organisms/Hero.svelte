<script>
	import HeroImage from '../../components/atoms/HeroImage.svelte';
	import Button from '../atoms/Button.svelte';
	import Socials from '../molecules/Socials.svelte';
	import { OpenNewWindowIcon } from '@indaco/svelte-iconoir/open-new-window';
	import { SmartphoneDeviceIcon } from '@indaco/svelte-iconoir/smartphone-device';

	import { base } from '$app/paths';

	function handleCVClick() {
		window.open(`${base}/resources/resume.pdf`, '_blank');
	}

	function handleAppsClick() {
		window.open(`https://kurtpetrola-mobile.vercel.app`, '_blank');
	}
</script>

<section id="home" class="wrapper">
	<div>
		<h1>Kurt Petrola</h1>
		<h4>Software Developer</h4>
		<div class="socials">
			<Socials />
		</div>
		<div class="cta-buttons">
			<Button side on:click={handleCVClick} on:keypress={handleCVClick}>
				<div class="btn-content">
					Resume <OpenNewWindowIcon size="18px" />
				</div>
			</Button>
			<Button on:click={handleAppsClick} on:keypress={handleAppsClick}>
				<div class="btn-content">
					Mobile Apps <SmartphoneDeviceIcon size="18px" />
				</div>
			</Button>
		</div>
	</div>
	<HeroImage />
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		scroll-margin-top: 20rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5.75rem;
		margin-top: 7rem;

		@media screen and (max-width: 868px) {
			margin-top: 4rem;
		}

		@media screen and (max-width: 768px) {
			margin-bottom: 2.75rem;
		}

		@media screen and (max-width: 500px) {
			display: block;
		}
	}

	.socials {
		margin-top: 1rem;
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1.5rem;
		align-items: center;

		@media screen and (max-width: 868px) {
			flex-direction: column;
			gap: 1rem;
		}
	}

	.btn-content {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	h4 {
		margin-top: 1rem;
	}

	@media screen and (max-width: 1240px) {
		h1 {
			min-height: 0vw;
			font-size: clamp(4rem, 10vw, 6.25rem);
		}

		h4 {
			min-height: 0vw;
			font-size: clamp(1.4rem, 2.4vw, 1.5rem);
		}
	}
</style>
