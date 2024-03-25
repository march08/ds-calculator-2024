<script lang="ts">
	import { flowConfig } from './config.js';

	import { writable } from 'svelte/store';
	import CalculatorStep from './components/CalculatorStep.svelte';
	import type { UIState, NumberRange } from './types.js';
	import { numberRangeToText, sumRange } from './utils/array.js';
	import { isTruthy } from './utils/isTruthy.js';
	import { formatUsd } from './utils/number.js';
	import { setContext } from 'svelte';
	import { isSectionVisible } from './utils/isSectionFilled.js';
	import StepsContainer from './components/StepsContainer.svelte';
	import { getSubmissionStore } from './stores/submissionStore.js';
	import { sortCalculatedResult } from './utils/sortCalculatedResult.js';
	import { renderResult } from './utils/renderResult.js';
	import { calculate, type OverallResult } from './calculations/calculate.js';
	import { updateContactFormDescriptionField } from './externalDomManipulation/updateContactFormDescriptionField.js';

	let resultRef: HTMLDivElement | undefined;

	const { store: submissionFormState, defaultState } = getSubmissionStore(flowConfig);
	setContext('answerState', submissionFormState);

	const uiState = writable<UIState>({
		currentFocus: 'first'
	});
	setContext('uiState', uiState);

	/**
	 * controlling visibility
	 */

	$: visibilityB2B = isSectionVisible($submissionFormState, [], 'B2B');
	$: visibilityPROC = isSectionVisible($submissionFormState, ['B2B'], 'PROC');
	$: visibilityHR = isSectionVisible($submissionFormState, ['B2B', 'PROC'], 'HR');
	$: visibilityB2C = isSectionVisible($submissionFormState, ['B2B', 'PROC', 'HR'], 'B2C');
	$: visibilityLastSection = isSectionVisible($submissionFormState, ['B2B', 'PROC', 'HR', 'B2C']);

	/**
	 * result
	 */
	let result: OverallResult = {
		allRes: []
	} as any;
	$: result = calculate($submissionFormState);
	$: resultItems = result.allRes;

	$: if (resultItems.length > 0) {
		const sorted = sortCalculatedResult(resultItems);
		renderResult(sorted);
	}

	let hourlyImpact: NumberRange, financialImpact: NumberRange;
	$: hourlyImpact = sumRange(resultItems.map((item) => item.hourlyImpact).filter(isTruthy));
	$: hourlyImpactText = numberRangeToText(hourlyImpact);
	$: financialImpact = sumRange(resultItems.map((item) => item.financialImpact).filter(isTruthy));
	$: financialImpactText = numberRangeToText(financialImpact, formatUsd);

	$: allResText = resultItems.map((item) => item.text).join('; ');
	$: totalImpactText = `Hourly impact: ${hourlyImpactText}, financial impact: ${financialImpactText}`;

	/**
	 * update contact form description field
	 */
	$: (totalImpactText || allResText) &&
		updateContactFormDescriptionField(allResText, totalImpactText);
</script>

<div class="ds-calculator">
	<StepsContainer>
		<CalculatorStep
			visible={true}
			id="ds-calc-step-1"
			stateStep="first"
			stepConfig={flowConfig.calcConfigStep1}
		/>
		<CalculatorStep
			visible={visibilityB2B}
			id="ds-calc-step-2-b2b"
			stateStep="B2B"
			stepConfig={flowConfig.calcConfigStep2b2b}
		/>
		<CalculatorStep
			visible={visibilityPROC}
			id="ds-calc-step-2-proc"
			stateStep="PROC"
			stepConfig={flowConfig.calcConfigStep2procurement}
		/>
		<CalculatorStep
			visible={visibilityHR}
			id="ds-calc-step-2-hr"
			stateStep="HR"
			stepConfig={flowConfig.calcConfigStep2hr}
		/>
		<CalculatorStep
			visible={visibilityB2C}
			id="ds-calc-step-2-b2c"
			stateStep="B2C"
			stepConfig={flowConfig.calcConfigStep2b2c}
		/>
		<CalculatorStep
			visible={visibilityLastSection}
			id="ds-calc-step-3"
			stateStep="last"
			filterOptions={(option) => {
				return !!$submissionFormState.first.businessArea.find((area) => option.key?.includes(area));
			}}
			stepConfig={flowConfig.calcConfigLast}
			onChange={() => {
				setTimeout(() => {
					if (resultRef) {
						resultRef.scrollIntoView({
							behavior: 'smooth'
						});
					}
				}, 1000);
			}}
		/>
	</StepsContainer>
</div>

<style lang="scss" global>
	.ds-calculator {
		--text-primary: #130032;
		--text-secondary: #191823bf;
		--bg-primary: #fff;
		--bg-secondary: #f8f3f0;
		--border-primary: #13003226;
		--question-line-height: calc(59px + 8px);
		--text-disabled: #13003240;
		button,
		select,
		input {
			-webkit-appearance: none;
			appearance: none;
		}
	}
</style>
