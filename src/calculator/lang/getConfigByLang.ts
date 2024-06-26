import * as en from './config.js';
import * as frca from './config.fr-ca.js';
import * as frfr from './config.fr-fr.js';
import * as gb from './config.en-gb.js';
import * as enca from './config.en-ca.js';
import * as enau from './config.en-au.js';
import * as ptbr from './config.pt-br.js';
import * as esmx from './config.es-mx.js';
import * as dede from './config.de-de.js';
import type { TranslationState } from '../types.js';

const getTranslationData = (lang: string) => {
	const langLowercase = lang.toLowerCase();

	switch (langLowercase) {
		case 'fr-ca':
			return frca;
		case 'fr-fr':
			return frfr;
		case 'en-gb':
			return gb;
		case 'en-ca':
			return enca;
		case 'en-au':
			return enau;
		case 'pt-br':
			return ptbr;
		case 'de-de':
			return dede;
		case 'es-mx':
			return esmx;
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
		lang: data.lang,
		valueMultiplier: 'valueMultiplier' in data ? data.valueMultiplier : 1,
		currencySymbol: 'currencySymbol' in data ? data.currencySymbol : 'narrowSymbol',
		currencyLocale: 'currencyLocale' in data ? data.currencyLocale : data.lang,
		currencySymbolFormatter:
			'currencySymbolFormatter' in data ? data.currencySymbolFormatter : (value: string) => value
	};
};
