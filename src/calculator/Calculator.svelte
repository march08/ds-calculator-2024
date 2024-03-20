<script lang="ts">
	import { flowConfig } from './config.js';

	import { writable } from 'svelte/store';
	import CalculatorStep from './CalculatorStep.svelte';
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
	import { generateBaseStateFromConfig } from './generateBaseStateFromConfig.js';
	import { arePrevStepsCompleted } from './utils/isSectionFilled.js';

	let resultRef: HTMLDivElement | undefined;
	let focusedKey: keyof StoredCalcState;
	$: focusedKey = 'first';

	const defaultState = {
		first: generateBaseStateFromConfig(flowConfig.calcConfigStep1),
		B2B: generateBaseStateFromConfig(flowConfig.calcConfigStep2b2b),
		PROC: generateBaseStateFromConfig(flowConfig.calcConfigStep2procurement),
		HR: generateBaseStateFromConfig(flowConfig.calcConfigStep2hr),
		B2C: generateBaseStateFromConfig(flowConfig.calcConfigStep2b2c),
		last: generateBaseStateFromConfig(flowConfig.calcConfigLast)
	};

	const visibility = {
		first: true,
		B2B: false,
		PROC: false,
		HR: false,
		B2C: false,
		last: false
	};

	const calcAnswersState = writable<StoredCalcState>(defaultState);
	setContext('answerState', calcAnswersState);

	const uiState = writable<UIState>({
		currentFocus: 'first'
	});
	setContext('uiState', uiState);

	$: driver = $calcAnswersState.last.driver || [];

	calcAnswersState.subscribe((state) => {
		const selectedBusinessAreas = state.first.businessArea;

		const nextState: StoredCalcState = {
			...state
		};

		const areas: (keyof StoredCalcState)[] = ['B2B', 'PROC', 'HR', 'B2C'] as const;

		// reset unused areas
		areas.forEach((area: keyof StoredCalcState) => {
			if (!selectedBusinessAreas.includes(area)) {
				nextState[area] = defaultState[area];
			}
		});

		// resets drivers
		let nextDrivers = state.last.driver.filter(
			(item) => !!areas.find((area) => item.includes(area))
		);

		nextState.last = {
			driver: nextDrivers
		};

		// display or hide sections

		if (selectedBusinessAreas.includes('B2B') && arePrevStepsCompleted([], state)) {
			visibility.B2B = true;
		} else {
			visibility.B2B = false;
		}

		if (selectedBusinessAreas.includes('PROC') && arePrevStepsCompleted(['B2B'], state)) {
			visibility.PROC = true;
		} else {
			visibility.PROC = false;
		}
		if (selectedBusinessAreas.includes('HR') && arePrevStepsCompleted(['B2B', 'PROC'], state)) {
			visibility.HR = true;
		} else {
			visibility.HR = false;
		}
		if (
			selectedBusinessAreas.includes('B2C') &&
			arePrevStepsCompleted(['B2B', 'PROC', 'HR'], state)
		) {
			visibility.B2C = true;
		} else {
			visibility.B2C = false;
		}
		if (arePrevStepsCompleted(['B2B', 'PROC', 'HR', 'B2C'], state)) {
			visibility.last = true;
		} else {
			visibility.last = false;
		}

		return nextState;
	});

	/**
	 * calculations
	 */

	$: b2bResult = calcB2b(driver, $calcAnswersState.B2B as any);
	$: b2bResult_hourlyImpact = sumRange(b2bResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2bResult_financialImpact = sumRange(
		b2bResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: hrResult = calcHr(driver, $calcAnswersState.HR as any);
	$: hrResult_hourlyImpact = sumRange(hrResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: hrResult_financialImpact = sumRange(
		hrResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: b2cResult = calcB2c(driver, $calcAnswersState.B2C as any);
	$: b2cResult_hourlyImpact = sumRange(b2cResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2cResult_financialImpact = sumRange(
		b2cResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: procResult = calcPROC(driver, $calcAnswersState.PROC as any);
	$: procResult_hourlyImpact = sumRange(
		procResult.map((item) => item.hourlyImpact).filter(isTruthy)
	);
	$: procResult_financialImpact = sumRange(
		procResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	let allRes: CalculatedResult[];
	$: allRes = [...b2bResult, ...hrResult, ...b2cResult];
	let hourlyImpact: NumberRange, financialImpact: NumberRange;
	$: hourlyImpact = sumRange(allRes.map((item) => item.hourlyImpact).filter(isTruthy));
	$: financialImpact = sumRange(allRes.map((item) => item.financialImpact).filter(isTruthy));
</script>

<div class="ds-calculator">
	<div class="ds-calc-steps-container">
		<CalculatorStep
			visible={true}
			id="ds-calc-step-1"
			stateStep="first"
			stepConfig={flowConfig.calcConfigStep1}
		/>
		<CalculatorStep
			visible={visibility.B2B}
			id="ds-calc-step-2-b2b"
			stateStep="B2B"
			stepConfig={flowConfig.calcConfigStep2b2b}
		/>
		<CalculatorStep
			visible={visibility.PROC}
			id="ds-calc-step-2-proc"
			stateStep="PROC"
			stepConfig={flowConfig.calcConfigStep2procurement}
		/>
		<CalculatorStep
			visible={visibility.HR}
			id="ds-calc-step-2-hr"
			stateStep="HR"
			stepConfig={flowConfig.calcConfigStep2hr}
		/>
		<CalculatorStep
			visible={visibility.B2C}
			id="ds-calc-step-2-b2c"
			stateStep="B2C"
			stepConfig={flowConfig.calcConfigStep2b2c}
		/>
		<CalculatorStep
			visible={visibility.last}
			id="ds-calc-step-3"
			stateStep="last"
			filterOptions={(option) => {
				return !!$calcAnswersState.first.businessArea.find((area) => option.key?.includes(area));
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
	</div>
	<div class="ds-calc-steps-container" bind:this={resultRef}>
		<div>
			<h3>Hourly impact: {numberRangeToText(hourlyImpact)}</h3>
			<h3>Financial impact: {numberRangeToText(financialImpact, formatUsd)}</h3>
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

	.ds-calc-steps-container {
		display: flex;
		flex-direction: column;
		gap: 33px;
		padding-bottom: 300px;
	}
</style>
