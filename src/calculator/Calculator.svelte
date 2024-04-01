<script lang="ts">
	import CtaButtonContainer from './components/CtaButtonContainer.svelte';
	import { flowConfig } from './config.js';

	import { derived } from 'svelte/store';
	import CalculatorStep from './components/CalculatorStep.svelte';
	import { setContext } from 'svelte';
	import { isSectionVisible } from './utils/isSectionFilled.js';
	import StepsContainer from './components/StepsContainer.svelte';
	import { getSubmissionStore } from './stores/submissionStore.js';
	import { renderResultCards } from './externalDomManipulation/renderResultCards.js';
	import { calculate } from './calculations/calculate.js';
	import { updateContactFormDescriptionField } from './externalDomManipulation/updateContactFormDescriptionField.js';
	import Button from './components/Button.svelte';
	import { toggleResult } from './externalDomManipulation/showResult.js';
	import { getUiStore } from './stores/uiStore.js';
	import { renderOverallResultCards } from './externalDomManipulation/renderOverallResultCards.js';
	import ResultPreviews from './components/utilityComponents/ResultPreviews.svelte';
	import type { OverallResult } from './types.js';

	export let targetResultCardsContainerSelector: string = '';
	export let onResultCardsUpdate: VoidFunction = () => {};
	export let onCalculateAnimationStart: VoidFunction = () => {};
	export let onToggleResultVisibility: VoidFunction = () => {};

	const {
		store: submissionFormState,
		defaultState: defaultSubmissionState,
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
		scrollTopTopOfTheForm();
		setTimeout(() => {
			resetSubmissionStore();
			resetUiStore();
		}, 300);
	};

	const setResubmitState = (startFromTheBeginning: boolean = true) => {
		uiStore.update((state) => ({
			...state,
			currentFocus: startFromTheBeginning ? 'first' : state.currentFocus,
			isResubmitting: true,
			isSubmitted: false
		}));
	};

	const setSubmittedState = () => {
		uiStore.update((state) => ({
			...state,
			isResubmitting: false,
			isSubmitted: true
		}));
	};

	const handleChangeAreas = (values: string[]) => {
		// reset unused areas
		submissionFormState.update((state) => {
			return {
				...state,
				B2B: values.includes('B2B') ? state.B2B : defaultSubmissionState.B2B,
				PROC: values.includes('PROC') ? state.PROC : defaultSubmissionState.PROC,
				HR: values.includes('HR') ? state.HR : defaultSubmissionState.HR,
				B2C: values.includes('B2C') ? state.B2C : defaultSubmissionState.B2C,
				last: {
					...state.last,
					driver: state.last.driver.filter((d) => {
						return values.filter((val) => d.includes(val)).length > 0;
					})
				}
			};
		});

		handleSelectChange();
	};

	const handleEditAssessment = () => {
		scrollTopTopOfTheForm();
		setTimeout(() => {
			setResubmitState();
		}, 1000);
	};

	$: handleSelectChange = () => {
		if ($isSubmittedState) {
			setResubmitState(false);
		}
		onToggleResultVisibility();
	};

	/**
	 * result
	 */
	let result: OverallResult = {
		allRes: []
	} as any;
	$: result = calculate($submissionFormState);
	$: resultItems = result.allRes;

	$: handleManuallyUpdateAssessment = () => {
		if (result.allRes.length > 0) {
			updateContactFormDescriptionField(result);
			setSubmittedState();
		}
	};

	$: canManuallyUpdate =
		$uiStore.isResubmitting && result.allRes.length > 0 && visibilityLastSection;

	$: if (resultItems.length > 0) {
		renderResultCards(resultItems, targetResultCardsContainerSelector);
		renderOverallResultCards(result);
		onResultCardsUpdate();
		updateContactFormDescriptionField(result);
	}

	/**
	 * if the form has been submitted and user decides to update it
	 * set the state to being resubmitted
	 */
	// $: $submissionFormState && $uiStore.isSubmitted && setResubmitState();

	/**
	 * display results when submitted
	 */
	const isSubmittedState = derived(uiStore, (state) => state.isSubmitted);
	isSubmittedState.subscribe((state) => {
		if (state) {
			toggleResult(true, onToggleResultVisibility, onCalculateAnimationStart);
		} else {
			toggleResult(false, onToggleResultVisibility, onCalculateAnimationStart);
		}
	});
</script>

<div class="ds-calculator">
	<StepsContainer>
		<CalculatorStep
			visible={true}
			id="ds-calc-step-1"
			stateStep="first"
			stepConfig={flowConfig.calcConfigStep1}
			onChange={handleChangeAreas}
		/>
		<CalculatorStep
			visible={visibilityB2B}
			id="ds-calc-step-2-b2b"
			stateStep="B2B"
			stepConfig={flowConfig.calcConfigStep2b2b}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityPROC}
			id="ds-calc-step-2-proc"
			stateStep="PROC"
			stepConfig={flowConfig.calcConfigStep2procurement}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityHR}
			id="ds-calc-step-2-hr"
			stateStep="HR"
			stepConfig={flowConfig.calcConfigStep2hr}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityB2C}
			id="ds-calc-step-2-b2c"
			stateStep="B2C"
			stepConfig={flowConfig.calcConfigStep2b2c}
			onChange={handleSelectChange}
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

					if ($uiStore.isSubmitted) {
						handleSelectChange();
					} else if (!$uiStore.isResubmitting) {
						setSubmittedState();
					}
				}, 300);
			}}
		/>
	</StepsContainer>

	<CtaButtonContainer visible={$uiStore.isResubmitting} isUpdateContainer>
		<Button disabled={!canManuallyUpdate} onClick={handleManuallyUpdateAssessment}
			>Update your Results</Button
		>
		<a on:click={resetForm}>Reset form (dev only)</a>
	</CtaButtonContainer>
	<CtaButtonContainer visible={$uiStore.isSubmitted} id="ds-calc-cta-update-container">
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

<ResultPreviews {result} />
<div id="ui-calc-loader">
	<h3>Calculating</h3>
</div>

<style lang="scss" global>
	.ds-calculator {
		position: relative;
		z-index: 500;

		--text-primary: #130032;
		--text-secondary: #191823bf;
		--bg-primary: #fff;
		--bg-secondary: #f8f3f0;
		--border-primary: #13003226;
		--text-disabled: #13003240;

		--assessment-font-size: 36px;
		--assessment-font-letter-spacing: -0.5px;
		--question-line-height: calc(59px + 8px);
		--assessment-step-items-gap: 16px;
		--assessment-step-gap: 33px;

		@media screen and (max-width: 479px) {
			--assessment-font-size: 24px;
			--assessment-font-letter-spacing: -0.25px;
			--question-line-height: calc(38px + 8px);
			--assessment-step-items-gap: 12px;
			--assessment-step-gap: 32px;
		}

		button,
		select,
		input {
			-webkit-appearance: none;
			appearance: none;
		}
	}

	#ui-calc-loader {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #4c00ff;
		z-index: 100000;
		color: white;
		opacity: 0;
		pointer-events: none;
		transition: 0.5s all;
	}
</style>
