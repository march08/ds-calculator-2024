<script lang="ts">
	export let onClick: VoidFunction;
	export let disabled: boolean = false;
	export let data = {};
	$: dataProps = Object.entries(data).reduce(
		(acc, [key, value]) => ({ ...acc, [`data-${key}`]: value }),
		{}
	);
</script>

<button type="button" on:click={onClick} class="ds-calc-button" {disabled} {...dataProps}>
	<slot />
</button>

<style lang="scss" global>
	.ds-calc-button[type='button'] {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 16px 24px;
		gap: 4px;
		isolation: isolate;
		min-width: 40px;
		height: 56px;
		left: calc(50% - 222px / 2 - 47.5px);
		border: 1px solid rgba(255, 255, 255, 0.25);
		border-radius: 8px;

		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		color: #ffffff;
		background: transparent;
		transition: 0.2s all;
		text-wrap: nowrap;
		&:hover:not(:disabled) {
			border-color: #fff;
			cursor: pointer;
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}
</style>
