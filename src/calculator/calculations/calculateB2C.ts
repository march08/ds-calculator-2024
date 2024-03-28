// import type { DriverOption } from '../config.js';
import type { NumberRange } from '../types.js';
import { numberRangeToText } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatNumber, formatPercent, nFormatter } from '../utils/number.js';
import { getRange, tryCalcWrap } from './utils.js';

const calcB2cTat = tryCalcWrap((customerInformation: string) => {
	const base: Record<string, NumberRange> = {
		signature: [1, 5],
		identity: [1, 5]
	};

	const improvement: Record<string, NumberRange> = {
		signature: [0.75, 0.75],
		identity: [0.75, 0.75]
	};

	const calcYRange = (index: 0 | 1, fraction: number) =>
		formatNumber(base[customerInformation][index] * (1 - improvement[customerInformation][index]), {
			maximumFractionDigits: fraction,
			minimumFractionDigits: fraction
		});

	const Y = `${calcYRange(0, 1)}-${calcYRange(1, 0)}`;
	const X = `${formatPercent(improvement[customerInformation][0])}`;

	const calcOnboardingDaysCustomerRaw = getRange(
		(index: 0 | 1) => base[customerInformation][index] * improvement[customerInformation][index]
	);

	return {
		elementId: 'calendar',
		text: `${X} faster deals, with the potential to reduce the sales cycle from weeks to just ${Y} days.`,
		X,
		Y,
		employeeHoursYear: null,
		dollarsYear: null,
		cardMainValue: `${Y} days`,
		onboardingDaysCustomer: calcOnboardingDaysCustomerRaw,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcB2cStaffProductivity = tryCalcWrap(
	(customerInformation: string, agreementVolume: string) => {
		const volume = Number(agreementVolume);
		const base: Record<string, NumberRange> = {
			signature: [0.25, 0.75],
			identity: [0.75, 2]
		};

		const improvement: Record<string, NumberRange> = {
			signature: [0.32, 0.5],
			identity: [0.32, 0.5]
		};

		const financialConstant = 25;

		const calcYRange = (index: 0 | 1) =>
			base[customerInformation][index] * improvement[customerInformation][index] * volume;

		const employeeHoursYear: NumberRange = [calcYRange(0), calcYRange(1)];
		const Y = numberRangeToText(employeeHoursYear);
		const X = `${formatPercent(improvement[customerInformation][0])}-${formatPercent(improvement[customerInformation][1])}`;

		const calcZRange = (index: 0 | 1) =>
			base[customerInformation][index] *
			improvement[customerInformation][index] *
			financialConstant *
			volume;

		const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];
		return {
			elementId: 'pie',
			text: `${X} improvement in staff productivity, freeing up ${Y} annual hours for higher-value activities.`,
			X,
			Y,
			dollarsYear: ZRaw,
			employeeHoursYear,
			cardMainValue: nFormatter(ZRaw[1]),
			cardMainValueDollars: true,
			onboardingDaysCustomer: null,
			onboardingDaysCandidate: null,
			onboardingDaysVendor: null,
			candidatesYear: null
		};
	}
);

const calcB2cConversionRate = tryCalcWrap((customerInformation: string, amount: string) => {
	const financial = Number(amount);

	const improvement: Record<string, Record<number, NumberRange>> = {
		signature: {
			1000000: [0.05, 0.06],
			10000000: [0.0425, 0.0525],
			50000000: [0.035, 0.045],
			100000000: [0.0275, 0.0375],
			250000000: [0.02, 0.03],
			500000000: [0.0125, 0.0225],
			1000000000: [0.005, 0.015],
			5000000000: [0.0025, 0.0075]
		},
		identity: {
			1000000: [0.065, 0.075],
			10000000: [0.055, 0.065],
			50000000: [0.045, 0.055],
			100000000: [0.035, 0.045],
			250000000: [0.025, 0.035],
			500000000: [0.015, 0.025],
			1000000000: [0.005, 0.015],
			5000000000: [0.0025, 0.0075]
		}
	};

	const X = `${formatPercent(improvement[customerInformation][financial][0], {
		maximumFractionDigits: 1
	})}-${formatPercent(improvement[customerInformation][financial][1], {
		maximumFractionDigits: 1
	})}`;

	const calcZRange = (index: 0 | 1) =>
		improvement[customerInformation][financial][index] * financial;
	const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];
	return {
		elementId: 'bar',
		text: `${X} increase in conversion rates by reducing customer abandonment during the agreement process.`,
		X,
		Y: null,
		employeeHoursYear: null,
		dollarsYear: ZRaw,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

export const calcB2c = (
	driverOption: string[],
	characteristics: {
		B2C_revenue: string[];
		B2C_agreement_volume: string[];
		B2C_customer_information: string[];
	}
) => {
	return [
		...(driverOption.includes('B2C_1_onboard_customers')
			? [calcB2cTat(characteristics.B2C_customer_information[0])]
			: []),
		...(driverOption.includes('B2C_2_attract_retain')
			? [
					calcB2cConversionRate(
						characteristics.B2C_customer_information[0],
						characteristics.B2C_revenue[0]
					)
				]
			: []),
		...(driverOption.includes('B2C_3_boost_productivity')
			? [
					calcB2cStaffProductivity(
						characteristics.B2C_customer_information[0],
						characteristics.B2C_agreement_volume[0]
					)
				]
			: [])
	].filter(isTruthy);
};
