import { writable, type Writable } from 'svelte/store';
import type { TranslationState } from '../types.js';

getTranslations;

import { getTranslations } from '../lang/getConfigByLang.js';
import { getContext } from 'svelte';

const translationDefaultState: TranslationState = getTranslations('en');

export const getTranslationStore = (lang?: string) => {
	const initialState: TranslationState = {
		...translationDefaultState,
		...getTranslations(lang || 'en')
	};

	const store = writable<TranslationState>(initialState);

	return store;
};

export const TRANSLATION_STORE_CONTENXT = 'translationState';

export const getTranslationStoreContext = () =>
	getContext<Writable<TranslationState>>(TRANSLATION_STORE_CONTENXT);
