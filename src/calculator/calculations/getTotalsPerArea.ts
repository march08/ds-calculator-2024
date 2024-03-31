import type { CalculatedResult, OverResult_TotalsPerArea } from '../types.js';
import { numberRangeToText, sumRange } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatUsd } from '../utils/number.js';

export const getTotalsPerArea = (allRes: CalculatedResult[]): OverResult_TotalsPerArea => {
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
		totalCandidateYearText
	};
};
