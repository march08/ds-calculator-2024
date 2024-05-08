export type WindowWithOptions = Window & {
	langOptions: {
		currencyFormatter: Record<string, string>;
		lang?: string;
	};
};

export const windowWithLangOptions = window as unknown as WindowWithOptions;
