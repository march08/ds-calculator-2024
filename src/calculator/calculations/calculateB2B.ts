// import type { DriverOption } from '../config.js';

import type { NumberRange } from '../types.js';
import { numberRangeToText } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatPercent, nFormatter } from '../utils/number.js';
import { getRange, tryCalcWrap } from './utils.js';

const calcB2bTat = tryCalcWrap((complexity: string) => {
	const base: Record<string, NumberRange> = {
		low: [9, 19],
		medium: [20, 60],
		high: [45, 140]
	};

	const improvement: Record<string, NumberRange> = {
		low: [0.83, 0.71],
		medium: [0.83, 0.71],
		high: [0.83, 0.71]
	};

	/**
	 *
	 */

	const calcOnboardingDaysCustomer = (index: 0 | 1) =>
		base[complexity][index] * improvement[complexity][index];
	const calcOnboardingDaysCustomerRaw = getRange(calcOnboardingDaysCustomer);

	/**
	 * X
	 */
	const XRaw: NumberRange = [improvement[complexity][1], improvement[complexity][0]];
	const X = numberRangeToText(XRaw, formatPercent);

	/**
	 * Y
	 */
	const calcYRange = (index: 0 | 1) =>
		base[complexity][index] * (1 - improvement[complexity][index]);
	const YRaw: NumberRange = [calcYRange(0), calcYRange(1)];
	const Y = numberRangeToText(YRaw);

	return {
		illustrationType: 'pie',
		text: `${X} faster deals, with the potential to reduce the sales cycle from weeks to just ${Y} days.`,
		renderConfig: [
			{
				type: 'variable',
				key: 'X'
			},
			{
				type: 'text',
				content: ' faster deals, with the potential to reduce the sales cycle from weeks to just '
			},
			{
				type: 'variable',
				key: 'Y'
			},
			{
				type: 'text',
				content: ' days.'
			}
		],
		X,
		XRaw,
		Y,
		dollarsYear: null,
		employeeHoursYear: null,
		cardMainValue: `${Y} days`,
		onboardingDaysCustomer: calcOnboardingDaysCustomerRaw,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcB2bSellerProductivity = tryCalcWrap((complexity: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		low: [2, 6],
		medium: [6, 10],
		high: [8, 12]
	};

	const improvement: Record<string, NumberRange> = {
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
		base[complexity][index] * improvement[complexity][index] * volume;

	const employeeHoursYear: NumberRange = [calcYRange(0), calcYRange(1)];
	const Y = numberRangeToText(employeeHoursYear);

	const XRaw: NumberRange = [improvement[complexity][0], improvement[complexity][1]];
	const X = numberRangeToText(XRaw, formatPercent);

	const calcZRange = (index: 0 | 1) =>
		base[complexity][index] * financial[complexity] * improvement[complexity][index] * volume;

	return {
		illustrationType: 'calendar',
		text: `${X} more productive sellers, which frees up ${Y} annual hours to accelerate pipeline development, close more deals, defend price points, etc.`,
		renderConfig: [
			{
				type: 'variable',
				key: 'X'
			},
			{
				type: 'text',
				content: ' more productive sellers, which frees up '
			},
			{
				type: 'variable',
				key: 'Y'
			},
			{
				type: 'text',
				content:
					' annual hours to accelerate pipeline development, close more deals, defend price points, etc.'
			}
		],
		X,
		XRaw,
		Y,
		dollarsYear: [calcZRange(0), calcZRange(1)],
		employeeHoursYear,
		cardMainValue: nFormatter(calcZRange(1)),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcB2bLegalCapacity = tryCalcWrap((complexity: string) => {
	const improvement: Record<string, NumberRange> = {
		low: [0.78, 0.78],
		medium: [0.78, 0.78],
		high: [0.78, 0.78]
	};

	const XRaw: NumberRange = [improvement[complexity][0], improvement[complexity][1]];
	const X = numberRangeToText(XRaw, formatPercent);

	return {
		illustrationType: 'pie',
		text: `Up to ${X} of agreements completed without legal intervention by establishing a self-service process with smart guardrails.`,
		renderConfig: [
			{
				type: 'text',
				content: 'Up to '
			},
			{
				type: 'variable',
				key: 'X'
			},
			{
				type: 'text',
				content:
					' of agreements completed without legal intervention by establishing a self-service process with smart guardrails.'
			}
		],
		X,
		XRaw,
		Y: null,
		dollarsYear: null,
		employeeHoursYear: null,
		cardMainValue: formatPercent(XRaw[1]),
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcB2bReducedLegalProductivity = tryCalcWrap(
	(complexity: string, agreementVolume: string) => {
		const volume = Number(agreementVolume);
		const base: Record<string, NumberRange> = {
			low: [0.5, 2],
			medium: [4, 8],
			high: [10, 15]
		};

		const improvement: Record<string, NumberRange> = {
			low: [0.5, 0.5],
			medium: [0.5, 0.5],
			high: [0.5, 0.5]
		};

		const financialConst = 78;

		const XRaw: NumberRange = [improvement[complexity][0], improvement[complexity][1]];
		const X = numberRangeToText(XRaw, formatPercent);

		const calcYRange = (index: 0 | 1) =>
			base[complexity][index] * improvement[complexity][index] * volume;
		const employeeHoursYear: NumberRange = [calcYRange(0), calcYRange(1)];

		const Y = numberRangeToText(employeeHoursYear);

		const calcZRange = (index: 0 | 1) =>
			base[complexity][index] * improvement[complexity][index] * volume * financialConst;
		const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];

		return {
			illustrationType: 'calendar',
			text: `Up to ${X} faster legal review and approvals, freeing up ${Y} annual hours to focus on more strategic negotiations, audits, etc.`,
			renderConfig: [
				{
					type: 'text',
					content: 'Up to '
				},
				{
					type: 'variable',
					key: 'X'
				},
				{
					type: 'text',
					content: ' faster legal review and approvals, freeing up '
				},
				{
					type: 'variable',
					key: 'Y'
				},
				{
					type: 'text',
					content: ' annual hours to focus on more strategic negotiations, audits, etc.'
				}
			],
			X,
			XRaw,
			Y,
			dollarsYear: [calcZRange(0), calcZRange(1)],
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

const calcB2bReducedRiskExposure = tryCalcWrap((complexity: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		low: [0.0025, 0.005],
		medium: [0.005, 0.0075],
		high: [0.0075, 0.01]
	};
	const improvement: Record<string, NumberRange> = {
		low: [0.05, 0.05],
		medium: [0.05, 0.05],
		high: [0.05, 0.05]
	};

	const financialConst = 100000;

	const XRaw: NumberRange = [improvement[complexity][0], improvement[complexity][1]];
	const X = numberRangeToText(XRaw, formatPercent);

	const calcZRange = (index: 0 | 1) =>
		base[complexity][index] * improvement[complexity][index] * volume * financialConst;
	const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];

	return {
		illustrationType: 'bar',
		text: `${X} estimated risk exposure reduction by ensuring agreements only contain standard, pre approved clauses unless there’s a legal-approved exception.`,
		renderConfig: [
			{
				type: 'variable',
				key: 'X'
			},
			{
				type: 'text',
				content:
					' estimated risk exposure reduction by ensuring agreements only contain standard, pre approved clauses unless there’s a legal-approved exception.'
			}
		],
		X,
		XRaw,
		Y: null,
		dollarsYear: ZRaw,
		employeeHoursYear: null,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcB2bReducedRevenueLeakage = tryCalcWrap((complexity: string, rev: string) => {
	const revenue = Number(rev);
	const base: Record<string, NumberRange> = {
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

	const improvement: Record<string, NumberRange> = {
		low: [0.05, 0.1],
		medium: [0.05, 0.1],
		high: [0.05, 0.1]
	};

	const XRaw: NumberRange = [improvement[complexity][0], improvement[complexity][1]];
	const X = numberRangeToText(XRaw, formatPercent);

	const calcZRange = (index: 0 | 1) =>
		baseReducted[index] * improvement[complexity][index] * revenue;

	const ZRaw: NumberRange = [calcZRange(0), calcZRange(1)];

	return {
		illustrationType: 'bar',
		text: `${X} estimated reduction in revenue leakage by ensuring obligations are enforced, fees are collected, and renewal events are maximized.`,
		renderConfig: [
			{
				type: 'variable',
				key: 'X'
			},
			{
				type: 'text',
				content:
					' estimated reduction in revenue leakage by ensuring obligations are enforced, fees are collected, and renewal events are maximized.'
			}
		],
		X,
		XRaw,
		Y: null,
		dollarsYear: ZRaw,
		employeeHoursYear: null,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
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
		...(driverOption.includes('B2B_2_reduced_risk_exposure')
			? [
					calcB2bLegalCapacity(characteristics.B2B_process_complexity[0]),
					calcB2bReducedLegalProductivity(
						characteristics.B2B_process_complexity[0],
						characteristics.B2B_agreement_volume[0]
					),
					calcB2bReducedRiskExposure(
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
