<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Select from './Select.svelte';
	import type { StepConfig, StoredCalcState, OptionOrDelimiter } from './types.js';

	import { getContext } from 'svelte';
	import { isTruthy } from './utils/isTruthy.js';
	let answerState = getContext<Writable<StoredCalcState>>('answerState');
	export let stepConfig: StepConfig;
	export let stateStep: keyof StoredCalcState;
	export let filterOptions: (option: OptionOrDelimiter) => boolean = isTruthy;
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
					options={item.data.options.filter(filterOptions)}
					value={$answerState[stateStep][item.data.key] || []}
					onChange={(value) => {
						answerState.update((prevState) => {
							if (item.type === 'select') {
								return {
									...prevState,
									[stateStep]: {
										...prevState[stateStep],

										[item.data.key]: value
									}
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

		line-height: var(--question-line-height);
		letter-spacing: -0.5px;

		color: #ffffff;
		& > *,
		& > span,
		& > div {
			margin-right: 16px;
		}
	}
</style>
