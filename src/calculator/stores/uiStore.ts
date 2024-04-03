import { writable } from 'svelte/store';
import type { StoredCalcState, UIState } from '../types.js';
import { storage } from '../utils/localStorage.js';
import { getOptionsSequence } from '../utils/optionsSequence.js';

const LS_KEY = 'ASSESSMENT_FORM_UI_STATE';

const uiDefaultState: UIState = {
	currentFocus: 'first',
	isResubmitting: false,
	isSubmitted: false,
	isInitLoaded: false,
	activeOption: 'businessArea',
	optionsSequence: ['businessArea', 'industry']
};

const localStorageState = storage<UIState>(LS_KEY);

export const getUiStore = (answerState: StoredCalcState) => {
	const persistedState = localStorageState.get() || uiDefaultState;

	const optionsSequence = getOptionsSequence(answerState);
	const activeOption =
		answerState.last.driver.length > 0 && persistedState.isSubmitted
			? null
			: optionsSequence.includes(persistedState.activeOption || '')
				? persistedState.activeOption
				: optionsSequence[0];

	const initialState: UIState = {
		...uiDefaultState,
		...persistedState,
		...{
			optionsSequence: getOptionsSequence(answerState),
			activeOption
		},
		...(persistedState?.isSubmitted
			? {
					isSubmitted: false,
					isResubmitting: true
				}
			: {
					isSubmitted: false
				})
	};

	const store = writable<UIState>(initialState);

	store.subscribe((state) => {
		localStorageState.set(state);
	});

	const resetStore = () => {
		store.set(uiDefaultState);
	};

	return { store, defaultState: uiDefaultState, resetStore };
};
