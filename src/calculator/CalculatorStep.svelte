<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Select from './Select.svelte';
	import type { StepConfig } from './types.js';
	import type { StepState } from './generateBaseStateFromConfig.js';
	export let stepConfig: StepConfig;
	export let state: Writable<StepState>;
	export let id: string;
</script>

<div class="ds-calc-step" {id}>
	{#each stepConfig as item}
		{#if item.type === 'text'}
			<span>{item.data}</span>
		{/if}
		{#if item.type === 'select'}
			<div>
				<Select
					{...item.data}
					value={$state[item.data.key] || []}
					onChange={(value) => {
						state.update((prevState) => {
							if (item.type === 'select') {
								return {
									...prevState,
									[item.data.key]: value
								};
							}
							return prevState;
						});
					}}
				/>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss" global>
	.ds-calc-step {
		display: flex;
		flex-wrap: wrap;
		font-style: normal;
		font-weight: 400;
		font-size: 36px;

		line-height: calc(60px + 12px);
		/* or 43px */
		letter-spacing: -0.5px;

		color: #ffffff;
		& > *,
		& > span,
		& > div {
			margin-right: 12px;
		}
	}
</style>
