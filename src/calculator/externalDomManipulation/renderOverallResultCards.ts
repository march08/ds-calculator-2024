import type { OverallResult } from '../types.js';

export const renderOverallResultCards = (result: OverallResult) => {
	const targetResultContainerEl = document.querySelector('.hp-costs_cards');

	if (!targetResultContainerEl) {
		return;
	}

	const mapped = result.topTwo.map(
		(item) =>
			`<div data-ds-costs-card="dollars" class="hp-costs_card">
		<img src=${item.illustration === 'stack' ? 'https://assets-global.website-files.com/659c190170ce3a9329d76dac/65fbf4bb182a9dfde91d1368_dollars-icon.svg' : 'https://assets-global.website-files.com/659c190170ce3a9329d76dac/65fbf4bbd871a17de019dcc0_employee-icon.svg'} alt="" class="hp-costs_icon">
		<div>
			<div class="margin-bottom margin-4">
				<div data-ds-costs-card="dollars-text" class="heading-style-h2 text-weight-light">
					${item.displayValue}
				</div>
			</div>
			<div class="text-weight-medium">
				<div data-ds-costs-card="dollars-label" class="text-size-large">
					${item.text}
				</div>
			</div>
		</div>
	</div>`
	);

	targetResultContainerEl.innerHTML = mapped.join('\n');
};
