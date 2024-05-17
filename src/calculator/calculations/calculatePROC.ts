import type { NumberRange } from '../types.js';
import { numberRangeToText } from '../utils/array.js';
import { isTruthy } from '../utils/isTruthy.js';
import { formatPercent, nFormatterAmount } from '../utils/number.js';
import { getRange, tryCalcWrap } from './utils.js';

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

	const XRaw: NumberRange = [improvement[spendType][0], improvement[spendType][0]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	const calcY = (index: 0 | 1) => {
		return base[spendType][index] * (1 - improvement[spendType][index]);
	};

	const Y = numberRangeToText([calcY(0), calcY(1)]);

	const calcOnboardingDaysVendorRaw = getRange(
		(index: 0 | 1) => base[spendType][index] * improvement[spendType][index]
	);

	return {
		illustrationType: 'calendar',
		resultTextKey: 'proc_1',
		X,
		XRaw,
		XText,
		Y,
		cardMainValue: `${Y} days`,
		dollarsYear: null,
		employeeHoursYear: null,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: calcOnboardingDaysVendorRaw,
		candidatesYear: null
	};
});

const calcPROCEfficiencyToIncreaseCapacity = tryCalcWrap(
	(spendType: string, agreementVolume: string) => {
		const volume = Number(agreementVolume);
		const base: Record<string, NumberRange> = {
			direct: [10, 10],
			indirect: [5, 5],
			capex: [15, 15]
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

		const XRaw: NumberRange = [improvement[spendType][0], improvement[spendType][1]];
		const X = numberRangeToText(XRaw, formatPercent);
		const XText = XRaw.map((x) => formatPercent(x));

		const employeeHoursYear: NumberRange = [calcY(0), calcY(1)];
		const Y = numberRangeToText(employeeHoursYear);

		const calcZ = (index: 0 | 1) => {
			return base[spendType][index] * improvement[spendType][index] * volume * financialConstant;
		};

		const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

		return {
			illustrationType: 'bar',
			resultTextKey: 'proc_2',
			X,
			XRaw,
			XText,
			Y,
			dollarsYear: [calcZ(0), calcZ(1)],
			employeeHoursYear,
			cardMainValue: nFormatterAmount(ZRaw[1]),
			cardMainValueDollars: true,
			onboardingDaysCustomer: null,
			onboardingDaysCandidate: null,
			onboardingDaysVendor: null,
			candidatesYear: null
		};
	}
);

const calcPROCLegalCapacity = tryCalcWrap((spendType: string) => {
	const improvement: Record<string, NumberRange> = {
		direct: [0.78, 0.78],
		indirect: [0.78, 0.78],
		capex: [0.78, 0.78]
	};

	const XRaw: NumberRange = [improvement[spendType][0], improvement[spendType][0]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	return {
		illustrationType: 'pie',
		resultTextKey: 'proc_3',
		X,
		XRaw,
		XText,
		Y: null,
		dollarsYear: null,
		employeeHoursYear: null,
		cardMainValue: X,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
	};
});

const calcPROCLegalProductivity = tryCalcWrap((spendType: string, agreementVolume: string) => {
	const volume = Number(agreementVolume);
	const base: Record<string, NumberRange> = {
		direct: [5, 10],
		indirect: [0.5, 2],
		capex: [4, 8]
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

	const XRaw: NumberRange = [improvement[spendType][0], improvement[spendType][1]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	const employeeHoursYear: NumberRange = [calcY(0), calcY(1)];
	const Y = numberRangeToText(employeeHoursYear);

	const calcZ = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume * financialConstant;
	};
	const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

	return {
		illustrationType: 'bar',
		resultTextKey: 'proc_4',
		X,
		XRaw,
		XText,
		Y,
		dollarsYear: ZRaw,
		employeeHoursYear,
		cardMainValue: nFormatterAmount(ZRaw[1]),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
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

	const XRaw: NumberRange = [improvement[spendType][0], improvement[spendType][1]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	const zTableCapex: Record<string, NumberRange> = {
		1000: [37500, 50000],
		2500: [93750, 125000],
		5000: [187500, 250000],
		10000: [375000, 500000],
		25000: [937500, 1250000],
		50000: [1875000, 2500000],
		100000: [3750000, 5000000],
		1000000: [37500000, 50000000],
		10000000: [375000000, 500000000]
	};

	const calcZ = (index: 0 | 1) => {
		return base[spendType][index] * improvement[spendType][index] * volume * financialConstant;
	};

	const ZRaw: NumberRange =
		spendType === 'capex'
			? zTableCapex[agreementVolume as unknown as keyof typeof zTableCapex]
			: [calcZ(0), calcZ(1)];

	return {
		illustrationType: 'bar',
		resultTextKey: 'proc_5',
		X,
		XRaw,
		XText,
		Y: null,
		dollarsYear: ZRaw,
		employeeHoursYear: null,
		cardMainValue: nFormatterAmount(ZRaw[1]),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
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

	const XRaw: NumberRange = [improvement[spendType][0], improvement[spendType][1]];
	const X = numberRangeToText(XRaw, formatPercent);
	const XText = XRaw.map((x) => formatPercent(x));

	const calcZ = (index: 0 | 1) => {
		return amount * base[spendType][amount][index] * improvement[spendType][index];
	};
	const ZRaw: NumberRange = [calcZ(0), calcZ(1)];

	return {
		illustrationType: 'pie',
		resultTextKey: 'proc_6',
		X,
		XRaw,
		XText,
		Y: null,
		dollarsYear: ZRaw,
		employeeHoursYear: null,
		cardMainValue: nFormatterAmount(ZRaw[1]),
		cardMainValueDollars: true,
		onboardingDaysCustomer: null,
		onboardingDaysCandidate: null,
		onboardingDaysVendor: null,
		candidatesYear: null
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
	return [
		...(driverOption.includes('PROC_1_onboard_vendors')
			? [calcPROCtat(characteristics.PROC_spend_type[0])]
			: []),
		...(driverOption.includes('PROC_2_improved_productivity')
			? [
					calcPROCEfficiencyToIncreaseCapacity(
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
