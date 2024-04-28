import type { NumberRange } from '../types.js';
import { numberRangeToText } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatNumber, formatPercent, nFormatter } from '../utils/number.js';
import { getRange, tryCalcWrap } from './utils.js';

const calcHrTat = tryCalcWrap((employment: string) => {
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
	const XRaw: NumberRange = [improvement[employment][0], improvement[employment][0]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	const calcOnboardingDaysCandidateRaw = getRange(
		(index: 0 | 1) => base[employment][index] * improvement[employment][index]
	);

	return {
		illustrationType: 'calendar',
		resultTextKey: 'hr_1',
		X,
		XRaw,
		XText,
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

	const XRaw: NumberRange = [
		improvement[employment][volume][0],
		improvement[employment][volume][1]
	];

	const X = numberRangeToText(XRaw, (value) =>
		formatPercent(value, {
			maximumFractionDigits: 2,
			minimumFractionDigits: 1
		})
	);
	const XText = XRaw.map((x) =>
		formatPercent(x, { maximumFractionDigits: 2, minimumFractionDigits: 1 })
	);

	const calcYRange = (index: 0 | 1) => improvement[employment][volume][index] * volume;
	const YRaw = getRange(calcYRange);
	const Y = numberRangeToText(YRaw, nFormatter);
	return {
		illustrationType: 'bar',
		resultTextKey: 'hr_2',
		X,
		XRaw,
		XText,
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
	const XRaw: NumberRange = [improvement[employment][0], improvement[employment][1]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	const calcZRange = (index: 0 | 1) =>
		base[employment][index] * improvement[employment][index] * financialConstant * volume;

	const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];
	return {
		illustrationType: 'pie',
		resultTextKey: 'hr_3',
		X,
		XRaw,
		XText,
		Y,
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
			? [calcHrTat(characteristics.HR_employee_type[0])]
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
