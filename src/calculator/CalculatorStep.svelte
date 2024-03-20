<script lang="ts">
	import type { Writable } from 'svelte/store';
	import Select from './Select.svelte';
	import type { StepConfig, StoredCalcState, OptionOrDelimiter, UIState } from './types.js';

	import { getContext } from 'svelte';
	import { isTruthy } from './utils/isTruthy.js';
	import { fade, slide } from 'svelte/transition';
	export let stepConfig: StepConfig;
	export let stateStep: keyof StoredCalcState;
	export let filterOptions: (option: OptionOrDelimiter) => boolean = isTruthy;
	export let id: string;
	export let visible: boolean;
	export let onChange: VoidFunction = () => {};

	let answerState = getContext<Writable<StoredCalcState>>('answerState');
	let uiState = getContext<Writable<UIState>>('uiState');

	let ref: HTMLDivElement | undefined;

	$: isFocused = $uiState.currentFocus === stateStep;

	$: setFocus = () => {
		// if (isFocused) {
		// 	return;
		// }
		// console.log('ss', stateStep);
		if (ref) {
			ref.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			});
		}
		// uiState.update((state) => {
		// 	return {
		// 		...state,
		// 		currentFocus: stateStep
		// 	};
		// });
	};

	$: if (visible && ref) {
		setTimeout(setFocus, 200);
	}
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events-->
{#if visible}
	<div
		class="ds-calc-step"
		{id}
		transition:fade
		bind:this={ref}
		role="region"
		class:focusedui={isFocused || true}
		on:click={() => {
			setFocus();
		}}
	>
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
							onChange();
						}}
					/>
				</div>
			{/if}
		{/each}
	</div>
{/if}

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

		transition: 0.5s all;

		opacity: 0.5;
		&.focusedui {
			opacity: 1;
		}
	}
</style>
