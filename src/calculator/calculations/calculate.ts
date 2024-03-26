import type { StoredCalcState } from '../types.js';
import { numberRangeToText, sumRange } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatUsd } from '../utils/number.js';
import { calcB2b } from './calculateB2B.js';
import { calcB2c } from './calculateB2C.js';
import { calcHr } from './calculateHr.js';
import { calcPROC } from './calculatePROC.js';

export type OverallResult = ReturnType<typeof calculate>;

export const calculate = (submissionFormState: StoredCalcState) => {
	console.log('CALCULATE');
	const driver = submissionFormState.last.driver || [];
	/**
	 * calculations
	 */

	// eslint-disable-next-line
	const b2bResult = calcB2b(driver, submissionFormState.B2B as any);
	const b2bResult_hourlyImpact = sumRange(
		b2bResult.map((item) => item.hourlyImpact).filter(isTruthy)
	);
	const b2bResult_financialImpact = sumRange(
		b2bResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	// eslint-disable-next-line
	const hrResult = calcHr(driver, submissionFormState.HR as any);
	const hrResult_hourlyImpact = sumRange(
		hrResult.map((item) => item.hourlyImpact).filter(isTruthy)
	);
	const hrResult_financialImpact = sumRange(
		hrResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	// eslint-disable-next-line
	const b2cResult = calcB2c(driver, submissionFormState.B2C as any);
	const b2cResult_hourlyImpact = sumRange(
		b2cResult.map((item) => item.hourlyImpact).filter(isTruthy)
	);
	const b2cResult_financialImpact = sumRange(
		b2cResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	// eslint-disable-next-line
	const procResult = calcPROC(driver, submissionFormState.PROC as any);
	const procResult_hourlyImpact = sumRange(
		procResult.map((item) => item.hourlyImpact).filter(isTruthy)
	);
	const procResult_financialImpact = sumRange(
		procResult.map((item) => item.financialImpact).filter(isTruthy)
	);

	const allRes = [...b2bResult, ...procResult, ...hrResult, ...b2cResult];

	const hourlyImpact = sumRange(allRes.map((item) => item.hourlyImpact).filter(isTruthy));
	const hourlyImpactText = numberRangeToText(hourlyImpact);
	const financialImpact = sumRange(allRes.map((item) => item.financialImpact).filter(isTruthy));
	const financialImpactText = numberRangeToText(financialImpact, formatUsd);

	return {
		allRes,
		hourlyImpact,
		hourlyImpactText,
		financialImpact,
		financialImpactText,
		b2bResult_hourlyImpact,
		b2bResult_financialImpact,
		b2cResult_hourlyImpact,
		b2cResult_financialImpact,
		splitResult: [
			{
				title: 'B2B',
				result: b2bResult,
				hourlyImpact: b2bResult_hourlyImpact,
				financialImpact: b2bResult_financialImpact
			},
			{
				title: 'Procurement',
				result: procResult,
				hourlyImpact: procResult_hourlyImpact,
				financialImpact: procResult_financialImpact
			},
			{
				title: 'HR',
				result: hrResult,
				hourlyImpact: hrResult_hourlyImpact,
				financialImpact: hrResult_financialImpact
			},
			{
				title: 'B2C',
				result: b2cResult,
				hourlyImpact: b2cResult_hourlyImpact,
				financialImpact: b2cResult_financialImpact
			}
		]
	};
};
