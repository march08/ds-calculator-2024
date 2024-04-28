import type { OverResult_TotalsPerArea, TopTwoResult, TranslationState } from '../types.js';
import { lastRangeItem } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { nFormatter } from '../utils/number.js';

/**
 * returns up to two main domains
 * @param result
 */
export const getTopTwoTotals = (
	result: OverResult_TotalsPerArea,
	translationState: TranslationState
): TopTwoResult => {
	const arrayTotals = [
		{
			displayValue: lastRangeItem(result.totalDollarsYear, nFormatter, 'Up to $'),
			text: 'Dollars/Year',
			illustration: 'stack' as const,
			fullText: translationState.resultTranslations.up_to_1.replace(
				'{X}',
				lastRangeItem(result.totalDollarsYear, nFormatter) || ''
			)
		},
		{
			displayValue: lastRangeItem(result.totalEmployeeHoursYear, nFormatter, 'Up to '),
			text: 'Employee Hours/Year',
			illustration: 'person' as const,
			fullText: translationState.resultTranslations.up_to_2.replace(
				'{X}',
				lastRangeItem(result.totalEmployeeHoursYear, nFormatter) || ''
			)
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysVendor, nFormatter, 'Up to '),
			text: 'Onboarding Days/Vendor',
			illustration: 'stack' as const,
			fullText: translationState.resultTranslations.up_to_3.replace(
				'{X}',
				lastRangeItem(result.totalOnboardingDaysVendor, nFormatter) || ''
			)
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysCandidate, nFormatter, 'Up to '),
			text: 'Onboarding Days/Candidate',
			illustration: 'stack' as const,
			fullText: translationState.resultTranslations.up_to_4.replace(
				'{X}',
				lastRangeItem(result.totalOnboardingDaysCandidate, nFormatter) || ''
			)
		},
		{
			displayValue: lastRangeItem(result.totalOnboardingDaysCustomer, nFormatter, 'Up to '),
			text: 'Onboarding Days/Customer',
			illustration: 'stack' as const,
			fullText: translationState.resultTranslations.up_to_5.replace(
				'{X}',
				lastRangeItem(result.totalOnboardingDaysCustomer, nFormatter) || ''
			)
		},
		{
			displayValue: lastRangeItem(result.totalCandidateYear, nFormatter, 'Up to '),
			text: 'Candidates/Year',
			illustration: 'person' as const,
			fullText: translationState.resultTranslations.up_to_6.replace(
				'{X}',
				lastRangeItem(result.totalCandidateYear, nFormatter) || ''
			)
		}
	]
		.filter((item) => !!item.displayValue)
		.filter(isTruthy)
		.slice(0, 2);

	return arrayTotals;
};
