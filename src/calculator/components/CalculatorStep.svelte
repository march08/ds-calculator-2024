<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Select from './Select.svelte';
	import type { StepConfig, StoredCalcState, OptionOrDelimiter, UIState } from '../types.js';

	import { getContext } from 'svelte';
	import { isTruthy } from '../utils/isTruthy.js';
	import { fade } from 'svelte/transition';
	export let stepConfig: StepConfig;
	export let stateStep: keyof StoredCalcState;
	export let filterOptions: (option: OptionOrDelimiter) => boolean = isTruthy;
	export let id: string;
	export let visible: boolean;
	export let onChange: (values: string[]) => void = () => {};

	let answerState = getContext<Writable<StoredCalcState>>('answerState');
	let uiState = getContext<Writable<UIState>>('uiState');
	//
	let ref: HTMLDivElement | undefined;
	$: ref = undefined;

	$: isFocused = $uiState.currentFocus === stateStep;

	$: if (visible && ref) {
		if (ref) {
			ref.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			});
		}
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events-->
{#if visible}
	<div
		class="ds-calc-step"
		tabindex="-1"
		data-ds-calc-step={stateStep}
		{id}
		transition:fade
		bind:this={ref}
		role="region"
		class:focusedui={isFocused}
	>
		{#each stepConfig as item}
			<!-- <span>Hellooooooo09000 idjfaisjdf oijasdoif jaoisdjf oio</span> -->
			<!-- <span>Hello</span> -->
			{#if item.type === 'text'}
				<span>{item.data}</span>
			{/if}
			{#if item.type === 'select'}
				<span>
					<Select
						{...item.data}
						onOpen={() => {
							uiState.update((state) => ({
								...state,
								currentFocus: stateStep
							}));
						}}
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
							onChange(value);
						}}
					/>
				</span>
			{/if}
		{/each}
	</div>
{/if}

<style lang="scss" global>
	.ds-calc-step {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		font-style: normal;
		font-weight: 400;
		gap: 0 var(--assessment-step-items-gap);

		font-size: var(--assessment-font-size);
		letter-spacing: var(--assessment-font-letter-spacing);
		line-height: var(--question-line-height);

		color: #ffffff;

		transition: 0.5s all;

		opacity: 0.5;

		&.focusedui {
			opacity: 1;
		}
	}
</style>
