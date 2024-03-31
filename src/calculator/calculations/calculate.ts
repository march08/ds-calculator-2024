import type { OverallResult, StoredCalcState } from '../types.js';
import { calcB2b } from './calculateB2B.js';
import { calcB2c } from './calculateB2C.js';
import { calcHr } from './calculateHr.js';
import { calcPROC } from './calculatePROC.js';
import { getTopTwoTotals } from './getTopTwoTotals.js';
import { getTotalsPerArea } from './getTotalsPerArea.js';

export const calculate = (submissionFormState: StoredCalcState): OverallResult => {
	const driver = submissionFormState.last.driver || [];
	/**
	 * calculations
	 */

	// eslint-disable-next-line
	const b2bResult = calcB2b(driver, submissionFormState.B2B as any);

	// eslint-disable-next-line
	const hrResult = calcHr(driver, submissionFormState.HR as any);

	// eslint-disable-next-line
	const b2cResult = calcB2c(driver, submissionFormState.B2C as any);

	// eslint-disable-next-line
	const procResult = calcPROC(driver, submissionFormState.PROC as any);

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
		topTwo: getTopTwoTotals(totalsPerArea)
	};
};
