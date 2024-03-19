<script lang="ts">
	import { flowConfig } from './config.js';

	import { writable } from 'svelte/store';
	import { generateBaseStateFromConfig, type StepState } from './generateBaseStateFromConfig.js';
	import CalculatorStep from './CalculatorStep.svelte';
	import { calcB2b } from './calculations/calculateB2B.js';
	import { formatUsd } from './utils/number.js';

	const calculatorFormStateStep1 = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep1)
	);
	const calculatorFormStateStep2b2b = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2b2b)
	);
	const calculatorFormStateStep2hr = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2hr)
	);
	const calculatorFormStateStep2procurement = writable<StepState>(
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
			id="ds-calc-step-2-hr"
			state={calculatorFormStateStep2hr}
			stepConfig={flowConfig.calcConfigStep2hr}
		/>
		<CalculatorStep
			id="ds-calc-step-2-proc"
			state={calculatorFormStateStep2procurement}
			stepConfig={flowConfig.calcConfigStep2procurement}
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
		<div class="result-box">
			<h3>B2B result</h3>
			{#each b2bResult as resultItem}
				<p>{resultItem.text}</p>
				<ul>
					<li>X: {resultItem.X}</li>
					<li>Y: {resultItem.Y}</li>
					<li>
						Z: {resultItem.Z && formatUsd(resultItem.Z[0])} - {resultItem.Z &&
							formatUsd(resultItem.Z[1])}
					</li>
				</ul>
			{/each}
		</div>
	</div>
</div>

<style global>
	.ds-calculator {
		--text-primary: #130032;
		--text-secondary: #191823bf;
		--bg-primary: #fff;
		--bg-secondary: #f8f3f0;
		--border-primary: #13003226;
	}

	.ds-calc-steps-container {
		display: flex;
		flex-direction: column;
		gap: 120px;
	}

	.result-box {
		font-size: 20px;
		line-height: 40px;
		color: white;
	}
</style>
