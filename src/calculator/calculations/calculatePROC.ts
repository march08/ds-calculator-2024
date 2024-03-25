// import type { DriverOption } from '../config.js';
import type { NumberRange } from '../types.js';
import { numberRangeToText } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatPercent, nFormatter } from '../utils/number.js';
import { tryCalcWrap } from './utils.js';

const calcPROCtat = tryCalcWrap((spendType: string) => {
	const base: Record<string, NumberRange> = {
		direct: [30, 120],
		indirect: [15, 30],
		capex: [30, 120]
	};

	const improvement: Record<string, NumberRange> = {
		direct: [0.83, 0.83],
		indirect: [0.83, 0.83],
		capex: [0.83, 0.83]
	};

	const X = formatPercent(improvement[spendType][0]);

	const calcY = (index: 0 | 1) => {
		return base[spendType][index] * (1 - improvement[spendType][index]);
	};

	const Y = numberRangeToText([calcY(0), calcY(1)]);

	return {
		elementId: 'calendar',
		text: `${X} faster vendor onboarding, going from weeks to just ${Y} days.`,
		X,
		Y,
		financialImpact: null,
		hourlyImpact: null,
		cardMainValue: `${Y} days`
	};
});

const calcPROCProductivity = tryCalcWrap((spendType: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		direct: [10, 20],
		indirect: [5, 10],
		capex: [15, 25]
	};

	const improvement: Record<string, NumberRange> = {
		direct: [0.25, 0.5],
		indirect: [0.25, 0.5],
		capex: [0.25, 0.5]
	};

	const financialConstant = 25;

	const calcY = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume;
	};

	const X = numberRangeToText(
		[improvement[spendType][0], improvement[spendType][1]],
		formatPercent
	);

	const hourlyImpact: NumberRange = [calcY(0), calcY(1)];
	const Y = numberRangeToText(hourlyImpact);

	const calcZ = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume * financialConstant;
	};

	const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

	return {
		elementId: 'bar-chart',
		text: `${X} improvement in staff productivity, freeing up ${Y} annual hours to focus on priorities like vendor management and innovation. `,
		X,
		Y,
		financialImpact: [calcZ(0), calcZ(1)],
		hourlyImpact,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true
	};
});

const calcPROCLegalCapacity = tryCalcWrap((spendType: string) => {
	const improvement: Record<string, NumberRange> = {
		direct: [0.78, 0.78],
		indirect: [0.78, 0.78],
		capex: [0.78, 0.78]
	};

	const X = formatPercent(improvement[spendType][0]);

	return {
		elementId: 'pie-chart',
		text: `Up to ${X} of agreements completed without legal intervention by establishing a self-service process with smart guardrails.`,
		X,
		Y: null,
		financialImpact: null,
		hourlyImpact: null,
		cardMainValue: X
	};
});

const calcPROCLegalProductivity = tryCalcWrap((spendType: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		direct: [10, 15],
		indirect: [0.5, 2],
		capex: [10, 15]
	};

	const improvement: Record<string, NumberRange> = {
		direct: [0.5, 0.5],
		indirect: [0.5, 0.5],
		capex: [0.5, 0.5]
	};

	const financialConstant = 78;

	const calcY = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume;
	};

	const X = numberRangeToText(
		[improvement[spendType][0], improvement[spendType][1]],
		formatPercent
	);

	const hourlyImpact: NumberRange = [calcY(0), calcY(1)];
	const Y = numberRangeToText(hourlyImpact);

	const calcZ = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume * financialConstant;
	};
	const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

	return {
		elementId: 'bar-chart',
		text: `Up to ${X} faster legal review and approvals, freeing up ${Y} annual hours to focus on more strategic negotiations, audits, etc.`,
		X,
		Y,
		financialImpact: ZRaw,
		hourlyImpact,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true
	};
});

const calcPROCReduceRisk = tryCalcWrap((spendType: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		direct: [0.75 / 100, 1 / 100],
		indirect: [0.25 / 100, 0.5 / 100],
		capex: [0.5 / 100, 0.75 / 100]
	};

	const improvement: Record<string, NumberRange> = {
		direct: [5 / 100, 5 / 100],
		indirect: [5 / 100, 5 / 100],
		capex: [5 / 100, 5 / 100]
	};

	const financialConstant = 100000;

	const X = numberRangeToText(
		[improvement[spendType][0], improvement[spendType][1]],
		formatPercent
	);

	const calcZ = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume * financialConstant;
	};
	const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

	return {
		elementId: 'bar-chart',
		text: `${X} estimated risk exposure reduction by ensuring agreements only contain standard, pre approved clauses unless there’s a legal-approved exception.`,
		X,
		Y: null,
		financialImpact: ZRaw,
		hourlyImpact: null,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true
	};
});

