import Calculator from '../calculator/Calculator.svelte';

type Props = {
	renderTarget: HTMLElement;
	locale?: string;
};

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
(window as unknown as any).DocusignCalculator = {
	initialize: ({ renderTarget, locale: localeProp, ...rest }: Props) => {
		const localeFromPathname = location.pathname.split('/')[1];
		const locale = localeProp || localeFromPathname || 'en';

		return new Calculator({
			target: renderTarget,
			props: {
				...rest,
				lang: locale
			}
		});
	}
};
