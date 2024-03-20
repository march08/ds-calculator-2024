<script lang="ts">
	import type { CalculatedResult, NumberRange } from './types.js';
	import { numberRangeToText } from './utils/array.js';
	import { formatUsd } from './utils/number.js';

	export let title: string;
	export let result: CalculatedResult[];

	export let financialImpact: NumberRange;
	export let hourlyImpactImpact: NumberRange;
</script>

<div class="result-box">
	<h3>{title}</h3>
	<hr />
	{#each result as resultItem}
		<p>{resultItem.text}</p>
		<ul>
			<li>X: {resultItem.X}</li>
			<li>
				Y:
				{#if resultItem.Y}
					{resultItem.Y}
				{/if}
			</li>
			<li>
				Hourly impact:
				{#if resultItem.hourlyImpact}
					{numberRangeToText(resultItem.hourlyImpact)}
				{/if}
			</li>
			<li>
				Financial impact:
				{#if resultItem.financialImpact}
					{numberRangeToText(resultItem.financialImpact, formatUsd)}
				{/if}
			</li>
		</ul>
	{/each}
	<hr />
	Total hourly: {numberRangeToText(hourlyImpactImpact)}
	Total financial: {numberRangeToText(financialImpact)}
	<hr />
</div>

<style global>
	.result-box {
		font-size: 20px;
		line-height: 40px;
		color: white;
	}
</style>
