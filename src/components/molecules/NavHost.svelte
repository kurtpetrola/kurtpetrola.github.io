<script lang="ts">
	import Nav from '../atoms/Nav.svelte';

	let y: number;

	function moveNavBarOnScroll() {
		if (window.innerWidth < 868) {
			let elem = document.getElementById('navBarBottomScreen');
			if (elem && typeof y === 'number' && y > 0) {
				elem.scrollLeft = y / 3;
			}
		}
	}
</script>

<nav>
	<div class:scrolled={y > 20} id="navBarBottomScreen">
		<ul>
			<Nav href="#home" section="/" isSelected={y < 350}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="var(--accent)"
					viewBox="0 0 24 24"
					><path fill="none" d="M0 0h24v24H0z" /><path
						d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
					/></svg
				>
			</Nav>
			<Nav href="#about" section="about" isSelected={y > 350 && y < 675}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="var(--accent)"
					viewBox="0 0 24 24"
					><path fill="none" d="M0 0h24v24H0z" /><path
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
					/></svg
				>
			</Nav>
			<Nav href="#projects" section="projects" isSelected={y > 675 && y < 1000}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="var(--accent)"
					transform="scale(1.2)"
					><path
						d="M380.67-340.67 428.91-389l-91-91L428-570.09l-48.24-48.34-138.43 138.55 139.34 139.21Zm198.66 0L718.67-480 579.33-619.33 531.09-571l91 91-91 91 48.24 48.33ZM189.06-113.3q-31 0-53.38-22.38-22.38-22.38-22.38-53.38v-581.88q0-31.06 22.38-53.49 22.38-22.43 53.38-22.43h581.88q31.06 0 53.49 22.43 22.43 22.43 22.43 53.49v581.88q0 31-22.43 53.38Q802-113.3 770.94-113.3H189.06Zm0-75.76h581.88v-581.88H189.06v581.88Zm0-581.88v581.88-581.88Z"
					/></svg
				>
			</Nav>
			<Nav href="#education" section="education" isSelected={y > 1000 && y < 2000}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="var(--accent)"
					transform="scale(1.2)"
					><path
						d="M479.33-117.29 189.96-275.07v-240L34.18-600l445.15-242.95L925.82-600v320.95h-72.81v-279.52l-84.14 43.5v240L479.33-117.29Zm0-322.7L773.25-600 479.33-758.01 186.75-600l292.58 160.01Zm0 240.1 216.58-118.83v-154.85L479.33-357.05 262.76-474.9v156.18l216.57 118.83Zm.67-240.1Zm-.67 82.05Zm0 0Z"
					/></svg
				>
			</Nav>
			<Nav href="#experience" section="experience" isSelected={y > 2000}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="var(--accent)"
					viewBox="0 0 24 24"
					><path fill="none" d="M0 0h24v24H0z" /><path
						d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
					/></svg
				>
			</Nav>
		</ul>
	</div>
</nav>

<svelte:window bind:scrollY={y} on:scroll={moveNavBarOnScroll} />

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	div {
		width: 100%;
		text-align: center;
		align-items: center;
		position: fixed;
		top: 0;
		padding: 1.25rem 0;
		z-index: 15;
		background-color: var(--bg-color);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		background-blend-mode: overlay;
		transition: all 0.5s ease;

		ul {
			display: flex;
			gap: 4rem;
			justify-content: center;
		}
	}
	@media (min-width: 868px) {
		div {
			width: 53rem;
			border-radius: 12px;
		}
		.scrolled {
			border-bottom: 1.5px solid var(--accent-opacity);
			padding: 0.5rem 0;
			margin-top: 0.5rem;
			width: 53rem;
			background-color: var(--elevation-five);
			box-shadow: 0px 15px 8px -10px rgba(0, 0, 0, 0.4);
		}
	}

	@media (max-width: 868px) {
		div {
			bottom: 0;
			top: auto;
			padding: 0rem;
			display: flex;
			background-color: var(--elevation-one);
			overflow: scroll;
		}

		div ul {
			display: flex;
			justify-content: space-evenly;
		}
	}
</style>
