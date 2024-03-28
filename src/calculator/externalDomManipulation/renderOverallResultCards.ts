import type { OverallResult } from '../calculations/calculate.js';
import { lastRangeItem } from '../utils/array.js';
import { nFormatter } from '../utils/number.js';

export const renderOverallResultCards = (result: OverallResult) => {
	const arrayTotals = [
		{
			displayValue: lastRangeItem(result.totalDollarsYear, nFormatter, 'Up to $'),
			text: 'Dollars/Year',
			illustration: 'stack'
		},
		{
			displayValue: lastRangeItem(result.totalEmployeeHoursYear, nFormatter, 'Up to '),
			text: 'Employee Hours/Year',
			illustration: 'person'
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysVendor, nFormatter, 'Up to '),
			text: 'Onboarding Days/Vendor',
			illustration: 'stack'
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysCandidate, nFormatter, 'Up to '),
			text: 'Onboarding Days/Candidate',
			illustration: 'stack'
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysCustomer, nFormatter, 'Up to '),
			text: 'Onboarding Days/Customer',
			illustration: 'stack'
		},
		{
			displayValue: lastRangeItem(result.totalCandidateYear, nFormatter, 'Up to '),
			text: 'Candidates/Year',
			illustration: 'person'
		}
	].filter((item) => !!item.displayValue);

	const targetResultContainerEl = document.querySelector('.hp-costs_cards');

	if (!targetResultContainerEl) {
		return;
	}

	const mapped = arrayTotals.slice(0, 2).map(
		(item) =>
			`<div data-ds-costs-card="dollars" class="hp-costs_card">
		<img src="./agg_files/65fbf4bb182a9dfde91d1368_dollars-icon.svg" alt="" class="hp-costs_icon">
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
