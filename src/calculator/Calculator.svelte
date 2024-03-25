<script lang="ts">
	import { flowConfig } from './config.js';

	import { writable } from 'svelte/store';
	import CalculatorStep from './components/CalculatorStep.svelte';
	import { calcB2b } from './calculations/calculateB2B.js';
	import ResultPreview from './ResultPreview.svelte';
	import { calcB2c } from './calculations/calculateB2C.js';
	import { calcHr } from './calculations/calculateHr.js';
	import type { UIState, CalculatedResult, NumberRange, StoredCalcState } from './types.js';
	import { numberRangeToText, sumRange } from './utils/array.js';
	import { isTruthy } from './utils/isTruthy.js';
	import { formatUsd } from './utils/number.js';
	import { calcPROC } from './calculations/calculatePROC.js';
	import { setContext } from 'svelte';
	import { arePrevStepsCompleted } from './utils/isSectionFilled.js';
	import StepsContainer from './components/StepsContainer.svelte';
	import { getSubmissionStore } from './stores/submissionStore.js';
	import { sortCalculatedResult } from './utils/sortCalculatedResult.js';
	import { renderResult } from './utils/renderResult.js';

	let resultRef: HTMLDivElement | undefined;

	const { store: submissionFormState, defaultState } = getSubmissionStore(flowConfig);
	setContext('answerState', submissionFormState);

	const uiState = writable<UIState>({
		currentFocus: 'first'
	});
	setContext('uiState', uiState);

	$: driver = $submissionFormState.last.driver || [];

	// submissionFormState.subscribe((state) => {
	// 	const selectedBusinessAreas = state.first.businessArea;

	// 	const nextState: StoredCalcState = {
	// 		...state
	// 	};

	// 	const areas: (keyof StoredCalcState)[] = ['B2B', 'PROC', 'HR', 'B2C'] as const;

	// 	// reset unused areas
	// 	// __TODO we need to reset which won't cause subscribe state loop
	// 	areas.forEach((area: keyof StoredCalcState) => {
	// 		if (!selectedBusinessAreas.includes(area)) {
	// 			nextState[area] = defaultState[area];
	// 		}
	// 	});

	// 	// resets drivers
	// 	let nextDrivers = state.last.driver.filter(
	// 		(item) => !!areas.find((area) => item.includes(area))
	// 	);

	// 	nextState.last = {
	// 		driver: nextDrivers
	// 	};

	// 	// calcAnswersState.set(nextState);
	// 	return nextState;
	// });

	/**
	 * controlling visibility
	 */
	$: selectedBusinessAreas = $submissionFormState.first.businessArea;

	$: visibilityB2B =
		selectedBusinessAreas.includes('B2B') && arePrevStepsCompleted([], $submissionFormState)
			? true
			: false;

	$: visibilityPROC =
		selectedBusinessAreas.includes('PROC') && arePrevStepsCompleted(['B2B'], $submissionFormState)
			? true
			: false;

	$: visibilityHR =
		selectedBusinessAreas.includes('HR') &&
		arePrevStepsCompleted(['B2B', 'PROC'], $submissionFormState)
			? true
			: false;

	$: visibilityB2C =
		selectedBusinessAreas.includes('B2C') &&
		arePrevStepsCompleted(['B2B', 'PROC', 'HR'], $submissionFormState)
			? true
			: false;

	$: visibilityLastSection = arePrevStepsCompleted(
		['B2B', 'PROC', 'HR', 'B2C'],
		$submissionFormState
	)
		? true
		: false;

	/**
	 * calculations
	 */

	$: b2bResult = calcB2b(driver, $submissionFormState.B2B as any);
	$: b2bResult_hourlyImpact = sumRange(b2bResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2bResult_financialImpact = sumRange(
		b2bResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: hrResult = calcHr(driver, $submissionFormState.HR as any);
	$: hrResult_hourlyImpact = sumRange(hrResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: hrResult_financialImpact = sumRange(
		hrResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: b2cResult = calcB2c(driver, $submissionFormState.B2C as any);
	$: b2cResult_hourlyImpact = sumRange(b2cResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2cResult_financialImpact = sumRange(
		b2cResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: procResult = calcPROC(driver, $submissionFormState.PROC as any);
	$: procResult_hourlyImpact = sumRange(
		procResult.map((item) => item.hourlyImpact).filter(isTruthy)
	);
	$: procResult_financialImpact = sumRange(
		procResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	let allRes: CalculatedResult[];
	$: allRes = [...b2bResult, ...procResult, ...hrResult, ...b2cResult];

	$: if (allRes.length > 0) {
		const sorted = sortCalculatedResult(allRes);
		renderResult(sorted);
	}

	let hourlyImpact: NumberRange, financialImpact: NumberRange;
	$: hourlyImpact = sumRange(allRes.map((item) => item.hourlyImpact).filter(isTruthy));
	$: hourlyImpactText = numberRangeToText(hourlyImpact);
	$: financialImpact = sumRange(allRes.map((item) => item.financialImpact).filter(isTruthy));
	$: financialImpactText = numberRangeToText(financialImpact, formatUsd);

	$: allResText = allRes.map((item) => item.text).join('; ');
	$: totalImpactText = `Hourly impact: ${hourlyImpactText}, financial impact: ${financialImpactText}`;

	const updateContactFormDescriptionField = () => {
		if (typeof document !== 'undefined') {
			const textAreaEl: HTMLTextAreaElement | null = document.querySelector(
				'#gate-contact-form textarea[name=description]'
			);
			console.log(textAreaEl);

			if (textAreaEl) {
				textAreaEl.value = `FIELD IS DISPLAYED FOR TESTING PURPOSES

${allResText}

${totalImpactText}`;
			}
		}
	};

	$: (totalImpactText || allResText) && updateContactFormDescriptionField();
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
	<div class="ds-calc-steps-container" bind:this={resultRef}>
		<div>
			<h3>Hourly impact: {hourlyImpactText}</h3>
			<h3>Financial impact: {financialImpactText}</h3>
		</div>
		<ResultPreview
			title="B2B result"
			result={b2bResult}
			financialImpact={b2bResult_financialImpact}
			hourlyImpactImpact={b2bResult_hourlyImpact}
		/>
		<ResultPreview
			title="Procurement"
			result={procResult}
			financialImpact={procResult_financialImpact}
			hourlyImpactImpact={procResult_hourlyImpact}
		/>
		<ResultPreview
			title="HR result"
			result={hrResult}
			financialImpact={hrResult_financialImpact}
			hourlyImpactImpact={hrResult_hourlyImpact}
		/>
		<ResultPreview
			title="B2C result"
			result={b2cResult}
			financialImpact={b2cResult_financialImpact}
			hourlyImpactImpact={b2cResult_hourlyImpact}
		/>
	</div>
	<div class="ds-calc-steps-container">
		<div id="gate-contact-form" class="gate-a6428bda-8a1c-4dfc-9866-5232101b2e52"></div>
	</div>

	<script>
		(function (g, a, t, e, d, c, o) {
			if (!g[d]) {
				g.GatedContentObject = d;
				g[d] =
					g[d] ||
					function () {
						(g[d].q = g[d].q || []).push(arguments);
					};
				(c = a.createElement(t)), (o = a.getElementsByTagName(t)[0]);
				c.async = 1;
				c.src = e;
				o.parentNode.insertBefore(c, o);
			}
		})(window, document, 'script', 'https://app.gatedcontent.com/scripts/63536885/app.js', 'gcdc');
		gcdc('loadGates');
	</script>
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
