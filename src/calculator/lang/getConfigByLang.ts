import * as en from './config.js';
import * as fr from './config.fr-ca.js';
import type { TranslationState } from '../types.js';

export const getConfigByLang = (lang: string) => {
	const langLowercase = lang.toLowerCase();

	switch (langLowercase) {
		case 'fr-ca':
			return fr.flowConfig;
		default:
			return en.flowConfig;
	}
};

export const getTranslation = (lang: string) => {
	const langLowercase = lang.toLowerCase();

	switch (langLowercase) {
		case 'fr-ca':
			return fr.langConfig;
		default:
			return en.langConfig;
	}
};

export const getTranslationData = (lang: string) => {
	const langLowercase = lang.toLowerCase();

	switch (langLowercase) {
		case 'fr-ca':
			return fr;
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
		lang
	};
};
