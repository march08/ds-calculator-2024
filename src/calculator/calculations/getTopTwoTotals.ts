import type { OverResult_TotalsPerArea, TopTwoResult } from '../types.js';
import { lastRangeItem } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { nFormatter } from '../utils/number.js';

/**
 * returns up to two main domains
 * @param result
 */
export const getTopTwoTotals = (result: OverResult_TotalsPerArea): TopTwoResult => {
	const arrayTotals = [
		{
			displayValue: lastRangeItem(result.totalDollarsYear, nFormatter, 'Up to $'),
			text: 'Dollars/Year',
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(result.totalEmployeeHoursYear, nFormatter, 'Up to '),
			text: 'Employee Hours/Year',
			illustration: 'person' as const
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysVendor, nFormatter, 'Up to '),
			text: 'Onboarding Days/Vendor',
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysCandidate, nFormatter, 'Up to '),
			text: 'Onboarding Days/Candidate',
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysCustomer, nFormatter, 'Up to '),
			text: 'Onboarding Days/Customer',
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(result.totalCandidateYear, nFormatter, 'Up to '),
			text: 'Candidates/Year',
			illustration: 'person' as const
		}
	]
		.filter((item) => !!item.displayValue)
		.filter(isTruthy)
		.slice(0, 2)
		.map((item) => ({
			...item,
			fullText: [item.displayValue, item.text].join(' ')
		}));

	return arrayTotals;
};
