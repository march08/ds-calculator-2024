<script lang="ts">
	import type { CalculatedResult, NumberRange } from '../../types.js';
	import { numberRangeToText } from '../../utils/array.js';
	import { formatUsd } from '../../utils/number.js';

	export let title: string;
	export let result: CalculatedResult[];
</script>

<div class="result-box">
	<h3>{title}</h3>
	<hr />
	{#each result as resultItem}
		<p>{resultItem.text}</p>
		<table>
			<tr><td>X</td><td>{resultItem.X}</td></tr>
			<tr>
				<td> Y: </td>
				<td>
					{#if resultItem.Y}
						{resultItem.Y}
					{/if}
				</td>
			</tr>
			<tr>
				<td> Employee hours/year: </td>
				<td>
					{#if resultItem.employeeHoursYear}
						{numberRangeToText(resultItem.employeeHoursYear)}
					{/if}
				</td>
			</tr>
			<tr>
				<td> Dollars/year: </td>
				<td>
					{#if resultItem.dollarsYear}
						{numberRangeToText(resultItem.dollarsYear, formatUsd)}
					{/if}
				</td>
			</tr>
			<tr>
				<td> Onboarding days/customer: </td>
				<td>
					{#if resultItem.onboardingDaysCustomer}
						{numberRangeToText(resultItem.onboardingDaysCustomer)}
					{/if}
				</td>
			</tr>
			<tr>
				<td> Onboarding days/vendor: </td>
				<td>
					{#if resultItem.onboardingDaysVendor}
						{numberRangeToText(resultItem.onboardingDaysVendor)}
					{/if}
				</td>
			</tr>
			<tr>
				<td> Onboarding days/candidate: </td>
				<td>
					{#if resultItem.onboardingDaysCandidate}
						{numberRangeToText(resultItem.onboardingDaysCandidate)}
					{/if}
				</td>
			</tr>
			<tr>
				<td> candidates/year: </td>
				<td>
					{#if resultItem.candidatesYear}
						{numberRangeToText(resultItem.candidatesYear)}
					{/if}
				</td>
			</tr>
		</table>
	{/each}
	<hr />
</div>

<style global>
	.result-box {
		font-size: 14px;
		line-height: 20px;
		color: white;
	}
</style>
