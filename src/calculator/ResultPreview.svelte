<script lang="ts">
	import type { CalculatedResult } from './types.js';
	import { formatUsd } from './utils/number.js';

	export let title: string;
	export let result: CalculatedResult[];
</script>

<div class="result-box">
	<h3>{title}</h3>
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
				Z:
				{#if resultItem.Z}
					{formatUsd(resultItem.Z[0])} - {formatUsd(resultItem.Z[1])}
				{/if}
			</li>
		</ul>
	{/each}
</div>

<style global>
	.result-box {
		font-size: 20px;
		line-height: 40px;
		color: white;
	}
</style>
