// import type { DriverOption } from '../config.js';
import type { NumberRange } from '../types.js';
import { numberRangeToText } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatNumber, formatPercent, nFormatter } from '../utils/number.js';
import { getRange, tryCalcWrap } from './utils.js';

const calcB2cTat = tryCalcWrap((employment: string) => {
	const base: Record<string, NumberRange> = {
		parttime: [7, 26],
		fulltime: [7, 26]
	};

	const improvement: Record<string, NumberRange> = {
		parttime: [0.75, 0.75],
		fulltime: [0.75, 0.75]
	};

	const calcYRange = (index: 0 | 1) =>
		formatNumber(base[employment][index] * (1 - improvement[employment][index]));

	const Y = `${calcYRange(0)}-${calcYRange(1)}`;
	const X = `${formatPercent(improvement[employment][0])}`;

	const calcOnboardingDaysCandidateRaw = getRange(
		(index: 0 | 1) => base[employment][index] * improvement[employment][index]
	);

	return {
		elementId: 'calendar',
		text: `${X} faster candidate onboarding, going from weeks to just ${Y} days`,
		X,
		Y,
		dollarsYear: null,
		employeeHoursYear: null,
		cardMainValue: `${Y} days`,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: calcOnboardingDaysCandidateRaw,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcHrProductivity = tryCalcWrap((employment: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		parttime: [1.25, 3.5],
		fulltime: [1.25, 3.5]
	};

	const improvement: Record<string, NumberRange> = {
		parttime: [0.32, 0.5],
		fulltime: [0.32, 0.5]
	};

	const financialConstant = 25;

	const calcYRange = (index: 0 | 1) =>
		base[employment][index] * improvement[employment][index] * volume;

	const employeeHoursYear: NumberRange = [calcYRange(0), calcYRange(1)];

	const Y = numberRangeToText(employeeHoursYear);
	const X = `${formatPercent(improvement[employment][0])}-${formatPercent(improvement[employment][1])}`;

	const calcZRange = (index: 0 | 1) =>
		base[employment][index] * improvement[employment][index] * financialConstant * volume;

	const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];
	return {
		elementId: 'pie',
		text: `${X} improvement in staff productivity, freeing up ${Y} annual hours for higher-value HR activities.`,
		X,
		Y: null,
		dollarsYear: ZRaw,
		employeeHoursYear,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true,
		candidatesYear: null,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null
	};
});

const calcHrConversionRate = tryCalcWrap((employment: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);

	const improvement: Record<string, Record<number, NumberRange>> = {
		parttime: {
			1000: [7.5 / 100, 8.5 / 100],
			2500: [6.5 / 100, 7.5 / 100],
			5000: [5.5 / 100, 6.5 / 100],
			10000: [4.5 / 100, 5.5 / 100],
			25000: [3.5 / 100, 4.5 / 100],
			50000: [2.5 / 100, 3.5 / 100],
			100000: [1.5 / 100, 2.5 / 100],
			1000000: [0.5 / 100, 1.5 / 100],
			10000000: [0.28 / 100, 0.55 / 100]
		},
		fulltime: {
			1000: [4.0 / 100, 5.0 / 100],
			2500: [3.5 / 100, 4.5 / 100],
			5000: [3.0 / 100, 4.0 / 100],
			10000: [2.5 / 100, 3.5 / 100],
			25000: [2.0 / 100, 3.0 / 100],
			50000: [1.5 / 100, 2.5 / 100],
			100000: [1.0 / 100, 2.0 / 100],
			1000000: [0.5 / 100, 1.5 / 100],
			10000000: [0.28 / 100, 0.55 / 100]
		}
	};

	const X = `${formatPercent(improvement[employment][volume][0], {
		maximumFractionDigits: 2,
		minimumFractionDigits: 1
	})}-${formatPercent(improvement[employment][volume][1], {
		maximumFractionDigits: 2,
		minimumFractionDigits: 1
	})}`;

	const calcYRange = (index: 0 | 1) => improvement[employment][volume][index] * volume;
	const YRaw = getRange(calcYRange);
	const Y = numberRangeToText(YRaw);
	return {
		elementId: 'bar',
		text: `${X} increase in conversion rates by reducing abandonment in the agreement process. Onboard ${Y} additional candidates annually.`,
		X,
		Y,
		dollarsYear: null,
		employeeHoursYear: null,
		cardMainValue: Y,
		candidatesYear: YRaw,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null
	};
});

export const calcHr = (
	driverOption: string[],
	characteristics: {
		HR_employee_count: string[];
		HR_agreement_volume: string[];
		HR_employee_type: string[];
	}
) => {
	return [
		...(driverOption.includes('HR_1_faster_onboard')
			? [calcB2cTat(characteristics.HR_employee_type[0])]
			: []),
		...(driverOption.includes('HR_2_attract_retain_talent')
			? [
					calcHrConversionRate(
						characteristics.HR_employee_type[0],
						characteristics.HR_agreement_volume[0]
					)
				]
			: []),
		...(driverOption.includes('HR_3_staff_productivity')
			? [
					calcHrProductivity(
						characteristics.HR_employee_type[0],
						characteristics.HR_agreement_volume[0]
					)
				]
			: [])
	].filter(isTruthy);
};
