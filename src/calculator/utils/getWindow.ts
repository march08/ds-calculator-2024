export type WindowWithOptions = Window & {
	langOptions: {
		currencyFormatter: Record<string, string>;
		lang?: string;
		valueMultiplier?: number;
	};
};

export const windowWithLangOptions = window as unknown as WindowWithOptions;
