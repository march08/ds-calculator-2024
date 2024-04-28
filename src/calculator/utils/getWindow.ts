export type WindowWithOptions = Window & {
	langOptions: {
		currencyFormatter: Record<string, string>;
		lang?: string;
	};
};

export const getWindow = () => window as unknown as WindowWithOptions;
