<script lang="ts">
	import CtaButtonContainer from './components/CtaButtonContainer.svelte';
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
	import Button from './components/Button.svelte';
	import { toggleResult } from './externalDomManipulation/showResult.js';
	import { getUiStore } from './stores/uiStore.js';

	let formCtaContainerRef: HTMLDivElement | undefined;

	const {
		store: submissionFormState,
		defaultState,
		resetStore: resetSubmissionStore
	} = getSubmissionStore(flowConfig);
	setContext('answerState', submissionFormState);

	const { store: uiStore, resetStore: resetUiStore } = getUiStore();
	setContext('uiState', uiStore);

	/**
	 * controlling visibility
	 */

	$: visibilityB2B = isSectionVisible($submissionFormState, [], 'B2B');
	$: visibilityPROC = isSectionVisible($submissionFormState, ['B2B'], 'PROC');
	$: visibilityHR = isSectionVisible($submissionFormState, ['B2B', 'PROC'], 'HR');
	$: visibilityB2C = isSectionVisible($submissionFormState, ['B2B', 'PROC', 'HR'], 'B2C');
	$: visibilityLastSection = isSectionVisible($submissionFormState, ['B2B', 'PROC', 'HR', 'B2C']);

	const scrollTopTopOfTheForm = () => {
		document.getElementById('ds-calc-step-1')?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	};

	const resetForm = () => {
		resetSubmissionStore();
		resetUiStore();
		scrollTopTopOfTheForm();
	};

	$: setResubmitState = () => {
		uiStore.set({
			currentFocus: 'first',
			isResubmitting: true,
			isSubmitted: false
		});
	};

	$: setSubmitState = () => {
		uiStore.update((state) => ({
			...state,
			isResubmitting: false,
			isSubmitted: true
		}));
	};

	const handleEditAssessment = () => {
		scrollTopTopOfTheForm();
		setResubmitState();
	};

	/**
	 * if the form has been submitted and user decides to update it
	 * set the state to being resubmitted
	 */
	// $: $submissionFormState && $uiStore.isSubmitted && setResubmitState();

	$: transitionToResult = () => {
		formCtaContainerRef &&
			formCtaContainerRef.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
	};

	$: if ($uiStore.isSubmitted) {
		toggleResult(true);
	} else {
		toggleResult(false);
	}
	$: if ($uiStore.isSubmitted) {
		transitionToResult();
	}

	/**
	 * result
	 */
	let result: OverallResult = {
		allRes: []
	} as any;
	$: result = calculate($submissionFormState);
	$: resultItems = result.allRes;

	$: handleManuallyUpdateAssessment = () => {
		console.log('handleManuallyUpdateAssessment');
		if (result.allRes.length > 0) {
			setSubmitState();
			transitionToResult();
		}
		console.log($uiStore);
	};

	$: canManuallyUpdate = $uiStore.isResubmitting && result.allRes.length > 0;

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
			onChange={(values) => {
				setTimeout(() => {
					if (values.length === 0) {
						return;
					}

					if (!$uiStore.isResubmitting) {
						setSubmitState();
					}
				}, 1000);
			}}
		/>
		<CtaButtonContainer visible={$uiStore.isResubmitting} isUpdateContainer>
			<Button disabled={!canManuallyUpdate} onClick={handleManuallyUpdateAssessment}
				>Update your Results</Button
			>
			<a on:click={resetForm}>Reset form (dev only)</a>
		</CtaButtonContainer>
	</StepsContainer>

	<div bind:this={formCtaContainerRef}>
		<CtaButtonContainer visible={$uiStore.isSubmitted} id="ds-calc-cta-container">
			<Button onClick={handleEditAssessment}>
				Edit your Assessment
				<svg
					width="17"
					height="16"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4.02856 6.86128L8.02856 2.86128C8.28891 2.60093 8.71102 2.60093 8.97137 2.86128L12.9714 6.86128L12.0286 7.80409L9.16664 4.94216L9.16664 13.3327H7.8333L7.8333 4.94216L4.97137 7.80409L4.02856 6.86128Z"
						fill="white"
					/>
				</svg>
			</Button>
		</CtaButtonContainer>
	</div>
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
