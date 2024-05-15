<script lang="ts">
	import CtaButtonContainer from './components/CtaButtonContainer.svelte';

	import { derived } from 'svelte/store';
	import CalculatorStep from './components/CalculatorStep.svelte';
	import { setContext } from 'svelte';
	import { isSectionVisible } from './utils/isSectionFilled.js';
	import StepsContainer from './components/StepsContainer.svelte';
	import { getSubmissionStore } from './stores/submissionStore.js';
	import { renderResultCards } from './externalDomManipulation/renderResultCards.js';
	import { calculate, type OverallResultWithTranslations } from './calculations/calculate.js';
	import { updateContactFormDescriptionField } from './externalDomManipulation/updateContactFormHiddenFields.js';
	import Button from './components/Button.svelte';
	import { toggleResult } from './externalDomManipulation/showResult.js';
	import { getUiStore } from './stores/uiStore.js';
	import { renderOverallResultCards } from './externalDomManipulation/renderOverallResultCards.js';
	import ResultPreviews from './components/utilityComponents/ResultPreviews.svelte';
	import type { ScrollInto } from './types.js';
	import { getOptionsSequence } from './utils/optionsSequence.js';
	import { TRANSLATION_STORE_CONTEXT, getTranslationStore } from './stores/translationStore.js';
	import type { WindowWithOptions } from './utils/getWindow.js';

	export let lang: string = 'en-US';

	const localeFromPathname = location.pathname.split('/')[1];

	const translationStore = getTranslationStore(localeFromPathname || lang);
	setContext(TRANSLATION_STORE_CONTEXT, translationStore);

	export let targetResultCardsContainerSelector: string = '';
	export let onResultCardsUpdate: VoidFunction = () => {};
	export let onCalculateAnimationStart: VoidFunction = () => {};
	export let onToggleResultVisibility: VoidFunction = () => {};
	export let scrollTo: ScrollInto = (target, options) => {
		// go with offset if center
		if (options.blockCenterOffset) {
			const yOffset = window.innerHeight / 3;
			const y = target.getBoundingClientRect().top + window.scrollY - yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		} else {
			target.scrollIntoView(options);
		}
	};

	$: $translationStore.lang &&
		((window as unknown as WindowWithOptions).langOptions = {
			currencyFormatter: {
				currency: $translationStore.currency,
				currencyDisplay: $translationStore.currencySymbol,
				currencyLocale: $translationStore.currencyLocale
			},
			lang: $translationStore.lang,
			valueMultiplier: $translationStore.valueMultiplier
		});

	/**
	 * submission store
	 */
	const { store: submissionFormState, defaultState: defaultSubmissionState } = getSubmissionStore(
		$translationStore.flowConfig
	);
	setContext('answerState', submissionFormState);

	/**
	 * ui state store
	 */
	const { store: uiStore } = getUiStore($submissionFormState);
	setContext('uiState', uiStore);

	/**
	 * controlling visibility
	 */

	$: visibilityB2B = isSectionVisible($submissionFormState, [], 'B2B');
	$: visibilityPROC = isSectionVisible($submissionFormState, ['B2B'], 'PROC');
	$: visibilityHR = isSectionVisible($submissionFormState, ['B2B', 'PROC'], 'HR');
	$: visibilityB2C = isSectionVisible($submissionFormState, ['B2B', 'PROC', 'HR'], 'B2C');
	$: visibilityLastSection = isSectionVisible($submissionFormState, ['B2B', 'PROC', 'HR', 'B2C']);

	const setResubmitState = (startFromTheBeginning: boolean = true) => {
		if ($uiStore.isSubmitted) {
			uiStore.update((state) => ({
				...state,
				currentFocus: startFromTheBeginning ? 'first' : state.currentFocus,
				isResubmitting: true,
				isSubmitted: false
			}));
		}
	};

	const setSubmittedState = () => {
		uiStore.update((state) => ({
			...state,
			activeOption: null,
			isResubmitting: false,
			isSubmitted: true
		}));
	};

	const handleChangeAreas = (key: string, values: string[]) => {
		// reset unused areas
		if (key === 'businessArea') {
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
		}

		uiStore.update((state) => ({
			...state,
			optionsSequence: getOptionsSequence($submissionFormState)
		}));

		handleSelectChange(key, values);
	};

	$: updateNextActiveOption = () => {
		/**
		 * update next activeOption
		 */

		let nextUnasweredOption: string | null = null;

		/**
		 * check first unanswered option
		 */

		const flatAnswerState = {
			...$submissionFormState.first,
			...$submissionFormState.B2B,
			...$submissionFormState.PROC,
			...$submissionFormState.HR,
			...$submissionFormState.B2C,
			...$submissionFormState.last
		};

		nextUnasweredOption =
			$uiStore.optionsSequence.find(
				(item) => !flatAnswerState[item] || flatAnswerState[item].length === 0
			) || null;

		if (!nextUnasweredOption) {
			/**
			 * check next available
			 */
			const currentOptionIndex = $uiStore.optionsSequence.findIndex(
				(item) => item === $uiStore.activeOption
			);
			const nextPossibleIndex = currentOptionIndex + 1;
			const nextIndex =
				nextPossibleIndex < $uiStore.optionsSequence.length ? nextPossibleIndex : null;

			nextUnasweredOption = nextIndex !== null ? $uiStore.optionsSequence[nextIndex] : null;
		}
		if (nextUnasweredOption) {
			setTimeout(() => {
				const nextSelect = document.querySelector(`#${nextUnasweredOption}`);
				if (nextSelect) {
					scrollTo(nextSelect as HTMLElement, {
						behavior: 'smooth',
						block: 'center',
						blockCenterOffset: true
					});
				}
			}, 100);
		} else if ($uiStore.isResubmitting) {
			setTimeout(() => {
				const toScroll = document.querySelector(`#ds-update-res-container`);
				if (toScroll) {
					scrollTo(toScroll as HTMLElement, {
						behavior: 'smooth',
						block: 'center',
						blockCenterOffset: true
					});
				}
			}, 100);
		}

		setTimeout(() => {
			uiStore.update((state) => ({
				...state,
				activeOption: nextUnasweredOption
			}));
		}, 400);
	};

	$: handleSelectChange = (key: string, val: string[]) => {
		if ($isSubmittedState) {
			setResubmitState(false);
		}
		updateNextActiveOption();
		onToggleResultVisibility();
	};

	/**
	 * result
	 */
	let result: OverallResultWithTranslations = {
		allRes: []
	} as any;
	$: result = calculate($submissionFormState, $translationStore);
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

	const toggleResultOptions = {
		onToggleResultVisibility,
		onCalculateAnimationStart,
		scrollInto: scrollTo
	};
	/**
	 * display results when submitted
	 */
	const isSubmittedState = derived(uiStore, (state) => state.isSubmitted);
	isSubmittedState.subscribe((state) => {
		if (state) {
			toggleResult(true, toggleResultOptions);
		} else {
			toggleResult(false, toggleResultOptions);
		}
	});
