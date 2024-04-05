<script lang="ts">
	import { getContext } from 'svelte';
	import { isTruthy } from '../utils/isTruthy.js';
	import type { Writable } from 'svelte/store';
	import type { StoredCalcState, UIState } from '../types.js';

	let stepsContainerRef: HTMLDivElement | undefined;
	let uiState = getContext<Writable<UIState>>('uiState');

	let windowScrollY: number;
	let windowInnerHeight: number;

	const mostCenteredChildNode = () => {
		const childEls = Array.from(stepsContainerRef?.children || []);
		const windowCenterOffset = windowInnerHeight / 3;
		const distancesPerStep = childEls
			.map((childEl) => {
				const step = childEl.getAttribute('data-ds-calc-step');
				if (step) {
					const nodeRect = childEl.getBoundingClientRect();
					const nodeCenter = nodeRect.y + nodeRect.height;

					const topEdgeDistance = windowCenterOffset - nodeRect.top;
					const bottomEdgeDistance = windowCenterOffset - nodeRect.bottom;
					return {
						step,
						nodeCenter,
						topEdgeDistance,
						bottomEdgeDistance,
						minEdgeDistance: Math.min(Math.abs(topEdgeDistance), Math.abs(bottomEdgeDistance))
					};
				}
			})
			.filter(isTruthy);

		// find closest el to center
		let distance = Number.MAX_SAFE_INTEGER;
		let closestItem = 'first';

		distancesPerStep.forEach((item) => {
			if (item.minEdgeDistance < distance) {
				distance = item.minEdgeDistance;
				closestItem = item.step;
			}
		});

		if ($uiState.currentFocus !== closestItem) {
			uiState.update((state) => {
				return {
					...state,
					currentFocus: closestItem as keyof StoredCalcState
				};
			});
		}
	};

	$: windowScrollY && mostCenteredChildNode();
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowInnerHeight} />
<div class="ds-calc-steps-container" bind:this={stepsContainerRef}>
	<slot />
</div>

<style lang="scss">
	.ds-calc-steps-container {
		display: flex;
		flex-direction: column;
		gap: var(--assessment-step-gap);
		padding-bottom: 100px;
	}
</style>
