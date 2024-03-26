import type { CalculatedResult, NumberRange } from '../types.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tryCalcWrap = <T extends Array<any>>(fn: (...args: T) => CalculatedResult) => {
	return (...args: T): CalculatedResult | null => {
		try {
			return fn(...args);
		} catch (e) {
			return null;
		}
	};
};

export const getRange = (fn: (index: 0 | 1) => number) => {
	const result: NumberRange = [fn(0), fn(1)];
	return result;
};
