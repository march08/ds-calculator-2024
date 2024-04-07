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
		currencyDisplay: 'narrowSymbol',
		maximumFractionDigits: 0,
		...options
	});

const toFixed = (value: number, digits: number) => {
	const powpow = Math.pow(10, digits);
	const res = Math.round(value * powpow) / powpow;
	return res;
};

const lookup = [
	{ value: 1, symbol: '' },
	{ value: 1e3, symbol: 'K' },
	{ value: 1e6, symbol: 'M' },
	{ value: 1e9, symbol: 'B' },
	{ value: 1e12, symbol: 'T' },
	{ value: 1e15, symbol: 'P' },
	{ value: 1e18, symbol: 'E' }
];
export const nFormatter = (num: number, dollars = false) => {
	const digits = num > 1000000 ? 1 : 0;
	const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
	const item = lookup.findLast((item) => num >= item.value);
	return `${dollars ? '$' : ''}${item ? `${toFixed(num / item.value, digits)}`.replace(regexp, '').concat(item.symbol) : '0'}`;
};
