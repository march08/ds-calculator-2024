import type { NumberRange } from '../types.js';
import { isTruthy } from './isTruthy.js';
import { formatNumber } from './number.js';

type NumberFormatter = (n: number) => string;
export const numberRangeToText = (arr: NumberRange, formatter: NumberFormatter = formatNumber) => {
	if (arr[0] === arr[1]) {
		return formatter(arr[0]);
	}
	return arr.map((item) => formatter(item)).join('-');
};

export const sumRange = (ranges: NumberRange[]): NumberRange => {
	let res: NumberRange = [0, 0];
	ranges.forEach((r) => {
		res = [res[0] + r[0], res[1] + r[1]];
	});

	return res;
};

export const lastRangeItem = (arr: NumberRange, formatter: NumberFormatter, prep?: string) => {
	if (arr[1]) {
		return [prep, formatter(arr[1])].filter(isTruthy).join('');
	}
	return null;
};