const calcPROCReduceSavingsLeakage = tryCalcWrap((spendType: string, spendAmount: string) => {
	const amount = Number(spendAmount);

	const improvement: Record<string, NumberRange> = {
		direct: [5 / 100, 10 / 100],
		indirect: [5 / 100, 10 / 100],
		capex: [5 / 100, 10 / 100]
	};

	const base: Record<string, Record<number, NumberRange>> = {
		direct: {
			1000000: [3.5 / 100, 4.5 / 100],
			10000000: [3.5 / 100, 4.5 / 100],
			50000000: [3.5 / 100, 4.5 / 100],
			100000000: [3.5 / 100, 4.5 / 100],
			250000000: [2.5 / 100, 3.5 / 100],
			500000000: [2.5 / 100, 3.5 / 100],
			1000000000: [1.5 / 100, 2.5 / 100],
			5000000000: [1.5 / 100, 2.5 / 100]
		},
		indirect: {
			1000000: [5.25 / 100, 6.25 / 100],
			10000000: [5.25 / 100, 6.25 / 100],
			50000000: [5.25 / 100, 6.25 / 100],
			100000000: [5.25 / 100, 6.25 / 100],
			250000000: [4.25 / 100, 5.25 / 100],
			500000000: [4.25 / 100, 5.25 / 100],
			1000000000: [3.25 / 100, 4.25 / 100],
			5000000000: [3.25 / 100, 4.25 / 100]
		},
		capex: {
			1000000: [4.0 / 100, 5.0 / 100],
			10000000: [4.0 / 100, 5.0 / 100],
			50000000: [4.0 / 100, 5.0 / 100],
			100000000: [4.0 / 100, 5.0 / 100],
			250000000: [3.0 / 100, 4.0 / 100],
			500000000: [3.0 / 100, 4.0 / 100],
			1000000000: [2.0 / 100, 3.0 / 100],
			5000000000: [2.0 / 100, 3.0 / 100]
		}
	};

	const X = numberRangeToText(
		[improvement[spendType][0], improvement[spendType][1]],
		formatPercent
	);

	const calcZ = (index: 0 | 1) => {
		return amount * base[spendType][amount][index] * improvement[spendType][index];
	};
	const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

	return {
		elementId: 'pie-chart',
		text: `${X} estimated reduction in savings leakage by ensuring obligations are enforced, rebates/penalties are collected, and renewals are maximized.`,
		X,
		Y: null,
		financialImpact: ZRaw,
		hourlyImpact: null,
		cardMainValue: nFormatter(ZRaw[1]),
		cardMainValueDollars: true
	};
});

export const calcPROC = (
	driverOption: string[],
	characteristics: {
		PROC_annual_spend: string[];
		PROC_spend_type: string[];
		PROC_agreement_volume: string[];
	}
) => {
	// PROC_1_onboard_vendors
	// PROC_2_improved_productivity
	// PROC_3_reduce_risk
	// PROC_4_max_value
	return [
		...(driverOption.includes('PROC_1_onboard_vendors')
			? [calcPROCtat(characteristics.PROC_spend_type[0])]
			: []),
		...(driverOption.includes('PROC_2_improved_productivity')
			? [
					calcPROCProductivity(
						characteristics.PROC_spend_type[0],
						characteristics.PROC_agreement_volume[0]
					)
				]
			: []),
		...(driverOption.includes('PROC_3_reduce_risk')
			? [
					calcPROCLegalCapacity(characteristics.PROC_spend_type[0]),
					calcPROCLegalProductivity(
						characteristics.PROC_spend_type[0],
						characteristics.PROC_agreement_volume[0]
					),
					calcPROCReduceRisk(
						characteristics.PROC_spend_type[0],
						characteristics.PROC_agreement_volume[0]
					)
				]
			: []),
		...(driverOption.includes('PROC_4_max_value')
			? [
					calcPROCReduceSavingsLeakage(
						characteristics.PROC_spend_type[0],
						characteristics.PROC_annual_spend[0]
					)
				]
			: [])
	].filter(isTruthy);
};
