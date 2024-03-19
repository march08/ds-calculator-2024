// import type { DriverOption } from '../config.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatNumber, formatPercent } from '../utils/number.js';
import { tryCalcWrap } from './utils.js';

const calcB2cTat = tryCalcWrap((customerInformation: string) => {
	const base: Record<string, [number, number]> = {
		signature: [1, 5],
		identity: [1, 5]
	};

	const improvement: Record<string, [number, number]> = {
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

	return {
		elementId: '__TODO',
		text: `${X} faster deals, with the potential to reduce the sales cycle from weeks to just ${Y} days.`,
		X,
		Y,
		Z: null
	};
});

const calcB2cStaffProductivity = tryCalcWrap(
	(customerInformation: string, agreementVolume: string) => {
		const volume = Number(agreementVolume);
		const base: Record<string, [number, number]> = {
			signature: [0.25, 0.75],
			identity: [0.75, 2]
		};

		const improvement: Record<string, [number, number]> = {
			signature: [0.32, 0.5],
			identity: [0.32, 0.5]
		};

		const financialConstant = 25;

		const calcYRange = (index: 0 | 1) =>
			formatNumber(
				base[customerInformation][index] *
					improvement[customerInformation][index] *
					financialConstant
			);

		const Y = `${calcYRange(0)}-${calcYRange(1)}`;
		const X = `${formatPercent(improvement[customerInformation][0])}-${formatPercent(improvement[customerInformation][1])}`;

		const calcZRange = (index: 0 | 1) =>
			base[customerInformation][index] *
			improvement[customerInformation][index] *
			financialConstant *
			volume;
		return {
			elementId: '__TODO',
			text: `${X} improvement in staff productivity, freeing up ${Y} annual hours for higher-value activities.`,
			X,
			Y,
			Z: [calcZRange(0), calcZRange(1)]
		};
	}
);

const calcB2cConversionRate = tryCalcWrap((customerInformation: string, amount: string) => {
	const financial = Number(amount);

	const improvement: Record<string, Record<number, [number, number]>> = {
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
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	})}-${formatPercent(improvement[customerInformation][financial][1], {
		maximumFractionDigits: 2,
		minimumFractionDigits: 2
	})}`;

	const calcZRange = (index: 0 | 1) =>
		improvement[customerInformation][financial][index] * financial;
	return {
		elementId: '__TODO',
		text: `${X} increase in conversion rates by reducing customer abandonment during the agreement process.`,
		X,
		Y: null,
		Z: [calcZRange(0), calcZRange(1)]
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
		...(driverOption.includes('B2C_3_boost_productivity')
			? [
					calcB2cStaffProductivity(
						characteristics.B2C_customer_information[0],
						characteristics.B2C_agreement_volume[0]
					)
				]
			: []),
		...(driverOption.includes('B2C_2_attract_retain')
			? [
					calcB2cConversionRate(
						characteristics.B2C_customer_information[0],
						characteristics.B2C_revenue[0]
					)
				]
			: [])
	].filter(isTruthy);
};
