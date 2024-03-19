<script lang="ts">
	import type { Steps, StoredCalcState, SelectConfig } from './types.js';
	import Select from './Select.svelte';
	import { flowConfig } from './config.js';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { generateBaseStateFromConfig, type StepState } from './generateBaseStateFromConfig.js';
	import CalculatorStep from './CalculatorStep.svelte';

	const calculatorFormStateStep1 = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep1)
	);
	const calculatorFormStateStep2b2b = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2b2b)
	);
	const calculatorFormStateStep2hr = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.calcConfigStep2hr)
	);
	const calculatorFormStateStep3 = writable<StepState>(
		generateBaseStateFromConfig(flowConfig.getCalcConfigStep3([]))
	);
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
			id="ds-calc-step-3"
			state={calculatorFormStateStep3}
			stepConfig={flowConfig.getCalcConfigStep3($calculatorFormStateStep1.businessArea)}
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
	}

	.ds-calc-steps-container {
		display: flex;
		flex-direction: column;
		gap: 120px;
	}
</style>
