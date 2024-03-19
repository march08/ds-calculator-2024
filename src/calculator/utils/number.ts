export const formatPercent = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(undefined, {
		style: 'percent',
		maximumFractionDigits: 0,
		...options
	});

export const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(undefined, { maximumFractionDigits: 0, ...options });

export const formatUsd = (value: number, options?: Intl.NumberFormatOptions) =>
	Number(value).toLocaleString(undefined, {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
		...options
	});
