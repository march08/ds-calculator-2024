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

export const translationResultToTextWithValues = (item: CalculatedResult, text: string) => {
	return text
		.replace('{X}', item.X || '')
		.replace('{Y}', item.Y || '')
		.replace('{X1}', item.XText[0] || '')
		.replace('{X2}', item.XText[1] || '');
};

export const translationResultToTextWithValuesHtml = (item: CalculatedResult, text: string) => {
	return text
		.replace('{X}', `<strong>${item.X || ''}</strong>`)
		.replace('{X1}', `<strong>${item.XText[0] || ''}</strong>`)
		.replace('{X2}', `<strong>${item.XText[1] || ''}</strong>`)
		.replace('{Y}', `<strong>${item.Y || ''}</strong>`);
};
