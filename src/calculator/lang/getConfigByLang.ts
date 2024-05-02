import * as en from './config.js';
import * as fr from './config.fr-ca.js';
import * as gb from './config.en-gb.js';
import type { TranslationState } from '../types.js';

export const getTranslationData = (lang: string) => {
	const langLowercase = lang.toLowerCase();

	switch (langLowercase) {
		case 'fr-ca':
			return fr;
		case 'en-gb':
			return gb;
		default:
			return en;
	}
};

export const getTranslations = (lang: string): TranslationState => {
	const data = getTranslationData(lang);
	return {
		translations: data.langConfig,
		flowConfig: data.flowConfig,
		resultTranslations: data.resultText,
		currency: data.currency,
		lang
	};
};
