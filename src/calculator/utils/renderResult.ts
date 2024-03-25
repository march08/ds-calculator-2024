import type { CalculatedResult } from '../types.js';

export const renderResult = (result: CalculatedResult[]) => {
	const targetResultContainerEl = document.getElementById('result');
	console.log('result', result);

	if (!targetResultContainerEl) {
		return;
	}

	const mappedResult = result.map((item, index) => {
		const mode = index % 2 === 0 ? 'light' : 'dark';
		return `
<div data-ds-result-card-style="bar-${mode}" class="card ${mode}">
	${item.elementId}-${mode}
	<div class="card-big-number">${item.cardMainValueDollars ? '$' : ''}${item.cardMainValue}</div>
	<div class="card-text">${item.text}</div>
</div>
`;
	});

	targetResultContainerEl.innerHTML = mappedResult.join('\n');
};
