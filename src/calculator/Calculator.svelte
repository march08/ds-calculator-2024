<script lang="ts">
	import { flowConfig } from './config.js';

	import { writable } from 'svelte/store';
	import { generateBaseStateFromConfig, type StepState } from './generateBaseStateFromConfig.js';
	import CalculatorStep from './CalculatorStep.svelte';
	import { calcB2b } from './calculations/calculateB2B.js';
	import ResultPreview from './ResultPreview.svelte';
	import { calcB2c } from './calculations/calculateB2C.js';
	import { calcHr } from './calculations/calculateHr.js';
	import type { CalculatedResult, NumberRange } from './types.js';
	import { numberRangeToText, sumRange } from './utils/array.js';
	import { isTruthy } from './utils/isTruthy.js';
	import { formatPercent, formatUsd } from './utils/number.js';
	import { calcPROC } from './calculations/calculatePROC.js';

	const calculatorFormStateStep1 = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep1)
	);
	const calculatorFormStateStep2b2b = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2b2b)
	);
	const calculatorFormStateStep2hr = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2hr)
	);
	const calculatorFormStateStepProc = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2procurement)
	);
	const calculatorFormStateStep2b2c = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2b2c)
	);
	const calculatorFormStateStep3 = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.getCalcConfigStep3([]))
	);

	$: step2Visible = Object.values($calculatorFormStateStep1).every((item) => item.length > 0);

	$: b2bResult = calcB2b($calculatorFormStateStep3.driver, $calculatorFormStateStep2b2b as any);
	$: b2bResult_hourlyImpact = sumRange(b2bResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2bResult_financialImpact = sumRange(
		b2bResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: hrResult = calcHr($calculatorFormStateStep3.driver, $calculatorFormStateStep2hr as any);
	$: hrResult_hourlyImpact = sumRange(hrResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: hrResult_financialImpact = sumRange(
		hrResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: b2cResult = calcB2c($calculatorFormStateStep3.driver, $calculatorFormStateStep2b2c as any);
	$: b2cResult_hourlyImpact = sumRange(b2cResult.map((item) => item.hourlyImpact).filter(isTruthy));
	$: b2cResult_financialImpact = sumRange(
		b2cResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	$: procResult = calcPROC($calculatorFormStateStep3.driver, $calculatorFormStateStepProc as any);
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
			id="ds-calc-step-1"
			state={calculatorFormStateStep1}
			stepConfig={flowConfig.calcConfigStep1}
		/>
		<CalculatorStep
			id="ds-calc-step-2-b2b"
			state={calculatorFormStateStep2b2b}
			stepConfig={flowConfig.calcConfigStep2b2b}
		/>
		<CalculatorStep
			id="ds-calc-step-2-proc"
			state={calculatorFormStateStepProc}
			stepConfig={flowConfig.calcConfigStep2procurement}
		/>
		<CalculatorStep
			id="ds-calc-step-2-hr"
			state={calculatorFormStateStep2hr}
			stepConfig={flowConfig.calcConfigStep2hr}
		/>
		<CalculatorStep
			id="ds-calc-step-2-b2c"
			state={calculatorFormStateStep2b2c}
			stepConfig={flowConfig.calcConfigStep2b2c}
		/>
		<CalculatorStep
			id="ds-calc-step-3"
			state={calculatorFormStateStep3}
			stepConfig={flowConfig.getCalcConfigStep3($calculatorFormStateStep1.businessArea)}
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

<style global>
	.ds-calculator {
		--text-primary: #130032;
		--text-secondary: #191823bf;
		--bg-primary: #fff;
		--bg-secondary: #f8f3f0;
		--border-primary: #13003226;
		--question-line-height: calc(59px + 8px);
	}

	.ds-calc-steps-container {
		display: flex;
		flex-direction: column;
		gap: 33px;
	}
</style>
