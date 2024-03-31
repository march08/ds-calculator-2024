import { writable } from 'svelte/store';
import type { UIState } from '../types.js';
import { storage } from '../utils/localStorage.js';

const LS_KEY = 'ASSESSMENT_FORM_UI_STATE';

const uiDefaultState: UIState = {
	currentFocus: 'first',
	isResubmitting: false,
	isSubmitted: false,
	isInitLoaded: false
};

const localStorageState = storage<UIState>(LS_KEY);

export const getUiStore = () => {
	const persistedState = localStorageState.get() || uiDefaultState;

	const initialState: UIState = {
		...uiDefaultState,
		...persistedState,
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
