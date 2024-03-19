// import type { DriverOption } from '../config.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatNumber, formatPercent } from '../utils/number.js';
import { tryCalcWrap } from './utils.js';

const calcB2cTat = tryCalcWrap((employment: string) => {
	const base: Record<string, [number, number]> = {
		parttime: [7, 26],
		fulltime: [7, 26]
	};

	const improvement: Record<string, [number, number]> = {
		parttime: [0.75, 0.75],
		fulltime: [0.75, 0.75]
	};

	const calcYRange = (index: 0 | 1) =>
		formatNumber(base[employment][index] * (1 - improvement[employment][index]));

	const Y = `${calcYRange(0)}-${calcYRange(1)}`;
	const X = `${formatPercent(improvement[employment][0])}`;

	return {
		elementId: '__TODO',
		text: `${X} faster candidate onboarding, going from weeks to just ${Y} days`,
		X,
		Y,
		Z: null
	};
});

const calcHrProductivity = tryCalcWrap((employment: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, [number, number]> = {
		parttime: [1.25, 3.5],
		fulltime: [1.25, 3.5]
	};

	const improvement: Record<string, [number, number]> = {
		parttime: [0.32, 0.5],
		fulltime: [0.32, 0.5]
	};

	const financialConstant = 25;

	const calcYRange = (index: 0 | 1) =>
		formatNumber(base[employment][index] * improvement[employment][index] * volume);

	const Y = `${calcYRange(0)}-${calcYRange(1)}`;
	const X = `${formatPercent(improvement[employment][0])}-${formatPercent(improvement[employment][1])}`;

	const calcZRange = (index: 0 | 1) =>
		base[employment][index] * improvement[employment][index] * financialConstant * volume;
	volume;
	return {
		elementId: '__TODO',
		text: `${X} improvement in staff productivity, freeing up ${Y} annual hours for higher-value HR activities.`,
		X,
		Y,
		Z: [calcZRange(0), calcZRange(1)]
	};
});

const calcHrConversionRate = tryCalcWrap((employment: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);

	const improvement: Record<string, Record<number, [number, number]>> = {
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

	const calcYRange = (index: 0 | 1) =>
		formatNumber(improvement[employment][volume][index] * volume);
	const Y = `${calcYRange(0)}-${calcYRange(1)}`;
	return {
		elementId: '__TODO',
		text: `${X} increase in conversion rates by reducing abandonment in the agreement process. Onboard ${Y} additional candidates annually.`,
		X,
		Y,
		Z: null
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

		// ...(driverOption.includes('B2C_3_boost_productivity')
		// 	? [
		// 			calcB2cStaffProductivity(
		// 				characteristics.B2C_customer_information[0],
		// 				characteristics.B2C_agreement_volume[0]
		// 			)
		// 		]
		// 	: []),
		// ...(driverOption.includes('B2C_2_attract_retain')
		// 	? [
		// 			calcB2cConversionRate(
		// 				characteristics.B2C_customer_information[0],
		// 				characteristics.B2C_revenue[0]
		// 			)
		// 		]
		// 	: [])
	].filter(isTruthy);
};
