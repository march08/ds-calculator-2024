// import type { DriverOption } from '../config.js';
import type { CalculatedResult } from '../types.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatNumber, formatPercent } from '../utils/number.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tryWrap = <T extends Array<any>>(fn: (...args: T) => CalculatedResult) => {
	return (...args: T): CalculatedResult | null => {
		try {
			return fn(...args);
		} catch (e) {
			console.log(e);
			return null;
		}
	};
};

const calcB2bTat = tryWrap((complexity: string) => {
	const base: Record<string, [number, number]> = {
		low: [9, 19],
		medium: [20, 60],
		high: [45, 140]
	};

	const improvement: Record<string, [number, number]> = {
		low: [0.83, 0.71],
		medium: [0.83, 0.71],
		high: [0.83, 0.71]
	};

	const calcYRange = (index: 0 | 1) =>
		formatNumber(base[complexity][index] * (1 - improvement[complexity][index]));

	const Y = `${calcYRange(0)}-${calcYRange(1)}`;
	const X = `${formatPercent(improvement[complexity][1])}-${formatPercent(improvement[complexity][0])}`;

	return {
		elementId: '__TODO',
		text: `${X} faster deals, with the potential to reduce the sales cycle from weeks to just ${Y} days.`,
		X,
		Y,
		Z: null
	};
});

const calcB2bSellerProductivity = tryWrap((complexity: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, [number, number]> = {
		low: [2, 6],
		medium: [6, 10],
		high: [8, 12]
	};

	const improvement: Record<string, [number, number]> = {
		low: [0.25, 0.5],
		medium: [0.25, 0.5],
		high: [0.25, 0.5]
	};

	const financial: Record<string, number> = {
		low: 25,
		medium: 25,
		high: 25
	};

	const calcYRange = (index: 0 | 1) =>
		formatNumber(base[complexity][index] * improvement[complexity][index] * volume);

	const Y = `${calcYRange(0)}-${calcYRange(1)}`;
	const X = `${formatPercent(improvement[complexity][0])}-${formatPercent(improvement[complexity][1])}`;

	const calcZRange = (index: 0 | 1) =>
		base[complexity][index] * financial[complexity] * improvement[complexity][index] * volume;

	return {
		elementId: '__TODO',
		text: `${X} more productive sellers, which frees up ${Y} annual hours to accelerate pipeline development, close more deals, defend price points, etc.`,
		X,
		Y,
		Z: [calcZRange(0), calcZRange(1)]
	};
});

const calcB2bReducedRevenueLeakage = tryWrap((complexity: string, rev: string) => {
	const revenue = Number(rev);
	const base: Record<string, [number, number]> = {
		low: [0.0375, 0.0475],
		medium: [0.0475, 0.0575],
		high: [0.0575, 0.0675]
	};

	const getBase = () => {
		const nonreductedBase = base[complexity];
		if (revenue < 250000000) {
			return nonreductedBase;
		}
		if (revenue < 1000000000) {
			return [nonreductedBase[0] - 0.01, nonreductedBase[1] - 0.01];
		}
		return [nonreductedBase[0] - 0.03, nonreductedBase[1] - 0.03];
	};

	const baseReducted = getBase();

	const improvement: Record<string, [number, number]> = {
		low: [0.05, 0.1],
		medium: [0.05, 0.1],
		high: [0.05, 0.1]
	};

	const X = `${formatPercent(improvement[complexity][0])}-${formatPercent(improvement[complexity][1])}`;

	console.log('revenue', revenue);
	const calcZRange = (index: 0 | 1) =>
		baseReducted[index] * improvement[complexity][index] * revenue;

	return {
		elementId: '__TODO',
		text: `${X} estimated reduction in revenue leakage by ensuring obligations are enforced, fees are collected, and renewal events are maximized.`,
		X,
		Y: null,
		Z: [calcZRange(0), calcZRange(1)]
	};
});

export const calcB2b = (
	driverOption: string[],
	characteristics: {
		B2B_revenue: string[];
		B2B_agreement_volume: string[];
		B2B_process_complexity: string[];
	}
) => {
	return [
		...(driverOption.includes('B2B_1_seller_productivity')
			? [
					calcB2bTat(characteristics.B2B_process_complexity[0]),
					calcB2bSellerProductivity(
						characteristics.B2B_process_complexity[0],
						characteristics.B2B_agreement_volume[0]
					)
				]
			: []),
		...(driverOption.includes('B2B_3_reduced_revenue_leakage')
			? [
					calcB2bReducedRevenueLeakage(
						characteristics.B2B_process_complexity[0],
						characteristics.B2B_revenue[0]
					)
				]
			: [])
	].filter(isTruthy);
};
