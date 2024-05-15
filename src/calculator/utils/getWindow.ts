export type WindowWithOptions = Window & {
	langOptions: {
		currencyFormatter: {
			currency: string;
			currencyDisplay: string;
			currencyLocale: string;
			currencySymbolFormatter: (val: string) => string;
		};
		lang?: string;
		valueMultiplier?: number;
	};
};

export const windowWithLangOptions = window as unknown as WindowWithOptions;
