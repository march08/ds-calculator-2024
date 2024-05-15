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

		const langConfig = getTranslations(locale);

		(window as unknown as WindowWithOptions).langOptions = {
			currencyFormatter: {
				currency: langConfig.currency,
				currencyDisplay: langConfig.currencySymbol,
				currencyLocale: langConfig.currencyLocale
			},
			lang: langConfig.lang,
			valueMultiplier: langConfig.valueMultiplier
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
