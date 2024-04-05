<script lang="ts">
	export let visible: boolean;
	export let id: string = '';
	export let isUpdateContainer: boolean = false;
</script>

<div class="ds-calc-cta-container" class:update={isUpdateContainer} {id} class:visible>
	<slot />
</div>

<style lang="scss" global>
	.ds-calc-cta-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding-top: 81px;
		gap: 16px;
		opacity: 0;
		transition: 0.3s all;
		transition-delay: 0.2s;
		padding-bottom: 60dvh;
		@media screen and (max-width: 479px) {
			padding-top: 40px;
		}
		&.visible {
			opacity: 1;
		}
	}
</style>
