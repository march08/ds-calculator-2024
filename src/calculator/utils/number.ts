import { windowWithLangOptions } from './getWindow.js';

export const formatPercent = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(windowWithLangOptions.langOptions.lang || undefined, {
		style: 'percent',
		maximumFractionDigits: 0,
		...options
	});

export const getIntlPercentFormatter = (options?: Intl.NumberFormatOptions) =>
	Intl.NumberFormat(windowWithLangOptions.langOptions.lang || undefined, {
		style: 'percent',
		maximumFractionDigits: 0,
		...options
	});

export const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(windowWithLangOptions.langOptions.lang || undefined, {
		maximumFractionDigits: 0,
		...options
	});

export const getCurrencySymbol = () => {
	const plainRes = Intl.NumberFormat(
		windowWithLangOptions.langOptions.currencyFormatter.currencyLocale ||
			windowWithLangOptions.langOptions.lang ||
			undefined,
		{
			style: 'currency',
			maximumFractionDigits: 0,
			...windowWithLangOptions.langOptions.currencyFormatter
		}
	)
		.format(0)
		.replace('0', '');

	return windowWithLangOptions.langOptions.currencyFormatter.currencySymbolFormatter(plainRes);
};

export const formatCurrency = (value: number, options?: Intl.NumberFormatOptions) => {
	const plainRes = Number(
		value * (windowWithLangOptions?.langOptions?.valueMultiplier || 1)
	).toLocaleString(
		windowWithLangOptions.langOptions.currencyFormatter.currencyLocale ||
			windowWithLangOptions.langOptions.lang ||
			undefined,
		{
			style: 'currency',
			maximumFractionDigits: 0,
			...options,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...windowWithLangOptions.langOptions.currencyFormatter
		}
	);

	return windowWithLangOptions.langOptions.currencyFormatter.currencySymbolFormatter(plainRes);
};

export const nFormatter = (num: number) => {
	const plainRes = Intl.NumberFormat(windowWithLangOptions.langOptions.lang || undefined, {
		compactDisplay: 'short',
		notation: 'compact'
	}).format(num);
	return plainRes;
};
export const nFormatterAmount = (num: number) => {
	const plainRes = Intl.NumberFormat(windowWithLangOptions.langOptions.lang || undefined, {
		compactDisplay: 'short',
		notation: 'compact'
	}).format(num * (windowWithLangOptions?.langOptions?.valueMultiplier || 1));
	return plainRes;
};
