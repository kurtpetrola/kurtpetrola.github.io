<script lang="ts">
	let zoom: boolean;
</script>

<div class="img-container">
	<div
		on:mousemove={() => {
			zoom = true;
		}}
		on:mouseleave={() => {
			zoom = false;
		}}
		class="img"
		role="img"
		style:background-image="url(resources/katopic.jpg)"
		style:transform="perspective(500px) {zoom ? 'scale(1.05)' : ''}"
	></div>
</div>

<style lang="scss">
	.img {
		border-radius: 200px;
		width: 425px;
		height: 400px;
		z-index: 1;
		display: block;
		transition:
			width 0.4s var(--bezier-one),
			transform 0.4s var(--bezier-one);
		align-self: start;
		background-color: var(--elevation-one);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		@media (max-width: 768px) {
			display: none;
		}

		@media (max-width: 1240px) {
			width: clamp(340px, 40vw, 425px);
			height: clamp(300px, 40vw, 400px);
		}
	}

	.img-container {
		z-index: 1;
		animation: float 6s ease-in-out infinite;
		animation-play-state: running;

		@media (max-width: 1240px) {
			display: flex;
			justify-content: center;
		}
	}
</style>
