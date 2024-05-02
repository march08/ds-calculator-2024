import { getWindow } from './getWindow.js';

export const formatPercent = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(getWindow().langOptions.lang || undefined, {
		style: 'percent',
		maximumFractionDigits: 0,
		...options
	});

export const getIntlPercentFormatter = (options?: Intl.NumberFormatOptions) =>
	Intl.NumberFormat(getWindow().langOptions.lang || undefined, {
		...options
	});

export const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(getWindow().langOptions.lang || undefined, {
		maximumFractionDigits: 0,
		...options
	});

export const getCurrencySymbol = () => {
	return Intl.NumberFormat(getWindow().langOptions.lang || undefined, {
		style: 'currency',
		maximumFractionDigits: 0,
		...getWindow().langOptions.currencyFormatter
	})
		.format(0)
		.replace('0', '');
};

export const formatCurrency = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(getWindow().langOptions.lang || undefined, {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
		maximumFractionDigits: 0,
		...options,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		...getWindow().langOptions.currencyFormatter
	});

export const intlAbbreviateFormatter = Intl.NumberFormat(
	getWindow().langOptions.lang || undefined,
	{
		compactDisplay: 'short',
		notation: 'compact'
	}
);

export const nFormatter = (num: number) => {
	return intlAbbreviateFormatter.format(num);
};
