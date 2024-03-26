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
	const b2bResult_employeeHoursYear = sumRange(
		b2bResult.map((item) => item.employeeHoursYear).filter(isTruthy)
	);
	const b2bResult_dollarsYear = sumRange(
		b2bResult.map((item) => item.dollarsYear).filter(isTruthy)
	);

	// eslint-disable-next-line
	const hrResult = calcHr(driver, submissionFormState.HR as any);
	const hrResult_employeeHoursYear = sumRange(
		hrResult.map((item) => item.employeeHoursYear).filter(isTruthy)
	);
	const hrResult_dollarsYear = sumRange(hrResult.map((item) => item.dollarsYear).filter(isTruthy));

	// eslint-disable-next-line
	const b2cResult = calcB2c(driver, submissionFormState.B2C as any);
	const b2cResult_employeeHoursYear = sumRange(
		b2cResult.map((item) => item.employeeHoursYear).filter(isTruthy)
	);
	const b2cResult_dollarsYear = sumRange(
		b2cResult.map((item) => item.dollarsYear).filter(isTruthy)
	);

	// eslint-disable-next-line
	const procResult = calcPROC(driver, submissionFormState.PROC as any);
	const procResult_employeeHoursYear = sumRange(
		procResult.map((item) => item.employeeHoursYear).filter(isTruthy)
	);
	const procResult_dollarsYear = sumRange(
		procResult.map((item) => item.dollarsYear).filter(isTruthy)
	);

	const allRes = [...b2bResult, ...procResult, ...hrResult, ...b2cResult];

	const employeeHoursYear = sumRange(allRes.map((item) => item.employeeHoursYear).filter(isTruthy));
	const employeeHoursYearText = numberRangeToText(employeeHoursYear);

	const totalDollarsYear = sumRange(allRes.map((item) => item.dollarsYear).filter(isTruthy));
	const totalDollarsYearText = numberRangeToText(totalDollarsYear, formatUsd);

	const totalEmployeeHoursYear = sumRange(
		allRes.map((item) => item.employeeHoursYear).filter(isTruthy)
	);
	const totalEmployeeHoursYearText = numberRangeToText(totalEmployeeHoursYear);

	const totalOnboardingDaysCandidate = sumRange(
		allRes.map((item) => item.onboardingDaysCandidate).filter(isTruthy)
	);
	const totalOnboardingDaysCandidateText = numberRangeToText(totalOnboardingDaysCandidate);

	const totalOnboardingDaysVendor = sumRange(
		allRes.map((item) => item.onboardingDaysVendor).filter(isTruthy)
	);
	const totalOnboardingDaysVendorText = numberRangeToText(totalOnboardingDaysVendor);

	const totalOnboardingDaysCustomer = sumRange(
		allRes.map((item) => item.onboardingDaysCustomer).filter(isTruthy)
	);
	const totalOnboardingDaysCustomerText = numberRangeToText(totalOnboardingDaysCustomer);

	const totalCandidateYear = sumRange(allRes.map((item) => item.candidatesYear).filter(isTruthy));
	const totalCandidateYearText = numberRangeToText(totalCandidateYear);

	return {
		allRes,
		employeeHoursYear,
		employeeHoursYearText,
		// total dollars
		totalDollarsYear,
		totalDollarsYearText,
		// total employee hours
		totalEmployeeHoursYear,
		totalEmployeeHoursYearText,
		// total candidate onboarding
		totalOnboardingDaysCandidate,
		totalOnboardingDaysCandidateText,
		// total vendor onboarding
		totalOnboardingDaysVendor,
		totalOnboardingDaysVendorText,
		// total vendor customer
		totalOnboardingDaysCustomer,
		totalOnboardingDaysCustomerText,
		// total candidate year
		totalCandidateYear,
		totalCandidateYearText,

		b2bResult_employeeHoursYear,
		b2bResult_dollarsYear,
		b2cResult_employeeHoursYear,
		b2cResult_dollarsYear,
		splitResult: [
			{
				title: 'B2B',
				result: b2bResult,
				employeeHoursYear: b2bResult_employeeHoursYear,
				dollarsYear: b2bResult_dollarsYear
			},
			{
				title: 'Procurement',
				result: procResult,
				employeeHoursYear: procResult_employeeHoursYear,
				dollarsYear: procResult_dollarsYear
			},
			{
				title: 'HR',
				result: hrResult,
				employeeHoursYear: hrResult_employeeHoursYear,
				dollarsYear: hrResult_dollarsYear
			},
			{
				title: 'B2C',
				result: b2cResult,
				employeeHoursYear: b2cResult_employeeHoursYear,
				dollarsYear: b2cResult_dollarsYear
			}
		]
	};
};
