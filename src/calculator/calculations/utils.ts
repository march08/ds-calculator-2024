import type { CalculatedResult } from '../types.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tryCalcWrap = <T extends Array<any>>(fn: (...args: T) => CalculatedResult) => {
	return (...args: T): CalculatedResult | null => {
		try {
			return fn(...args);
		} catch (e) {
			console.log(e);
			return null;
		}
	};
};
