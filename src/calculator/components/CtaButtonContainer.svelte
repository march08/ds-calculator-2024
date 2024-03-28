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
		transition: 1s all;
		transition-delay: 0.75s;
		&.update {
			padding-top: 30px;
		}
		&.visible {
			opacity: 1;
		}
	}

	#ds-calc-cta-update-container {
		position: absolute;
		top: calc(100% + 120px);
		left: 50%;
		transform: translateX(-50%);
		z-index: 500;
	}
</style>
