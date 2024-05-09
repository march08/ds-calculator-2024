import Calculator from '../calculator/Calculator.svelte';
import { getTranslations } from '../calculator/lang/getConfigByLang.js';
import type { WindowWithOptions } from '../calculator/utils/getWindow.js';

type Props = {
	renderTarget: HTMLElement;
	locale?: string;
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
(window as unknown as any).DocusignCalculator = {
	initialize: ({ renderTarget, locale, ...rest }: Props) => {
		const langConfig = getTranslations(locale || 'en');

		(window as unknown as WindowWithOptions).langOptions = {
			currencyFormatter: {
				currency: langConfig.currency,
				currencyDisplay: 'narrowSymbol'
			},
			lang: locale
		};

		return new Calculator({
			target: renderTarget,
			props: rest
		});
	}
};
