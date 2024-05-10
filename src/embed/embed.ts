import Calculator from '../calculator/Calculator.svelte';
import { getTranslations } from '../calculator/lang/getConfigByLang.js';
import type { WindowWithOptions } from '../calculator/utils/getWindow.js';

type Props = {
	renderTarget: HTMLElement;
	locale?: string;
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
(window as unknown as any).DocusignCalculator = {
	initialize: ({ renderTarget, locale: localeProp, ...rest }: Props) => {
		const localeFromPathname = location.pathname.split('/')[1];
		const locale = localeProp || localeFromPathname || 'en';

		console.log('locale', locale);
		const langConfig = getTranslations(locale);

		console.log('langConfig', langConfig);

		(window as unknown as WindowWithOptions).langOptions = {
			currencyFormatter: {
				currency: langConfig.currency,
				currencyDisplay: 'narrowSymbol'
			},
			lang: locale
		};

		return new Calculator({
			target: renderTarget,
			props: {
				...rest,
				lang: locale
			}
		});
	}
};
