<script lang="ts">
	import { flowConfig } from './config.js';

	import { writable } from 'svelte/store';
	import CalculatorStep from './CalculatorStep.svelte';
	import { calcB2b } from './calculations/calculateB2B.js';
	import ResultPreview from './ResultPreview.svelte';
	import { calcB2c } from './calculations/calculateB2C.js';
	import { calcHr } from './calculations/calculateHr.js';
	import type { CalculatedResult, NumberRange, StoredCalcState } from './types.js';
	import { numberRangeToText, sumRange } from './utils/array.js';
	import { isTruthy } from './utils/isTruthy.js';
	import { formatUsd } from './utils/number.js';
	import { calcPROC } from './calculations/calculatePROC.js';
	import { setContext } from 'svelte';

	const calcAnswersState = writable<StoredCalcState>({
		first: {},
		b2b: {},
		proc: {},
		hr: {},
		b2c: {},
		last: {}
	});

	setContext('answerState', calcAnswersState);

	$: driver = $calcAnswersState.last.driver || [];

	$: b2bResult = calcB2b(driver, $calcAnswersState.b2b as any);
	$: b2bResult_hourlyImpact = sumRange(b2bResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2bResult_financialImpact = sumRange(
		b2bResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: hrResult = calcHr(driver, $calcAnswersState.hr as any);
	$: hrResult_hourlyImpact = sumRange(hrResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: hrResult_financialImpact = sumRange(
		hrResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: b2cResult = calcB2c(driver, $calcAnswersState.b2c as any);
	$: b2cResult_hourlyImpact = sumRange(b2cResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2cResult_financialImpact = sumRange(
		b2cResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: procResult = calcPROC(driver, $calcAnswersState.proc as any);
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
		<CalculatorStep id="ds-calc-step-1" stateStep="first" stepConfig={flowConfig.calcConfigStep1} />
		<CalculatorStep
			id="ds-calc-step-2-b2b"
			stateStep="b2b"
			stepConfig={flowConfig.calcConfigStep2b2b}
		/>
		<CalculatorStep
			id="ds-calc-step-2-proc"
			stateStep="proc"
			stepConfig={flowConfig.calcConfigStep2procurement}
		/>
		<CalculatorStep
			id="ds-calc-step-2-hr"
			stateStep="hr"
			stepConfig={flowConfig.calcConfigStep2hr}
		/>
		<CalculatorStep
			id="ds-calc-step-2-b2c"
			stateStep="b2c"
			stepConfig={flowConfig.calcConfigStep2b2c}
		/>
		<CalculatorStep
			id="ds-calc-step-3"
			stateStep="last"
			stepConfig={flowConfig.getCalcConfigStep3($calcAnswersState.first.businessArea || [])}
		/>
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
	}
</style>
