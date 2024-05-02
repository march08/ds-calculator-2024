import type { OverResult_TotalsPerArea, TopTwoResult, TranslationState } from '../types.js';
import { lastRangeItem } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatCurrency, nFormatter } from '../utils/number.js';

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
			displayValue: lastRangeItem(
				result.totalDollarsYear,
				(value) =>
					formatCurrency(value, {
						compactDisplay: 'short',
						notation: 'compact'
					}),
				translationState.resultTranslations.up_to_1_1
			),
			text: translationState.resultTranslations.up_to_1_2,
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(
				result.totalEmployeeHoursYear,
				nFormatter,
				translationState.resultTranslations.up_to_2_1
			),
			text: translationState.resultTranslations.up_to_2_2,
			illustration: 'person' as const
		},
		{
			displayValue: lastRangeItem(
				result.totalOnboardingDaysVendor,
				nFormatter,
				translationState.resultTranslations.up_to_3_1
			),
			text: translationState.resultTranslations.up_to_3_2,
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(
				result.totalOnboardingDaysCandidate,
				nFormatter,
				translationState.resultTranslations.up_to_4_1
			),
			text: translationState.resultTranslations.up_to_4_2,
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(
				result.totalOnboardingDaysCustomer,
				nFormatter,
				translationState.resultTranslations.up_to_5_1
			),
			text: translationState.resultTranslations.up_to_5_2,
			illustration: 'stack' as const
		},
		{
			displayValue: lastRangeItem(
				result.totalCandidateYear,
				nFormatter,
				translationState.resultTranslations.up_to_6_1
			),
			text: translationState.resultTranslations.up_to_6_2,
			illustration: 'person' as const
		}
	]
		.filter((item) => !!item.displayValue)
		.map((item) => ({
			...item,
			fullText: `${item.displayValue} ${item.text}`
		}))
		.filter(isTruthy);
	// .slice(0, 2);

	return arrayTotals;
};
