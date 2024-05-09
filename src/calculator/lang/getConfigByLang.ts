import * as en from './config.js';
import * as frca from './config.fr-ca.js';
import * as gb from './config.en-gb.js';
import * as enca from './config.en-ca.js';
import * as enau from './config.en-ca.js';
import type { TranslationState } from '../types.js';

const getTranslationData = (lang: string) => {
	const langLowercase = lang.toLowerCase();

	switch (langLowercase) {
		case 'fr-ca':
			return frca;
		case 'en-gb':
			return gb;
		case 'en-ca':
			return enca;
		case 'en-au':
			return enau;
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
