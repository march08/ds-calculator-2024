<script lang="ts">
	import type { OverallResult } from '../../calculations/calculate.js';
	import Button from '../Button.svelte';
	import ResultPreview from './ResultPreview.svelte';

	export let result: OverallResult;
	let displayCalculations = false;
</script>

<div class="result-preview-container" class:visible={displayCalculations}>
	<div class="result-preview-container-button">
		<Button
			onClick={() => {
				displayCalculations = !displayCalculations;
			}}>{displayCalculations ? 'Hide' : 'Show'} calculations</Button
		>
	</div>
	<ul>
		<li>totalDollarsYear: {result.totalDollarsYearText}</li>
		<li>totalEmployeeHoursYear: {result.totalEmployeeHoursYearText}</li>
		<li>totalOnboardingDaysVendor: {result.totalOnboardingDaysVendorText}</li>
		<li>totalOnboardingDaysCandidate: {result.totalOnboardingDaysCandidateText}</li>
		<li>totalOnboardingDaysCustomer: {result.totalOnboardingDaysCustomerText}</li>
		<li>totalCandidateYear: {result.totalCandidateYearText}</li>
	</ul>
	{#each result.splitResult as resultGroup}
		<ResultPreview {...resultGroup} />
	{/each}
</div>

<style lang="scss" global>
	.result-preview-container {
		.result-preview-container-button {
			position: sticky;
			top: 0;
			background: inherit;
		}
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		width: 30vw;
		height: 98px;
		overflow: hidden;
		background: #3f0eb1;
		padding: 24px;
		color: white;
		&.visible {
			height: 100%;
			overflow: auto;
		}
	}
</style>