</script>

<div class="ds-calculator">
	<StepsContainer>
		<CalculatorStep
			visible={true}
			id="ds-calc-step-1"
			stateStep="first"
			stepConfig={$translationStore.flowConfig.calcConfigStep1}
			onChange={handleChangeAreas}
		/>
		<CalculatorStep
			visible={visibilityB2B}
			id="ds-calc-step-2-b2b"
			stateStep="B2B"
			stepConfig={$translationStore.flowConfig.calcConfigStep2b2b}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityPROC}
			id="ds-calc-step-2-proc"
			stateStep="PROC"
			stepConfig={$translationStore.flowConfig.calcConfigStep2procurement}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityHR}
			id="ds-calc-step-2-hr"
			stateStep="HR"
			stepConfig={$translationStore.flowConfig.calcConfigStep2hr}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityB2C}
			id="ds-calc-step-2-b2c"
			stateStep="B2C"
			stepConfig={$translationStore.flowConfig.calcConfigStep2b2c}
			onChange={handleSelectChange}
		/>
		<CalculatorStep
			visible={visibilityLastSection}
			id="ds-calc-step-3"
			stateStep="last"
			filterOptions={(option) => {
				return !!$submissionFormState.first.businessArea.find((area) => option.key?.includes(area));
			}}
			stepConfig={$translationStore.flowConfig.calcConfigLast}
			onChange={(values) => {
				setTimeout(() => {
					if (values.length === 0) {
						return;
					}

					updateNextActiveOption();

					if (!$uiStore.isResubmitting && !$uiStore.isSubmitted) {
						setSubmittedState();
					} else {
						setResubmitState(false);
					}
				}, 300);
			}}
		/>
	</StepsContainer>

	<CtaButtonContainer
		id="ds-update-res-container"
		visible={$uiStore.isResubmitting}
		isUpdateContainer
	>
		<Button
			onClick={handleManuallyUpdateAssessment}
			data={{
				action: 'update results',
				context: 'assessment-test'
			}}
			disabled={!canManuallyUpdate}
		>
			{$translationStore.translations.update_your_results}
		</Button>
	</CtaButtonContainer>
</div>

<ResultPreviews {result} />

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
		--primary-cobalt: #4c00ff;

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

	:global(#agreement-potential-form) {
		position: relative;
		z-index: 200;
	}
</style>
