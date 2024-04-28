import type { CalculatedResult, StoredCalcState, TranslationState } from '../types.js';
import { calcB2b } from './calculateB2B.js';
import { calcB2c } from './calculateB2C.js';
import { calcHr } from './calculateHr.js';
import { calcPROC } from './calculatePROC.js';
import { getTopTwoTotals } from './getTopTwoTotals.js';
import { getTotalsPerArea } from './getTotalsPerArea.js';
import {
	translationResultToTextWithValues,
	translationResultToTextWithValuesHtml
} from './utils.js';

const includeTranslatedResultText = (
	results: CalculatedResult[],
	translationState: TranslationState
) => {
	return results.map((item) => {
		return {
			...item,
			translatedText: translationResultToTextWithValues(
				item,
				translationState.resultTranslations[item.resultTextKey]
			),
			translatedTextHtml: translationResultToTextWithValuesHtml(
				item,
				translationState.resultTranslations[item.resultTextKey]
			),
			cardMainValue: item.cardMainValue.replace('days', translationState.translations.title_days)
		};
	});
};

export const calculate = (
	submissionFormState: StoredCalcState,
	translationState: TranslationState
) => {
	const driver = submissionFormState.last.driver || [];
	/**
	 * calculations
	 */

	const b2bResult = includeTranslatedResultText(
		// eslint-disable-next-line
		calcB2b(driver, submissionFormState.B2B as any),
		translationState
	);

	const hrResult = includeTranslatedResultText(
		// eslint-disable-next-line
		calcHr(driver, submissionFormState.HR as any),
		translationState
	);

	const b2cResult = includeTranslatedResultText(
		// eslint-disable-next-line
		calcB2c(driver, submissionFormState.B2C as any),
		translationState
	);

	const procResult = includeTranslatedResultText(
		// eslint-disable-next-line
		calcPROC(driver, submissionFormState.PROC as any),
		translationState
	);

	const allRes = [...b2bResult, ...procResult, ...hrResult, ...b2cResult];

	const totalsPerArea = getTotalsPerArea(allRes);

	return {
		allRes,
		...totalsPerArea,
		splitResult: [
			{
				title: 'B2B',
				result: b2bResult
			},
			{
				title: 'Procurement',
				result: procResult
			},
			{
				title: 'HR',
				result: hrResult
			},
			{
				title: 'B2C',
				result: b2cResult
			}
		],
		topTwo: getTopTwoTotals(totalsPerArea, translationState)
	};
};

export type OverallResultWithTranslations = ReturnType<typeof calculate>;
